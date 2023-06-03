class EmailAlreadyExists extends Error {
  constructor() {
    super('email already exists');
    Object.setPrototypeOf(this, EmailAlreadyExists.prototype);
  }
}

export default EmailAlreadyExists;
