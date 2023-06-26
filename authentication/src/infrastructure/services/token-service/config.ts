import JWTTokenService from './jwt-token-service/jwt-token-service';

const configureTokenServices = (SECRET_KEY: string) => {
  const tokenService = new JWTTokenService(SECRET_KEY);

  return { tokenService };
};

export default configureTokenServices;
