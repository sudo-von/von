import JoseTokenService from '../services/token-service/jose-token-service/jose-token-service';

const configureTokenService = (SECRET_KEY: string) => {
  const tokenService = new JoseTokenService(SECRET_KEY);

  return tokenService;
};

export default configureTokenService;
