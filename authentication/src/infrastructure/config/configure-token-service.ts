import {
  TokenEnvironmentVariables,
} from './configure-environment-variables/configure-token-environment-variables';
import JoseTokenService from '../services/token-service/jose-token-service/jose-token-service';

const configureTokenService = (TOKEN_ENVIRONMENT_VARIABLES: TokenEnvironmentVariables) => {
  const {
    SECRET_KEY,
  } = TOKEN_ENVIRONMENT_VARIABLES;

  const tokenService = new JoseTokenService(SECRET_KEY);

  return tokenService;
};

export default configureTokenService;
