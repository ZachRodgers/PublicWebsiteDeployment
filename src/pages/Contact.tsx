import React, { useState } from 'react';
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

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        
        <div className="contact-info">
          <div className="info-section">
            <h2>Get in Touch</h2>
            <p>
              Have questions about Parallel's parking solutions? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          
          <div className="info-section">
            <h2>Business Inquiries</h2>
            <p>
              For business partnerships and enterprise solutions, please contact us at 
              business@parkwithparallel.com
            </p>
          </div>
          
          <div className="info-section">
            <h2>Support</h2>
            <p>
              Need technical support? Reach out to us at support@parkwithparallel.com
            </p>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send us a Message</h2>
          <form 
            id="inquiry-form" 
            action="https://formspree.io/f/mnndkrly" 
            method="POST"
            className="inquiry-form"
          >
            <div className="inline-inputs">
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="textarea-container">
              <textarea 
                name="message" 
                placeholder="Message" 
                value={formData.message}
                onChange={handleInputChange}
                required 
              />
              <button 
                type="submit" 
                className={`submit-btn ${isFormValid() ? 'enabled' : ''}`}
                disabled={!isFormValid()}
              >
                <img src="/assets/send.svg" alt="Send" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
