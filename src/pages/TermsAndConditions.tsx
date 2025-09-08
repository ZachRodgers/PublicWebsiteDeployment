import React from 'react';
import './Page.css';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Terms and Conditions</h1>
        <div className="content-section">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using Parallel's services, you accept and agree to be bound by the 
            terms and provision of this agreement.
          </p>
        </div>
        
        <div className="content-section">
          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of Parallel's materials for 
            personal, non-commercial transitory viewing only.
          </p>
        </div>
        
        <div className="content-section">
          <h2>Disclaimer</h2>
          <p>
            The materials on Parallel's website are provided on an 'as is' basis. Parallel makes 
            no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
          </p>
        </div>
        
        <div className="content-section">
          <h2>Limitations</h2>
          <p>
            In no event shall Parallel or its suppliers be liable for any damages arising out of 
            the use or inability to use the materials on Parallel's website.
          </p>
        </div>
        
        <div className="content-section">
          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws 
            and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
          </p>
        </div>
        
        <div className="content-section">
          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at 
            legal@parkwithparallel.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
