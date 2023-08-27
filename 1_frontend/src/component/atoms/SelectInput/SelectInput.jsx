import PropTypes from 'prop-types';
import './SelectInput.scss';
import { useField } from 'formik';

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="select-input">
      <label>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </div>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string,
};

export default SelectInput;
