import * as yup from 'yup';

const nameValidation = /^(?!\p{Zs})(?!.*\p{Zs}$)[\p{L}\p{M}\p{Zs}]{2,30}$/u;
const emailValidation = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

export const clientSchema = yup.object().shape({
  name: yup
    .string()
    .required('Enter your full name')
    .matches(
      nameValidation,
      'Name should contain at least 2 characters, only alphabets, no numbers or other special characters.',
    ),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Enter your email adress')
    .matches(emailValidation, 'Invalid email address'),
  date: yup.string().required('Select visitation date'),
  time: yup.string().required('Select visitation time'),
});
