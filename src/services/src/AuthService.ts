import { Service } from "./Service";
import { loginEndPoint } from "./apis";
import { isAxiosError } from "./config";

type loginResponseType = {
  token: string;
  message: string;
};
export class AuthService extends Service {
  handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<loginResponseType> => {
    try {
      const response = await this.axios({
        method: "POST",
        url: this.serviceBaseUrl + loginEndPoint,
        data: { email, password },
      });
      return response.data;
    } catch (error) {
      throw new Error(
        isAxiosError(error)
          ? error?.response?.data?.message || "Axios Unknown Error"
          : "Unknown Error"
      );
    }
  };
}
