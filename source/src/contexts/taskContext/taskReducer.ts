"use client";
import { TaskAction, TaskState } from "./type";
import { MOCK_TASK_DATA } from "@/constants/taskMockVal";

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
          else {
            return {
              ...task,
              isComplete: action.payload.isComplete,
            };
          }
        });

        return {
          ...state,
          taskList: newState,
        };
      case "FILTER_ACTION":
        let newTaskList = MOCK_TASK_DATA;
        if (action.payload.length > 0) {
          newTaskList = newTaskList.filter(
            (task) =>
              task.name.toLowerCase().includes(action.payload.toLowerCase()) ||
              action.payload.toLowerCase().includes(task.name.toLowerCase())
          );
        }
        return {
          ...state,
          taskList: newTaskList,
        };
      case "ADD_TASK_ACTION":
        return {
          ...state,
          taskList: [
            { id: state.taskList.length + 1, ...action.payload },
            ...state.taskList,
          ],
        };

      default:
        return state;
    }
  } catch (error) {
    console.error("Error in taskReducer: ", error);
    return state;
  }
};
