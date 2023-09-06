import { isAxiosError } from "axios";
import { APIOptions } from "@services/api-service/api.service.responses";

export const getAPIURL = ({ port, version, base }: APIOptions) => {
  const formatedVersion = version ? getAPIVersion(version) : "";
  const formatedURL = `http://sudo-von:${port}/api/${formatedVersion}${base}`;
  return formatedURL;
};

export const getAPIVersion = (version: number) => "v" + version + "/";

export const setAPIRequestErrorInterceptor = (error: Error) => {
  if (!isAxiosError(error) || !error.response)
    return Promise.reject({
      code: "INTERNAL_SERVER",
      error: "Something went wrong",
    });

  return Promise.reject(error.response.data);
};
