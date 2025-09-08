import React from 'react';
import './Page.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Privacy Policy</h1>
        <div className="content-section">
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, 
            use our services, or contact us for support.
          </p>
        </div>
        
        <div className="content-section">
          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, 
            process transactions, and communicate with you.
          </p>
        </div>
        
        <div className="content-section">
          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this policy.
          </p>
        </div>
        
        <div className="content-section">
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction.
          </p>
        </div>
        
        <div className="content-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at 
            privacy@parkwithparallel.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
