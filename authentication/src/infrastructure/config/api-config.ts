type APIConfig = {
  version: {
    v1: string
  };
  port: number;
};

/* 📱 Endpoints. */
const BASE_URL = '/api';
const BASE_V1 = '/v1';

/* ⚙️ Settings. */
const BASE_RADIX = 10;
const DEFAULT_PORT = '3000';
const BASE_PORT = parseInt(process.env.PORT || DEFAULT_PORT, BASE_RADIX);

const apiConfig: APIConfig = {
  version: {
    v1: `${BASE_URL}/${BASE_V1}`,
  },
  port: BASE_PORT,
};

export default apiConfig;
