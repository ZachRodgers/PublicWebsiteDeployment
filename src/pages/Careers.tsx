import React from 'react';
import './Legal.css';
import './Careers.css';

const Careers: React.FC = () => {
  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1 className="legal-title">Careers</h1>
        <div className="legal-meta">
          <div className="legal-meta-item">
          </div>
        </div>
      </div>

      <div className="legal-content">
        <section className="legal-section" id="company-overview">
          <h2 className="legal-section-title">Join Our Team</h2>
          <div className="legal-section-content">
            <p>
              At Parallel, we're revolutionizing parking solutions through innovative technology and exceptional user experiences.
              We're a dynamic team of problem-solvers, designers, and engineers who are passionate about creating seamless
              solutions that make users' lives better.
            </p>
            <p>
              We know how difficult parking can be, and we're not a parking company—we're a software company trying to make
              users' lives better. If you have a passion for user-oriented design and improving day-to-day life through
              innovative, user-friendly software, then we're a good fit. Our mission is to transform the way people interact
              with parking infrastructure, making it smarter, more convenient, and environmentally conscious. We believe in
              the power of technology to solve real-world challenges and create meaningful impact in communities.
            </p>
          </div>
        </section>

        <section className="legal-section" id="current-openings">
          <h2 className="legal-section-title">Open Positions</h2>
          <div className="legal-section-content">
            <div className="careers-openings">
              <div className="careers-opening">
                <div className="careers-opening-header">
                  <h3 className="careers-opening-title">Mobile Application Engineer</h3>
                  <span className="careers-opening-status">Role Open</span>
                </div>
                <div className="careers-opening-details">
                  <p className="careers-opening-location">Location: Remote (Anywhere)</p>
                  <p className="careers-opening-description">
                    Build and maintain our mobile applications. React Native, TypeScript, Swift, and Java experience preferred.
                  </p>
                  <a href="mailto:info@parkwithparallel.com" className="careers-contact-btn">
                    Contact Us to Learn More
                  </a>
                </div>
              </div>

              <div className="careers-opening">
                <div className="careers-opening-header">
                  <h3 className="careers-opening-title">DevOps Engineer</h3>
                  <span className="careers-opening-status">Role Open</span>
                </div>
                <div className="careers-opening-details">
                  <p className="careers-opening-location">Location: Remote (Anywhere)</p>
                  <p className="careers-opening-description">
                    Manage deployments and AWS infrastructure. AWS, CI/CD, PostgreSQL, Elastic Beanstalk, and Spring Boot experience required.
                  </p>
                  <a href="mailto:info@parkwithparallel.com" className="careers-contact-btn">
                    Contact Us to Learn More
                  </a>
                </div>
              </div>

              <div className="careers-opening">
                <div className="careers-opening-header">
                  <h3 className="careers-opening-title">Marketing Strategy Manager</h3>
                  <span className="careers-opening-status">Role Open</span>
                </div>
                <div className="careers-opening-details">
                  <p className="careers-opening-location">Location: Canada/US Only</p>
                  <p className="careers-opening-description">
                    Lead marketing strategy and content creation. Strategic planning, digital marketing, and B2B experience preferred.
                  </p>
                  <a href="mailto:info@parkwithparallel.com" className="careers-contact-btn">
                    Contact Us to Learn More
                  </a>
                </div>
              </div>

              <div className="careers-opening">
                <div className="careers-opening-header">
                  <h3 className="careers-opening-title">Business Development Lead</h3>
                  <span className="careers-opening-status">Role Open</span>
                </div>
                <div className="careers-opening-details">
                  <p className="careers-opening-location">Location: Canada/US Only</p>
                  <p className="careers-opening-description">
                    Drive business growth through partnerships and sales. B2B sales, partnership development, and growth strategies experience preferred.
                  </p>
                  <a href="mailto:info@parkwithparallel.com" className="careers-contact-btn">
                    Contact Us to Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="legal-section" id="general-inquiry">
          <div className="legal-section-content">
            <div className="careers-highlight">
              <p>
                We're always looking for talented individuals who share our vision and want to be part of building the future
                of smart parking solutions. Don't see a position relevant to you but think you would be a good fit for the
                Parallel team? Email us your resume and an introduction at{' '}
                <a href="mailto:info@parkwithparallel.com" className="legal-email">
                  info@parkwithparallel.com
                </a>
                {' '}and we'll be in touch if there's a potential fit.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
