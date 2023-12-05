import { getTaskEndPoint } from "../src/apis";
import { axiosMockInstance, baseUrl } from "../src/config";
import taskData from "./data/task.json";

axiosMockInstance.onGet(baseUrl + getTaskEndPoint).reply((config: any) => {
  return [200, taskData];
});
