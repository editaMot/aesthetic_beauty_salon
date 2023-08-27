import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <h3 className="contact__heading">CONTACT</h3>
      <span className="dash"></span>
      <a href="mailto:aesthetic.salon.test@gmail.com" className="contact__email">
        aesthetic.salon.test@gmail.com
      </a>
      <a href="tel:123-456-7890" className="contact__phone">
        +123 456 7890
      </a>
      <p className="contact__location">Based in Kaunas, Lithuania.</p>
    </div>
  );
};

export default Contact;
