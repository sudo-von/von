class UserCouldntBeCreated extends Error {
  constructor() {
    super("user couldn't be created");
    Object.setPrototypeOf(this, UserCouldntBeCreated.prototype);
  }
}

export default UserCouldntBeCreated;
