"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from "react";
import { TaskContext } from "./taskContext";
import { taskReducer } from "./taskReducer";
import { MOCK_TASK_DATA } from "@/constants/taskMockVal";

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
    dispatch({
      type: "SET_TASK_ACTION",
      payload: MOCK_TASK_DATA,
    });
  }, []);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
