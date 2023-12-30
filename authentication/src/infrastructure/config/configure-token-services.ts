import TokenService from '../services/token-service/token-service';
import {
  TokenEnvironmentVariables,
} from './configure-environment-variables/configure-token-environment-variables';
import JoseTokenService from '../services/token-service/jose-token-service/jose-token-service';

type TokenServices = {
  tokenService: TokenService;
};

const configureTokenServices = (
  TOKEN_ENVIRONMENT_VARIABLES: TokenEnvironmentVariables,
): TokenServices => {
  try {
    const {
      SECRET_KEY,
    } = TOKEN_ENVIRONMENT_VARIABLES;

    const tokenService = new JoseTokenService(SECRET_KEY);

    return {
      tokenService,
    };
  } catch (e) {
    throw new Error(`An error occurred while configuring token services. ${(e as Error).message}`);
  }
};

export default configureTokenServices;