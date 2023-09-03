import axios from "axios";
import { APIOptions } from "./api.service.responses";
import { getAPIURL, setAPIRequestErrorInterceptor } from "./api.service.utils";
import { getCookie } from "@services/cookie-service/cookie.service";

const createAPIService = ({ base, port, version }: APIOptions) => {
  const service = axios.create({
    baseURL: getAPIURL({ base, port, version }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  service.interceptors.request.use((req) => {
    const token = getCookie("token");
    console.log(token);
    if (!token) return req;
    console.log(
      "🚀 ~ file: api.service.tsx:17 ~ service.interceptors.request.use ~ token:",
      token
    );

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
