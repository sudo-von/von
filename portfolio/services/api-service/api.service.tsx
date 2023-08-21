import axios, { AxiosError, isAxiosError } from "axios";
import { getAPIVersion } from "./api.service.utils";
import { APIError, APIOptions } from "./api.service.responses";

const createAPIService = ({ base, port, version }: APIOptions) => {
  const apiVersion = version ? getAPIVersion(version) : "";
  const APIService = axios.create({
    baseURL: `http://localhost:${port}/api/${apiVersion}${base}`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  APIService.interceptors.response.use(
    (res) => res,
    (err) => {
      console.log("🚀 ~ file: api.service.tsx:18 ~ err:", err);
      if (!isAxiosError(err) || !err.response)
        return Promise.reject({
          code: "INTERNAL_SERVER",
          error: "Something went wrong",
        });

      return Promise.reject(err.response.data);
    }
  );

  return APIService;
};

export default createAPIService;
