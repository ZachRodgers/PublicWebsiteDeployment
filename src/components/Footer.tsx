import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';
import './Footer.css';

interface FooterProps {
  isSidebarCollapsed?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isSidebarCollapsed = false }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollToSection } = useScrollToSection();

  const handlePrivacySettings = () => {
    localStorage.removeItem('cookieConsent');
    window.location.reload();
  };

  const handleNewsletter = () => {
    // TODO: Implement newsletter signup
    console.log('Newsletter clicked');
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/contact');
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleCareersClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/careers') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/careers');
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLegalClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/legal') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/legal');
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLegalDocClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleTutorialsClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      // First scroll to operator portal section
      scrollToSection('operator-portal');
      // Then scroll to tutorials section within operator portal
      setTimeout(() => {
        const tutorialsSection = document.querySelector('.operator-tutorials');
        if (tutorialsSection) {
          tutorialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    } else {
      e.preventDefault();
      navigate('/');
      // Store both the section and tutorials scroll
      sessionStorage.setItem('scrollToSection', 'operator-portal');
      sessionStorage.setItem('scrollToTutorials', 'true');
    }
  };

  return (
    <footer className={`footer ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-section-title">Products</h4>
          <div className="footer-links">
            <a href="https://pay.parkwithparallel.com" className="footer-link" target="_blank" rel="noopener noreferrer">Web App</a>
            <a href="https://apps.apple.com/ca/app/parallel-mobile/id6751863179" className="footer-link" target="_blank" rel="noopener noreferrer">iOS App</a>
            <a href="https://play.google.com/store/apps/details?id=com.parkwithparallel" className="footer-link" target="_blank" rel="noopener noreferrer">Android App</a>
            <a href="https://operator.parkwithparallel.com" className="footer-link" target="_blank" rel="noopener noreferrer">Operator Portal</a>
            <button className="footer-link" onClick={handleTutorialsClick}>Tutorials</button>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-section-title">Legal</h4>
          <div className="footer-links">
            <button className="footer-link" onClick={(e) => handleLegalDocClick(e, '/legal/app/terms-of-service')}>App Terms of Service</button>
            <button className="footer-link" onClick={(e) => handleLegalDocClick(e, '/legal/app/privacy-policy')}>App Privacy Policy</button>
            <button className="footer-link" onClick={(e) => handleLegalDocClick(e, '/legal/operator/terms-of-service')}>Operator Terms of Service</button>
            <button className="footer-link" onClick={(e) => handleLegalDocClick(e, '/legal/operator/privacy-policy')}>Operator Privacy Policy</button>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-section-title">Company</h4>
          <div className="footer-links">
            <button className="footer-link" onClick={handleHomeClick}>Home</button>
            <button className="footer-link" onClick={handleCareersClick}>Careers</button>
            <button className="footer-link" onClick={handleContactClick}>Contact</button>
            <button className="footer-link" onClick={handleLegalClick}>Legal</button>
            <button className="footer-link" onClick={handleNewsletter}>
              Newsletter
            </button>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-section-title">Contact</h4>
          <div className="footer-links">
            <a href="mailto:info@parkwithparallel.com" className="footer-link">info@parkwithparallel.com</a>
            <button className="footer-link" onClick={handlePrivacySettings}>
              Privacy Settings
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="/assets/Logo_Parallel.svg" alt="Parallel" className="footer-logo-img" />
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Parallel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
