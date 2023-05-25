interface APIConfig {
  endpoints: {
    v1: string
  }
}

const BASE_URL = '/api';

export const apiConfig: APIConfig = {
  endpoints: {
    v1: `${BASE_URL}/v1`
  }
};
