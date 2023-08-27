import React from 'react';
import './TestimonialsSection.scss';
import testimonials from '../../../data/testimonials';
import TestimonialsCard from '../../../component/atoms/TestimonialsCard/TestimonialsCard';
import Slider from '../../../component/atoms/Slider';

const TestimonialsSection = () => {
  const data = testimonials.map((testimonial) => (
    <TestimonialsCard
      key={testimonial.name + testimonial.procedure}
      name={testimonial.name}
      review={testimonial.review}
      procedure={testimonial.procedure}
    />
  ));

  return (
    <div className="testimonials-wrapper">
      <section className="testimonials">
        <h2 className="testimonials__heading">WHAT OUR CUSTOMERS SAYS</h2>
        <div className="testimonials__reviews">
          <Slider data={data} />
        </div>
      </section>
    </div>
  );
};

export default TestimonialsSection;
