import React, { useEffect, useState } from 'react';
import './Modal.css';

interface YoutubeVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title: string;
}

// Operator tutorial video IDs that require password protection
const PROTECTED_VIDEO_IDS = ['V2lEswZgZEw', 'D4K5Z3psYAI', 'HoAepPFQdG8'];
const PASSWORD = 'Vide0';
const AUTH_STORAGE_KEY = 'parallel_video_auth';
const PAGE_LOAD_KEY = 'parallel_page_load_time';
const AUTH_TTL = 10 * 60 * 1000;

// Get or set page load time
const getPageLoadTime = (): number => {
  const stored = sessionStorage.getItem(PAGE_LOAD_KEY);
  if (stored) {
    return parseInt(stored, 10);
  }
  const now = Date.now();
  sessionStorage.setItem(PAGE_LOAD_KEY, now.toString());
  return now;
};

// Helper functions for sessionStorage authentication (clears on browser refresh)
const getStoredAuth = (): { isAuthenticated: boolean; timestamp: number } | null => {
  try {
    const stored = sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.warn('Failed to parse stored authentication:', error);
  }
  return null;
};

const setStoredAuth = (isAuthenticated: boolean): void => {
  try {
    const authData = {
      isAuthenticated,
      timestamp: Date.now()
    };
    sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData));
    console.log('Authentication stored:', authData);
  } catch (error) {
    console.warn('Failed to store authentication:', error);
  }
};

const isAuthValid = (): boolean => {
  const stored = getStoredAuth();
  if (!stored) {
    console.log('No stored authentication found');
    return false;
  }

  const pageLoadTime = getPageLoadTime();
  const now = Date.now();
  const timeElapsed = now - stored.timestamp;
  const isExpired = timeElapsed > AUTH_TTL;
  const isFromPreviousSession = stored.timestamp < pageLoadTime;

  console.log(`Auth check: ${timeElapsed}ms elapsed, TTL: ${AUTH_TTL}ms, Expired: ${isExpired}, From previous session: ${isFromPreviousSession}`);

  if (isExpired || isFromPreviousSession) {
    // Clear expired or old auth
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    console.log('Authentication expired or from previous session, cleared from storage');
    return false;
  }

  console.log('Authentication is valid');
  return stored.isAuthenticated;
};

const YoutubeVideoModal: React.FC<YoutubeVideoModalProps> = ({ isOpen, onClose, videoId, title }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isProtectedVideo = PROTECTED_VIDEO_IDS.indexOf(videoId) !== -1;

  // Initialize page load time tracking
  useEffect(() => {
    getPageLoadTime(); // This will set the page load time if not already set
    console.log('Component mounted, page load time tracked');
  }, []);
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Check stored authentication when modal opens or video changes
  useEffect(() => {
    if (isOpen) {
      setPassword('');
      // Check if we have valid stored authentication
      const hasValidAuth = isAuthValid();
      setIsAuthenticated(hasValidAuth);
    }
  }, [isOpen, videoId]);

  // Auto-authenticate when password matches and store in sessionStorage
  useEffect(() => {
    if (password === PASSWORD) {
      console.log('Password correct! Setting authentication...');
      setIsAuthenticated(true);
      setStoredAuth(true);
    }
  }, [password]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="modal-content">
          {isProtectedVideo && !isAuthenticated ? (
            <div className="password-protection">
              <p className="password-message">This video is currently password protected:</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="password-input"
                autoFocus
              />
            </div>
          ) : (
            <div className="youtube-embed">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideoModal;
