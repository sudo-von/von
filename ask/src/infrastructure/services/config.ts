import JSONWebTokenService from './token-service/jsonwebtoken-service/jsonwebtoken-service';

const configureServices = (SECRET_KEY: string) => {
  const tokenService = new JSONWebTokenService(SECRET_KEY);
  return { tokenService };
};

export default configureServices;
