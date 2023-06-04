import { checkSchema } from 'express-validator';

const createUserValidator = checkSchema({
  name: {
    trim: true,
    notEmpty: true,
    errorMessage: 'name field is required',
    isLength: {
      options: {
        min: 6,
        max: 30,
      },
      errorMessage: 'name field must contain from 6 to 30 characters',
    },
  },
  email: {
    trim: true,
    notEmpty: true,
    errorMessage: 'email field is required',
    isEmail: {
      errorMessage: 'email field must be a valid e-mail address',
    },
  },
  username: {
    trim: true,
    notEmpty: true,
    errorMessage: 'username field is required',
    isLength: {
      options: {
        min: 6,
        max: 12,
      },
      errorMessage: 'username field must contain from 6 to 12 characters',
    },
  },
  password: {
    trim: true,
    notEmpty: true,
    errorMessage: 'password field is required',
    isLength: {
      options: {
        min: 8,
        max: 20,
      },
      errorMessage: 'password field must contain from 8 to 20 characters',
    },
  },
  repeat_password: {
    trim: true,
    notEmpty: true,
    errorMessage: 'repeat_password field is required',
    custom: {
      options: (repeat_password: string, { req }) => repeat_password === req.body.password,
      errorMessage: "passwords don't match",
    },
  },
  birth_date: {
    trim: true,
    notEmpty: true,
    errorMessage: 'birth_date field is required',
    isDate: {
      options: {
        format: 'yyyy-mm-dd',
      },
      errorMessage: "birth_date field must have the following format 'yyyy-mm-dd'",
    },
  },
});

export default createUserValidator;
