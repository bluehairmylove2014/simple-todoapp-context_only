import { loginEndPoint } from "../src/apis";
import { axiosMockInstance, baseUrl } from "../src/config";
import accountData from "./data/account.json";

axiosMockInstance.onPost(baseUrl + loginEndPoint).reply((config: any) => {
  const requestDatPkg = JSON.parse(config.data);
  if (!requestDatPkg?.email || !requestDatPkg?.password) {
    return [403, { message: "data lost" }];
  }
  if (
    accountData.findIndex(
      (acc) =>
        acc.email === requestDatPkg.email &&
        acc.password === requestDatPkg.password
    ) !== -1
  ) {
    return [200, { token: "datdeptrai", message: "Login successfully" }];
  } else {
  }
  return [401, { message: "Wrong email or password" }];
});
