import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div id="home" className="coming-soon-box">
        <p className="message">Parallel's Website is currently unavailable</p>
      </div>
      
      <div id="app" className="section">
        <div className="section-content">
          <h2>Parallel App</h2>
          <p>The Parallel mobile app is coming soon. Download it to manage your parking experience with ease and convenience.</p>
        </div>
      </div>

      <div id="operator" className="section">
        <div className="section-content">
          <h2>Operator Portal</h2>
          <p>Access the Parallel Operator Portal to manage your parking operations, view analytics, and configure your parking solutions.</p>
          <a href="https://operator.parkwithparallel.com" className="btn-operator">
            <img src="/assets/Logo_Operator_Inline.svg" alt="Operator Logo" style={{ height: '20px' }} />
            Go to Operator Portal
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
