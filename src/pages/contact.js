import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-container animate-fade-in">
      <h1>Contact Me</h1>
      <div className="links">
        <a href="https://github.com/ksh168" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github icon-large"></i>
        </a>
        <a href="https://www.linkedin.com/in/kunalsharma99" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin icon-large"></i>
        </a>
      </div>
      <div className="form-container">
        <iframe
          title="Contact Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSf2usX4TWduOTGARhA25yPm441D2a5Y6yq5gF312HIvdrHGyA/viewform?embedded=true"
          width="640"
          height="800"
          style={{ border: 'none' }}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Contact;