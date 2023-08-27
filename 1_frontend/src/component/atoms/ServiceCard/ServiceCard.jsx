import React from 'react';
import './ServiceCard.scss';
import PropTypes from 'prop-types';

const ServiceCard = ({ heading, icon }) => {
  return (
    <div className="card">
      {icon}
      <h3 className="card__heading">{heading}</h3>
    </div>
  );
};

ServiceCard.propTypes = {
  heading: PropTypes.string,
  icon: PropTypes.node,
};

export default ServiceCard;
