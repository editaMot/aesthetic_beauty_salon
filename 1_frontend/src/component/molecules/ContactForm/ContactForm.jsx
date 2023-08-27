import { useRef, memo } from 'react';
import { Form, Formik } from 'formik';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import TextArea from '../../atoms/TextArea/TextArea';
import { contactSchema } from '../../../schemas/contactForm';
import './ContactForm.scss';
import PropTypes from 'prop-types';
import sendEmail from '../../../utils/sendEmail';

const ContactForm = ({ initialValues, setIsSubmitted }) => {
  const form = useRef();

  return (
    <div>
      <Formik
        validationSchema={contactSchema}
        onSubmit={() => {
          sendEmail(import.meta.env.VITE_APP_EMAILJS_MESSAGE_TEMPLATE_ID, form);
          setIsSubmitted(true);
        }}
        initialValues={initialValues}
      >
        {() => (
          <Form ref={form} className="contact-form">
            <Input label="Name" name="name" type="text" />
            <Input label="Email" name="email" type="email" />
            <TextArea label="Message" name="message" />
            <Button type="submit" bgColor="primary-light" smallBtn>
              Sent
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  initialValues: PropTypes.object,
  setIsSubmitted: PropTypes.func,
};

export default memo(ContactForm);
