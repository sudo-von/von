export const errorCodes = {
  INVALID_EMAIL_OR_PASSWORD: {
    statusCode: 400, // Bad Request
    message: 'Invalid email address or password'
  },
  USER_NOT_FOUND: {
    statusCode: 404, // Not Found
    message: 'User not found'
  },
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    message: 'Something went wrong...'
  }
};
