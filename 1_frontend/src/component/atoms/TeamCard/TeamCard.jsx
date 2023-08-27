import React from 'react';
import './TeamCard.scss';
import PropTypes from 'prop-types';

const TeamCard = ({ img, name, workArea }) => {
  return (
    <div className="team">
      <img src={img} alt="Specialist photo" />
      <h3 className="team__heading">{name}</h3>
      <p className="team__specialty">{workArea}</p>
    </div>
  );
};

TeamCard.propTypes = {
  img: PropTypes.any,
  name: PropTypes.string,
  workArea: PropTypes.string,
};

export default TeamCard;
