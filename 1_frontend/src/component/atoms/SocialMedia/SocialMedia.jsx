import React from 'react';
import './SocialMedia.scss';
import IgIcon from '../Icons/IgIcon';
import FBIcon from '../Icons/FBIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import PinterestIcon from '../Icons/PinterestIcon';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
        <IgIcon size="26px" />
      </a>
      <a href="http://www.twitter.com" target="_blank" rel="noreferrer">
        <TwitterIcon size="22px" />
      </a>
      <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
        <FBIcon size="22px" />
      </a>
      <a href="http://www.pinterest.com" target="_blank" rel="noreferrer">
        <PinterestIcon size="23px" />
      </a>
    </div>
  );
};

export default SocialMedia;
