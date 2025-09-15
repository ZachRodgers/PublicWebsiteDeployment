import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import LoadingLogo from '../components/LoadingLogo';
import YoutubeVideoModal from '../components/YoutubeVideoModal';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Home: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<{ id: string; title: string } | null>(null);
  const [deviceType, setDeviceType] = useState<'ios' | 'android' | 'desktop'>('desktop');
  const [showAppScrollArrow, setShowAppScrollArrow] = useState(false);
  const [showTutorialScrollArrow, setShowTutorialScrollArrow] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const appScreenshotsRef = useRef<HTMLDivElement>(null);
  const tutorialThumbnailsRef = useRef<HTMLDivElement>(null);
  const { scrollToSection } = useScrollToSection();

  // Handle navigation from other pages
  useEffect(() => {
    const sectionToScroll = sessionStorage.getItem('scrollToSection');
    const scrollToTutorials = sessionStorage.getItem('scrollToTutorials');

    if (sectionToScroll) {
      // Clear the stored section
      sessionStorage.removeItem('scrollToSection');
      // Wait for the page to be fully rendered, then scroll
      setTimeout(() => {
        scrollToSection(sectionToScroll);

        // If we need to scroll to tutorials, do that after scrolling to operator portal
        if (scrollToTutorials) {
          sessionStorage.removeItem('scrollToTutorials');
          setTimeout(() => {
            const tutorialsSection = document.querySelector('.operator-tutorials');
            if (tutorialsSection) {
              tutorialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 500);
        }
      }, 200);
    }
  }, [scrollToSection]);

  // Detect device type
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setDeviceType('ios');
    } else if (/android/.test(userAgent)) {
      setDeviceType('android');
    } else {
      setDeviceType('desktop');
    }
  }, []);

  // Check if scroll arrows should be shown
  useEffect(() => {
    const checkScrollArrows = () => {
      if (appScreenshotsRef.current) {
        const { scrollWidth, clientWidth } = appScreenshotsRef.current;
        setShowAppScrollArrow(scrollWidth > clientWidth);
      }
      if (tutorialThumbnailsRef.current) {
        const { scrollWidth, clientWidth } = tutorialThumbnailsRef.current;
        setShowTutorialScrollArrow(scrollWidth > clientWidth);
      }
    };

    checkScrollArrows();
    window.addEventListener('resize', checkScrollArrows);
    return () => window.removeEventListener('resize', checkScrollArrows);
  }, []);

  const scrollToEnd = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollWidth,
        behavior: 'smooth'
      });
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  const handleVideoError = () => {
    setIsVideoLoading(false);
  };

  const openVideoModal = (videoId: string, title: string) => {
    setCurrentVideo({ id: videoId, title });
    setModalOpen(true);
  };

  const closeVideoModal = () => {
    setModalOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div className="home-page-container">
      <div className="home-content">
        <div id="home" className="hero-video-wrapper">
          <div className="hero-video-container">
            {isVideoLoading && (
              <div className="video-loading-overlay">
                <LoadingLogo text="Loading video..." />
              </div>
            )}
            <video
              ref={videoRef}
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/images/app1.jpg"
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
              style={{ opacity: isVideoLoading ? 0 : 1 }}
            >
              <source src="/assets/hero/herovideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              className="video-control-btn"
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              style={{ opacity: isVideoLoading ? 0 : 1 }}
            >
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="4" width="4" height="16" fill="white" />
                  <rect x="14" y="4" width="4" height="16" fill="white" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" fill="white" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <section className="home-section" id="mobile-app">
          <h2 className="home-section-title">Mobile App</h2>
          <div className="home-section-content">
            <p>
              Download the Parallel mobile app to manage your parking experience with ease and convenience.
            </p>
            <div className="app-buttons">
              {deviceType === 'ios' && (
                <>
                  <a href="https://apps.apple.com/ca/app/parallel-mobile/id6751863179" className="app-store-btn" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/app_ios_download.svg" alt="Download on the App Store" />
                  </a>
                  <a href="https://pay.parkwithparallel.com" className="app-store-btn" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/app_web.svg" alt="Use on Web" />
                  </a>
                </>
              )}
              {deviceType === 'android' && (
                <>
                  <a href="https://play.google.com/store/apps/details?id=com.parkwithparallel" className="app-store-btn" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/app_android_download.svg" alt="Get it on Google Play" />
                  </a>
                  <a href="https://pay.parkwithparallel.com" className="app-store-btn" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/app_web.svg" alt="Use on Web" />
                  </a>
                </>
              )}
              {deviceType === 'desktop' && (
                <>
                  <a href="https://apps.apple.com/ca/app/parallel-mobile/id6751863179" className="app-store-btn" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/app_ios_download.svg" alt="Download on the App Store" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.parkwithparallel" className="app-store-btn" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/app_android_download.svg" alt="Get it on Google Play" />
                  </a>
                  <a href="https://pay.parkwithparallel.com" className="app-store-btn" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/app_web.svg" alt="Use on Web" />
                  </a>
                </>
              )}
            </div>
            <div className="app-screenshots-container">
              <div className="app-screenshots" ref={appScreenshotsRef}>
                <img src="/assets/images/app1.jpg" alt="Parallel App Screenshot 1" />
                <img src="/assets/images/app2.jpg" alt="Parallel App Screenshot 2" />
                <img src="/assets/images/app3.jpg" alt="Parallel App Screenshot 3" />
                <img src="/assets/images/app4.jpg" alt="Parallel App Screenshot 4" />
                <img src="/assets/images/app5.jpg" alt="Parallel App Screenshot 5" />
                <img src="/assets/images/app6.jpg" alt="Parallel App Screenshot 6" />
              </div>
              {showAppScrollArrow && (
                <button
                  className="scroll-arrow scroll-arrow-right"
                  onClick={() => scrollToEnd(appScreenshotsRef)}
                  aria-label="Scroll to see more screenshots"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="home-section" id="operator-portal">
          <h2 className="home-section-title">Operator Portal</h2>
          <div className="home-section-content">
            <p>
              The Parallel Operator Portal provides comprehensive tools for managing parking operations,
              viewing analytics, and configuring your parking solutions. Access real-time data,
              manage user accounts, and optimize your parking lot performance.
            </p>
            <div className="operator-buttons">
              <a href="/contact" className="legal-nav-link">
                Request a Demo
                <span className="legal-nav-arrow">→</span>
              </a>
              <a href="https://operator.parkwithparallel.com" className="legal-nav-link">
                <img src="/assets/Logo_Operator_Inline.svg" alt="Operator Logo" style={{ height: '16px' }} />
                <span className="legal-nav-arrow">→</span>
              </a>
            </div>
            <div className="operator-screenshots">
              <img src="/assets/images/operator1.jpg" alt="Parallel Operator Portal Screenshot 1" />
              {/* <img src="/assets/images/operator.jpg" alt="Parallel Operator Portal Screenshot 2" /> */}
            </div>
            <div className="home-highlight">
              <p>
                If you already own Parallel and would like to manage your lot, visit the operator portal at{' '}
                <a href="https://operator.parkwithparallel.com" className="home-link">operator.parkwithparallel.com</a>
              </p>
            </div>

            <div className="operator-tutorials">
              <h3 className="tutorials-title">Operator Tutorials</h3>
              <p className="tutorials-description">
                Tutorials on features of the operator portal and how to use them. Please note more tutorials are available within the web app itself.
              </p>
              <div className="tutorial-thumbnails-container">
                <div className="tutorial-thumbnails" ref={tutorialThumbnailsRef}>
                  <div className="tutorial-thumbnail" onClick={() => openVideoModal('V2lEswZgZEw', 'Dashboard Tutorial')}>
                    <img src="/assets/images/tutorial_thumnail_dashboard.jpg" alt="Dashboard Tutorial" />
                    <div className="play-button-overlay">
                      <button className="play-button" aria-label="Play Dashboard Tutorial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5v14l11-7z" fill="white" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="tutorial-thumbnail" onClick={() => openVideoModal('D4K5Z3psYAI', 'Registry Tutorial')}>
                    <img src="/assets/images/tutorial_thumnail_registry.jpg" alt="Registry Tutorial" />
                    <div className="play-button-overlay">
                      <button className="play-button" aria-label="Play Registry Tutorial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5v14l11-7z" fill="white" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="tutorial-thumbnail" onClick={() => openVideoModal('HoAepPFQdG8', 'Advanced Settings Tutorial')}>
                    <img src="/assets/images/tutorial_thumnail_advanced.jpg" alt="Advanced Settings Tutorial" />
                    <div className="play-button-overlay">
                      <button className="play-button" aria-label="Play Advanced Settings Tutorial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5v14l11-7z" fill="white" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                {showTutorialScrollArrow && (
                  <button
                    className="scroll-arrow scroll-arrow-right"
                    onClick={() => scrollToEnd(tutorialThumbnailsRef)}
                    aria-label="Scroll to see more tutorials"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {currentVideo && (
        <YoutubeVideoModal
          isOpen={modalOpen}
          onClose={closeVideoModal}
          videoId={currentVideo.id}
          title={currentVideo.title}
        />
      )}
    </div>
  );
};

export default Home;
