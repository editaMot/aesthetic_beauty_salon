import React from 'react';
import PropTypes from 'prop-types';
import hero from '../../../assets/images/hero.jpg';
import Button from '../Button';
import './Hero.scss';

const Hero = ({ heading, text, btn, action }) => {
  return (
    <div className="hero">
      <div className="hero__info">
        <h1>{heading}</h1>
        <span></span>
        <p>{text}</p>
        <Button bgColor="secondary-light" action={action}>
          {btn}
        </Button>
      </div>
      <div className="hero__img">
        <img src={hero} alt="Women holding folwers" />
      </div>
    </div>
  );
};

Hero.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  btn: PropTypes.string,
  action: PropTypes.func,
};

export default Hero;
