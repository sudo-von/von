class UserNotFoundError extends Error {
  constructor() {
    super('user not found');
    Object.setPrototypeOf(this, UserNotFoundError.prototype);
  }
}

export default UserNotFoundError;
