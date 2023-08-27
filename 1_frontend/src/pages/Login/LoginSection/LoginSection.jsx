import React from 'react';
import list from '../../../assets/list.svg';
import LoginForm from '../../../component/molecules/LoginForm';
import './LoginSection.scss';

const LoginSection = () => {
  return (
    <div className="login-wrapper">
      <section className="login-section">
        <div className="login-section__img">
          <img src={list} alt="list" />
        </div>
        <div className="login-section__form">
          <h2>Login to see list of registered clients</h2>
          <LoginForm initialValues={{ email: '', password: '' }} />
        </div>
      </section>
    </div>
  );
};

export default LoginSection;
