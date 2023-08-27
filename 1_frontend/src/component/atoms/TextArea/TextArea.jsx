import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import './TextArea.scss';

const TextArea = ({ label, name, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <div className="textarea">
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
      <textarea {...field} {...props} />
      <label>{label}</label>
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default TextArea;
