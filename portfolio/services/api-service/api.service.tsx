import axios from "axios";
import { APIOptions } from "./api.service.responses";
import { getAPIURL, setAPIRequestErrorInterceptor } from "./api.service.utils";

const createAPIService = ({ base, port, version }: APIOptions) => {
  const service = axios.create({
    baseURL: getAPIURL({ port, version, base }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  service.interceptors.response.use(
    (res) => res,
    (err) => setAPIRequestErrorInterceptor(err as Error)
  );

  return service;
};

export default createAPIService;
