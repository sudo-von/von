class InvalidEmail extends Error {
  constructor() {
    super('email field is invalid');
    Object.setPrototypeOf(this, InvalidEmail.prototype);
  }
}

export default InvalidEmail;
