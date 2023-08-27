import React from 'react';
import classnames from 'classnames';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({
  children,
  action,
  disabled,
  bgColor,
  type = 'button',
  noStyle,
  smallBtn,
  alignEnd,
}) => {
  return (
    <button
      className={classnames(
        'btn',
        disabled && 'btn--disabled',
        bgColor && `btn--${bgColor}`,
        noStyle && `btn--without-style`,
        smallBtn && 'btn--sm',
        alignEnd && 'btn--end',
      )}
      type={type}
      onClick={action}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  action: PropTypes.func,
  disabled: PropTypes.bool,
  bgColor: PropTypes.oneOf(['primary', 'primary-light', 'secondary', 'secondary-light']),
  type: PropTypes.string,
  noStyle: PropTypes.bool,
  smallBtn: PropTypes.bool,
  alignEnd: PropTypes.bool,
};

export default Button;
