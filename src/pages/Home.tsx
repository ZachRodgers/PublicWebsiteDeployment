import React, { useState, useRef } from 'react';
import './Legal.css';
import './Home.css';

const Home: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <div className="legal-page-container">
      <div className="legal-content">
        <div id="home" className="hero-video-container">
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/images/app1.jpg"
          >
            <source src="/assets/hero/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            className="video-control-btn"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause video" : "Play video"}
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

        <section className="legal-section" id="mobile-app">
          <h2 className="legal-section-title">Mobile App</h2>
          <div className="legal-section-content">
            <p>
              Download the Parallel mobile app to manage your parking experience with ease and convenience.
            </p>
            <div className="app-buttons">
              <a href="https://apps.apple.com/app/parallel-parking" className="app-store-btn" target="_blank" rel="noopener noreferrer">
                <img src="/assets/app_ios_download.svg" alt="Download on the App Store" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.parallel.parking" className="app-store-btn" target="_blank" rel="noopener noreferrer">
                <img src="/assets/app_android_download.svg" alt="Get it on Google Play" />
              </a>
              <a href="https://pay.parkwithparallel.com" className="app-store-btn" target="_blank" rel="noopener noreferrer">
                <img src="/assets/app_web.svg" alt="Use on Web" />
              </a>
            </div>
            <div className="app-screenshots">
              <img src="/assets/images/app1.jpg" alt="Parallel App Screenshot 1" />
              <img src="/assets/images/app2.jpg" alt="Parallel App Screenshot 2" />
              <img src="/assets/images/app3.jpg" alt="Parallel App Screenshot 3" />
              <img src="/assets/images/app4.jpg" alt="Parallel App Screenshot 4" />
              <img src="/assets/images/app5.jpg" alt="Parallel App Screenshot 5" />
              <img src="/assets/images/app6.jpg" alt="Parallel App Screenshot 6" />
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
