import { ITask } from "@/entities";

export interface TaskState {
  taskList: ITask[];
}

export type TaskAction =
  | {
      type: "SET_TASK_ACTION";
      payload: TaskState["taskList"];
    }
  | {
      type: "UPDATE_COMPLETE_TASK_ACTION";
      payload: Pick<ITask, "id" | "isComplete">;
    };

export type TaskContextType = {
  state: TaskState;
  dispatch: React.Dispatch<TaskAction>;
};
