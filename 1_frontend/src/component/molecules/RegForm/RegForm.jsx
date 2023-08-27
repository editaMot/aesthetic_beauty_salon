import { useState, useRef, useCallback } from 'react';
import './RegForm.scss';
import { Form, Formik } from 'formik';
import { clientSchema } from '../../../schemas/registrationForm';
import axios from 'axios';
import Input from '../../atoms/Input';
import SelectInput from '../../atoms/SelectInput';
import Button from '../../atoms/Button';
import generateFreeTime from '../../../utils/generateFreeTime';
import PropTypes from 'prop-types';
import sendEmail from '../../../utils/sendEmail';

const RegForm = ({ editClientInfo, clientId, setIsSubmitted }) => {
  const [dateValue, setDateValue] = useState('');

  const form = useRef();
  const freeVisitationTime = generateFreeTime(dateValue);

  const currentDate = new Date().toISOString().split('T')[0];

  const onSubmit = useCallback(
    (values, actions) => {
      try {
        clientId
          ? axios.put(`${import.meta.env.VITE_APP_API_URL}/${clientId}`, values)
          : axios.post(import.meta.env.VITE_APP_API_URL, values) && actions.resetForm();

        sendEmail(import.meta.env.VITE_APP_EMAILJS_REGISTRATION_TEMPLATE_ID, form);
        setIsSubmitted(true);
      } catch (error) {
        console.log(error);
      }
    },
    [clientId],
  );

  return (
    <div className="container">
      <Formik
        initialValues={editClientInfo}
        validationSchema={clientSchema}
        onSubmit={onSubmit}
      >
        {({ handleChange }) => (
          <Form className="registration-form" ref={form}>
            <Input label="Name" name="name" type="text" />
            <Input label="Email" name="email" type="email" />
            <Input
              label="Date"
              name="date"
              type="date"
              min={currentDate}
              onChange={(e) => {
                setDateValue(e.currentTarget.value);
                handleChange(e);
              }}
            />
            <SelectInput label="Time" name="time">
              <option value="" disabled>
                Select time
              </option>
              {freeVisitationTime.map((option, index) => {
                return (
                  <option key={option + index} value={option}>
                    {option}
                  </option>
                );
              })}
            </SelectInput>
            <Button type="submit" bgColor="secondary-light">
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

RegForm.propTypes = {
  editClientInfo: PropTypes.object,
  clientId: PropTypes.string,
  setIsSubmitted: PropTypes.func,
};

export default RegForm;
