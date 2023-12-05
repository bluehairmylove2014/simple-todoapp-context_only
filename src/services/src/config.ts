import axios, { isAxiosError } from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

const axiosInstance = axios.create();
const axiosMockInstance = new AxiosMockAdapter(axiosInstance, {
  delayResponse: 3000,
});
const baseUrl = "http://localhost:3000";

export { axiosInstance, axiosMockInstance, isAxiosError, baseUrl };
