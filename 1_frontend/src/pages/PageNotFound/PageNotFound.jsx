import React from 'react';
import { useNavigate } from 'react-router-dom';
import pageNotFound from '../../assets/pageNotFound.png';
import './PageNotFound.scss';
import Button from '../../component/atoms/Button';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="main">
      <div className="error-wrapper">
        <img src={pageNotFound} alt="Page not found error" />
        <Button bgColor="secondary-light" action={() => navigate('/')}>
          Go back to Home
        </Button>
      </div>
    </main>
  );
};

export default PageNotFound;
