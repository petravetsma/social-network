export const validate = (promise) => (values) => {

  let errors = {};
  if (!values.email) {
    errors.email = 'Required email';
  } else if (values.email.length < 20) {
    errors.email = 'Email must be 20 characters or more';
  }

  return errors;
};
