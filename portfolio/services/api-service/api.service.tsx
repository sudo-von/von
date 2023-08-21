import axios from "axios";
import { APIOptions } from "./api.service.responses";
import { getAPIVersion } from "./api.service.utils";

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
