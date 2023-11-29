"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from "react";
import { TaskContext } from "./taskContext";
import { taskReducer } from "./taskReducer";
import { MOCK_TASK_DATA } from "@/constants/taskMockVal";
import { TASK_DATA_LS_KEY } from "@/constants/localStorageKey";

type taskContextProviderType = {
  children: React.ReactNode;
};
export const TaskContextProvider: React.FC<taskContextProviderType> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(taskReducer, {
    taskList: [],
  });

  useEffect(() => {
    // CALL API
    const taskDataLocalStorage = localStorage.getItem(TASK_DATA_LS_KEY);
    dispatch({
      type: "SET_TASK_ACTION",
      payload: taskDataLocalStorage
        ? JSON.parse(taskDataLocalStorage)
        : MOCK_TASK_DATA,
    });
  }, []);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
