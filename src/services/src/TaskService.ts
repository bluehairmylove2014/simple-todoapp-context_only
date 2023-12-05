import { ITask } from "@/entities";
import { Service } from "./Service";
import { getTaskEndPoint } from "./apis";
import { isAxiosError } from "./config";

export class TaskService extends Service {
  handleGetTask = async (token: string): Promise<ITask[]> => {
    try {
      const response = await this.axios({
        method: "GET",
        url: this.serviceBaseUrl + getTaskEndPoint,
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
