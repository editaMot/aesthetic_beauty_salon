import * as yup from 'yup';

const emailValidation = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address or user with that email adress does not exist')
    .required('Enter your email adress')
    .matches(
      emailValidation,
      'Invalid email address or user with that email adress does not exist',
    ),
  password: yup.string().required('Enter your password'),
});
