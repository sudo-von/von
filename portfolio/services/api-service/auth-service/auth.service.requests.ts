export type AuthAccountRequest = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export type AuthCredentialsRequest = {
  email: string;
  password: string;
};
