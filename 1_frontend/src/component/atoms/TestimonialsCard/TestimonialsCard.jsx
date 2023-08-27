import React from 'react';
import PropTypes from 'prop-types';
import './TestimonialsCard.scss';

const TestimonialsCard = ({ review, name, procedure }) => {
  return (
    <div className="testimonial">
      <p className="testimonial__review">{review}</p>
      <span className="testimonial__quotes">&lsquo;&lsquo;</span>
      <p className="testimonial__name">{name}</p>
      <p className="testimonial__procedure">{procedure}</p>
    </div>
  );
};

TestimonialsCard.propTypes = {
  review: PropTypes.string,
  name: PropTypes.string,
  procedure: PropTypes.string,
};

export default TestimonialsCard;
