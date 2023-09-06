import axios from "axios";
import { getCookie } from "@services/cookie-service/cookie.service";
import { APIOptions } from "@services/api-service/api.service.responses";
import { getAPIURL, setAPIRequestErrorInterceptor } from "@services/api-service/api.service.utils";

const createAPIService = ({ base, port, version }: APIOptions) => {
  const service = axios.create({
    baseURL: getAPIURL({ base, port, version }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  service.interceptors.request.use((req) => {
    const token = getCookie("token");
    if (!token) return req;

    req.headers["Authorization"] = token;

    return req;
  });

  service.interceptors.response.use(
    (res) => res,
    (err) => setAPIRequestErrorInterceptor(err as Error)
  );

  return service;
};

export default createAPIService;
