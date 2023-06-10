export type ErrorFactory = {
  name: string;
  message: string;
};

const createErrorFactory = ({
  name,
  message,
}: ErrorFactory) => class CustomError extends Error {
  constructor() {
    super(message);
    this.name = name;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
};

export default createErrorFactory;
