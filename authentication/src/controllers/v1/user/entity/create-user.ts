import { body } from "express-validator";

export type CreateUser = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  profile_picture: string;
};

const MIN_NAME_LENGTH = 8;
const MIN_PASSWORD_LENGTH = 10;

const validateName = body("name")
  .trim()
  .isLength({ min: MIN_NAME_LENGTH })
  .withMessage(
    `name field must contain at least ${MIN_NAME_LENGTH} characters.`
  );

const validateEmail = body("email")
  .trim()
  .isEmail()
  .withMessage(`email field must contain a valid email.`);

const validatePassword = body("password")
  .trim()
  .isLength({
    min: MIN_PASSWORD_LENGTH,
  })
  .withMessage(
    `password field must contain at least ${MIN_PASSWORD_LENGTH} characters.`
  );

const validateConfirmPassword = body("confirm_password")
  .trim()
  .notEmpty()
  .withMessage("confirm_password field is required.")
  .custom((value, { req }) => {
    if (value !== req.body.password)
      throw new Error("passwords must be the same.");
    return true;
  });

const validateProfilePicture = body("profile_picture")
  .trim()
  .isURL()
  .withMessage(`profile_picture must contain a valid URL.`);

export const validateCreateUserHandler = [
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateProfilePicture,
];
