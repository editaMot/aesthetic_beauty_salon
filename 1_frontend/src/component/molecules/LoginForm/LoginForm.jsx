import { useState, useRef } from 'react';
import { Form, Formik } from 'formik';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { useAuth } from '../../../context/AuthContext';
import { loginSchema } from '../../../schemas/loginForm';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './LoginForm.scss';

const LoginForm = ({ initialValues }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      setError('');
      setLoading(true);
      await login(values.email, values.password);
      navigate('/clients-list');
    } catch {
      setError('Email or password is incorrect');
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <Formik
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        {() => (
          <Form className="login-form" ref={formRef}>
            {error && <p className="login-error">{error}</p>}
            <Input label="Email" name="email" type="email" />
            <Input label="Password" name="password" type="password" autoComplete="on" />

            <Button type="submit" bgColor="primary-light" smallBtn disabled={loading}>
              Log In
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

LoginForm.propTypes = {
  initialValues: PropTypes.object,
};

export default LoginForm;
