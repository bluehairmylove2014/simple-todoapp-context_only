"use client";
import React from "react";
import { useContext } from "react";
import { TaskContextType } from "./type";

// To init
export const TaskContext = React.createContext<TaskContextType>({
  state: {
    taskList: [],
  },
  dispatch: () => undefined,
});

// For component
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
