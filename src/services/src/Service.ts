import { axiosInstance, baseUrl } from "./config";

export class Service {
  axios = axiosInstance;
  serviceBaseUrl = baseUrl;
}
