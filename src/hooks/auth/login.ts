"use client";

import Cookies from "js-cookie";
import { AuthService } from "@/services";
import { useState } from "react";

export const useLogin = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const authService = new AuthService();

  const onLogin = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<string> => {
    return new Promise((resolve, reject) => {
      setIsPending(true);
      authService
        .handleLogin({
          email,
          password,
        })
        .then((res) => {
          // save token here
          Cookies.set("token", res.token);
          resolve(res?.message || "Login success");
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          setIsPending(false);
        });
    });
  };

  return {
    onLogin,
    isPending,
  };
};
