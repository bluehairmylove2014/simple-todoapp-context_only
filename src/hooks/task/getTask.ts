"use client";

import Cookies from "js-cookie";
import { TaskService } from "@/services";
import { useState } from "react";
import { ITask } from "@/entities";

export const useGetTask = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const taskService = new TaskService();

  const onGetTask = (): Promise<ITask[]> => {
    return new Promise((resolve, reject) => {
      setIsPending(true);
      const token = Cookies.get("token");
      if (!token) reject(new Error("Unauthorized"));
      else {
        taskService
          .handleGetTask(token)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          })
          .finally(() => {
            setIsPending(false);
          });
      }
    });
  };

  return {
    onGetTask,
    isPending,
  };
};
