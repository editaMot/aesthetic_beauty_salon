import React from 'react';
import { Keyboard, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import PropTypes from 'prop-types';
import './Slider.scss';

const Slider = ({ data }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <Swiper
      spaceBetween={50}
      keyboard={{
        enabled: true,
      }}
      modules={[Keyboard, Pagination, A11y]}
      pagination={pagination}
      className="slider"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
};

Slider.propTypes = {
  data: PropTypes.array,
};

export default Slider;
