import React from 'react';
import './Legal.css';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1 className="legal-title">What's New</h1>
      </div>

      <div className="legal-content">
        <section className="legal-section" id="mobile-app">
          <h2 className="legal-section-title">Mobile App</h2>
          <div className="legal-section-content">
            <p>
              Download the Parallel mobile app to manage your parking experience with ease and convenience.
            </p>
            <div className="app-buttons">
              <a href="#" className="app-store-btn">
                <img src="/assets/app_ios_download.svg" alt="Download on the App Store" />
              </a>
              <a href="#" className="app-store-btn">
                <img src="/assets/app_android_download.svg" alt="Get it on Google Play" />
              </a>
              <a href="https://pay.parkwithparallel.com" className="app-store-btn" target="_blank" rel="noopener noreferrer">
                <img src="/assets/app_web.svg" alt="Use on Web" />
              </a>
            </div>
          </div>
        </section>

        <section className="legal-section" id="operator-portal">
          <h2 className="legal-section-title">Operator Portal</h2>
          <div className="legal-section-content">
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
            </div>
            <div className="home-highlight">
              <p>
                If you already own Parallel and would like to manage your lot, visit the operator portal at{' '}
                <a href="https://operator.parkwithparallel.com" className="legal-link">operator.parkwithparallel.com</a>
              </p>
            </div>
            <div className="operator-portal-btn">
              <a href="https://operator.parkwithparallel.com" className="legal-nav-link">
                <img src="/assets/Logo_Operator_Inline.svg" alt="Operator Logo" style={{ height: '16px' }} />
                <span className="legal-nav-arrow">→</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
