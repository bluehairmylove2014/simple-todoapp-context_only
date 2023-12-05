"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();
  const onLogout = () => {
    Cookies.remove("token");
    router.push("/login");
  };

  return {
    onLogout,
  };
};
