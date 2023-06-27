import JWTTokenService from './jwt-token-service/jwt-token-service';

const configureTokenService = (SECRET_KEY: string) => {
  const tokenService = new JWTTokenService(SECRET_KEY);

  console.log('🔧 Token service has been configured.');

  return tokenService;
};

export default configureTokenService;
