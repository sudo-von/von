type APIConfig = {
  version: {
    v1: string
  };
  port: number;
};

const BASE_URL = '/api';
const BASE_V1 = '/v1';

const BASE_RADIX = 10;
const BASE_PORT = '3000';
const DEFAULT_PORT = parseInt(process.env.PORT || BASE_PORT, BASE_RADIX);

const apiConfig: APIConfig = {
  version: {
    v1: `${BASE_URL}/${BASE_V1}`,
  },
  port: DEFAULT_PORT,
};

export default apiConfig;
