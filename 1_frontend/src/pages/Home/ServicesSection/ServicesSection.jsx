import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesSection.scss';
import services from '../../../data/services';
import ServiceCard from '../../../component/atoms/ServiceCard/ServiceCard';
import Button from '../../../component/atoms/Button';
import rightArrow from '../../../assets/images/rightArrow.svg';

const ServicesSection = () => {
  const navigate = useNavigate();
  return (
    <div className="wrapper" id="services-section">
      <section className="services">
        <h2 className="services__heading">OUR SERVICES</h2>
        <div className="services__list">
          {services.map((service) => (
            <ServiceCard
              heading={service.serviceName}
              icon={service.icon}
              key={service.serviceName}
            />
          ))}
        </div>
        <Button bgColor="secondary-light" action={() => navigate('/registration')}>
          Register now <img src={rightArrow} alt="arrow pointed right" />
        </Button>
      </section>
    </div>
  );
};

export default ServicesSection;
