import React, { useState } from 'react';
import './Legal.css';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = () => {
    const { name, email, message } = formData;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return name.trim() && validEmail && message.trim();
  };

  const isEmailInvalid = () => {
    const { email } = formData;
    return email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1 className="legal-title">Contact Us</h1>
        <div className="legal-meta">
          <div className="legal-meta-item">
          </div>
        </div>
      </div>

      <div className="legal-content">

        <section className="legal-section" id="contact-form">
          <h2 className="legal-section-title">Inquire</h2>
          <div className="legal-section-content">
            <p>
              Inquire about setting up a Parallel in your parking lot. Use this form and provide a valid contact method, and we will respond to you within 24 hours.
            </p>
            <div className="contact-highlight">
              <p>
                We are currently piloting new products and may be able to offer a discounted rate to interested partners.
              </p>
            </div>
            <form
              id="inquiry-form"
              action="https://formspree.io/f/mnndkrly"
              method="POST"
              className="contact-form"
            >
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`form-input ${isEmailInvalid() ? 'invalid' : ''}`}
                />
              </div>
              <div className="form-textarea-container">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="form-textarea"
                />
                <button
                  type="submit"
                  className={`form-submit-btn ${isFormValid() ? 'enabled' : ''}`}
                  disabled={!isFormValid()}
                >
                  <img src="/assets/send.svg" alt="Send" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="legal-section" id="contact-info">
          <h2 className="legal-section-title">Contact</h2>
          <div className="legal-section-content">
            <p>
              For questions about Parallel's parking solutions, business partnerships, or technical support,
              please contact us at{' '}
              <a href="mailto:info@parkwithparallel.com" className="legal-email">
                info@parkwithparallel.com
              </a>
            </p>
          </div>
        </section>

        <section className="legal-section" id="office-info">
          <h2 className="legal-section-title">Our Office</h2>
          <div className="legal-section-content">
            <div className="legal-contact-info">
              <h3 className="legal-contact-title">Parallel Parking Solutions Inc.</h3>
              <div className="legal-contact-details">
                <p>A204, 770 Brookfield Rd</p>
                <p>Ottawa, ON K1V 2V4</p>
                <p>+1 (613) 581-7719</p>
                <p>
                  <a href="mailto:info@parkwithparallel.com" className="legal-email">info@parkwithparallel.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
