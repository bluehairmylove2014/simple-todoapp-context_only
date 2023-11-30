"use client";
import { useEffect, useState } from "react";
import Checkbox from "../atoms/Checkbox";
import { useTaskContext } from "@/contexts";

function TodayTaskList() {
  const { state, dispatch } = useTaskContext();
  const [taskData, setTaskData] = useState(state.taskList);

  useEffect(() => {
    setTaskData(state.taskList);
  }, [state.taskList]);

  const handleCheckboxChange = ({
    taskId,
    value,
  }: {
    taskId: number;
    value: boolean;
  }) => {
    dispatch({
      type: "UPDATE_COMPLETE_TASK_ACTION",
      payload: {
        id: taskId,
        isComplete: value,
      },
    });
  };

  return (
    <form className=" flex flex-col justify-start items-start w-full h-fit">
      {taskData ? (
        taskData.map((task, index) => (
          <div
            key={index}
            className={`${
              task.isComplete ? "opacity-50" : ""
            } relative w-full h-12 flex flex-row justify-start items-center px-4 border-b-[1px] border-solid border-zinc-200`}
          >
            {task.isComplete ? (
              <hr className="absolute top-1/2 left-0 transform translate-y-1/2 w-full h-[2px] bg-black" />
            ) : (
              <></>
            )}
            <div className="flex-shrink">
              <Checkbox
                tid={task.id}
                defaultValue={task.isComplete}
                onChange={handleCheckboxChange}
              />
            </div>
            <button className=" ml-7 flex-grow font-medium text-left justify-between flex">
              <span>{task.name}</span>{" "}
              <i className="fi fi-bs-angle-small-right"></i>
            </button>
          </div>
        ))
      ) : (
        <div className=" w-full h-[50vh] grid place-items-center">
          Loading...
        </div>
      )}
    </form>
  );
}

export default TodayTaskList;
