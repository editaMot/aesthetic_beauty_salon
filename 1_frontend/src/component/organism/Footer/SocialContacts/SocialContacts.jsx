import React from 'react';
import './SocialContacts.scss';
import SocialMedia from '../../../atoms/SocialMedia';

const SocialContacts = () => {
  return (
    <div className="social-contacts">
      <div className="social-contacts__logo">
        <a href="/">Aesthetic</a>
      </div>
      <SocialMedia />
      <span className="copyright">
        &copy; All rights reserved {new Date().getFullYear()}
      </span>
    </div>
  );
};

export default SocialContacts;
