import JoseTokenService from '../services/token-service/jose-token-service/jose-token-service';

const configureTokenService = (secret: string) => {
  const tokenService = new JoseTokenService(secret);

  return tokenService;
};

export default configureTokenService;
