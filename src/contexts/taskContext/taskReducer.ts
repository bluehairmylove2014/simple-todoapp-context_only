"use client";
import { TaskAction, TaskState } from "./type";

export const taskReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  try {
    switch (action.type) {
      case "SET_TASK_ACTION":
        return {
          ...state,
          taskList: action.payload,
        };
      case "UPDATE_COMPLETE_TASK_ACTION":
        const newState = state.taskList.map((task) => {
          if (task.id !== action.payload.id) return task;
          else
            return {
              ...task,
              isComplete: action.payload.isComplete,
            };
        });
        return {
          ...state,
          taskList: newState,
        };

      default:
        return state;
    }
  } catch (error) {
    console.error("Error in taskReducer: ", error);
    return state;
  }
};
