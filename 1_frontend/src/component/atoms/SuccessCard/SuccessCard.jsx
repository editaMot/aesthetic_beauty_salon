import React from 'react';
import CheckIcon from '../Icons/CheckIcon';
import Button from '../Button';
import PropTypes from 'prop-types';
import './SuccessCard.scss';

const SuccessCard = ({ text, btnText, size, action, hasBtn = 'true' }) => {
  return (
    <div className="success-card">
      <p className="success-card__text">{text}</p>
      <CheckIcon size={size} />
      {hasBtn && (
        <Button smallBtn action={action} bgColor="secondary-light">
          {btnText}
        </Button>
      )}
    </div>
  );
};

SuccessCard.propTypes = {
  text: PropTypes.string,
  btnText: PropTypes.string,
  size: PropTypes.string,
  action: PropTypes.func,
  hasBtn: PropTypes.bool,
};

export default SuccessCard;
