import React from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

const Legal: React.FC = () => {
  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1 className="legal-title">Legal</h1>
        <div className="legal-meta">
          <div className="legal-meta-item">
          </div>
        </div>
      </div>

      <div className="legal-content">
        <section className="legal-section" id="overview">
          <h2 className="legal-section-title">Overview</h2>
          <div className="legal-section-content">
            <p>
              Parallel Parking Solutions Inc. operates two distinct platforms: a public mobile application for parking management and a private operator portal for parking lot management. Each platform maintains separate terms of service and privacy policies to address their specific use cases and user bases.
            </p>
          </div>
        </section>

        <section className="legal-section" id="alpr-disclosure">
          <h2 className="legal-section-title">Automatic License Plate Recognition (ALPR)</h2>
          <div className="legal-section-content">
            <p>
              Participating parking lots are equipped with ALPR cameras and clearly marked signage disclosing the use of automatic license plate recognition technology. By entering a Parallel-enabled parking lot, users consent to having their license plate recorded for enforcement and billing purposes.
            </p>
            <p>
              License plate data may be collected before a user downloads the mobile app or creates an account. This data is stored anonymously until linked to a user account through the mobile application. All user account linking and personal data management is handled exclusively through the mobile app interface.
            </p>
          </div>
        </section>

        <section className="legal-section" id="legal-documents">
          <h2 className="legal-section-title">Legal Documents</h2>
          <div className="legal-section-content">
            <p>
              Review the terms of service and privacy policies for each platform:
            </p>
            <div className="legal-nav-buttons">
              <Link to="/legal/app/terms-of-service" className="legal-nav-link">
                App Terms of Service
                <span className="legal-nav-arrow">→</span>
              </Link>
              <Link to="/legal/app/privacy-policy" className="legal-nav-link">
                App Privacy Policy
                <span className="legal-nav-arrow">→</span>
              </Link>
              <Link
                to="/legal/operator/terms-of-service"
                className="legal-nav-link"
              >
                Operator Terms of Service
                <span className="legal-nav-arrow">→</span>
              </Link>
              <Link
                to="/legal/operator/privacy-policy"
                className="legal-nav-link"
              >
                Operator Privacy Policy
                <span className="legal-nav-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="legal-section" id="contact">
          <h2 className="legal-section-title">Contact & Data Management</h2>
          <div className="legal-section-content">
            <p>
              For legal questions, data deletion requests, or general inquiries, please contact:
            </p>
            <div className="legal-contact-info">
              <h3 className="legal-contact-title">Parallel Parking Solutions Inc.</h3>
              <div className="legal-contact-details">
                <p>
                  <a href="mailto:info@parkwithparallel.com" className="legal-email">info@parkwithparallel.com</a>
                </p>
              </div>
            </div>
            <div className="legal-alert-highlight">
              <p>
                <strong>Data Deletion:</strong> Users may delete their account and associated data directly through the mobile app (requires sign in).
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Legal;
