"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from "react";
import { TaskContext } from "./taskContext";
import { taskReducer } from "./taskReducer";
import { useGetTask } from "@/hooks/task";
import { useNotification } from "@/components/atoms/Notification";

type taskContextProviderType = {
  children: React.ReactNode;
};
export const TaskContextProvider: React.FC<taskContextProviderType> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(taskReducer, {
    taskList: [],
  });
  const { onGetTask } = useGetTask();
  const { showError } = useNotification();

  useEffect(() => {
    onGetTask()
      .then((taskData) =>
        dispatch({
          type: "SET_TASK_ACTION",
          payload: taskData,
        })
      )
      .catch((error) => showError(error.message));
  }, []);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
