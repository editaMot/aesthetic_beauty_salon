import PropTypes from 'prop-types';
import { Field, useField } from 'formik';
import './Input.scss';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="input">
      <label>{label}</label>
      <Field {...field} {...props} />
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
};

export default Input;
