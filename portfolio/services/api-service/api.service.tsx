import axios from "axios";
import { getAPIVersion } from "./api.service.utils";
import { APIOptions } from "./api.service.response";

const createAPIService = ({ base, port, version }: APIOptions) => {
  const apiVersion = version ? getAPIVersion(version) : "";
  return axios.create({
    baseURL: `http://localhost:${port}/api/${apiVersion}${base}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default createAPIService;
