import React from 'react';
import PropTypes from 'prop-types';

const CheckIcon = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0,0,256,256"
      width={size}
      height={size}
      fillRule="nonzero"
    >
      <defs>
        <linearGradient
          x1="9.858"
          y1="9.858"
          x2="38.142"
          y2="38.142"
          gradientUnits="userSpaceOnUse"
          id="color-1"
        >
          <stop offset="0" stopColor="#61c473"></stop>
          <stop offset="1" stopColor="#088242"></stop>
        </linearGradient>
      </defs>
      <g transform="">
        <g>
          <g transform="scale(5.33333,5.33333)">
            <path
              d="M44,24c0,11.045 -8.955,20 -20,20c-11.045,0 -20,-8.955 -20,-20c0,-11.045 8.955,-20 20,-20c11.045,0 20,8.955 20,20z"
              fill="url(#color-1)"
            ></path>
            <path
              d="M21.293,32.707l-8,-8c-0.391,-0.391 -0.391,-1.024 0,-1.414l1.414,-1.414c0.391,-0.391 1.024,-0.391 1.414,0l5.879,5.879l10.879,-10.879c0.391,-0.391 1.024,-0.391 1.414,0l1.414,1.414c0.391,0.391 0.391,1.024 0,1.414l-13,13c-0.39,0.391 -1.024,0.391 -1.414,0z"
              fill="#ffffff"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

CheckIcon.propTypes = {
  size: PropTypes.string,
};

export default CheckIcon;
