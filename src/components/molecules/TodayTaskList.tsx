"use client";

import { useEffect, useState } from "react";
import Checkbox from "../atoms/Checkbox";
import { useTaskContext } from "@/contexts";

const mock = [
  {
    id: 1,
    name: "Research content ideas",
    description:
      "Explore trending topics and gather potential ideas for upcoming content.",
    isComplete: false,
  },
  {
    id: 2,
    name: "Create outline for blog post",
    description: "Outline the key points and structure for the next blog post.",
    isComplete: false,
  },
  {
    id: 3,
    name: "Develop prototype for new feature",
    description:
      "Work on creating a prototype for the upcoming feature in the application.",
    isComplete: false,
  },
  {
    id: 4,
    name: "Review and edit marketing materials",
    description:
      "Go through the marketing materials and make necessary edits for accuracy and clarity.",
    isComplete: false,
  },
  {
    id: 5,
    name: "Conduct user testing",
    description:
      "Organize and conduct user testing sessions to gather feedback on the product.",
    isComplete: true,
  },
  {
    id: 6,
    name: "Update documentation",
    description:
      "Review and update documentation to ensure it aligns with the latest product features.",
    isComplete: false,
  },
  {
    id: 7,
    name: "Prepare for team meeting",
    description:
      "Gather necessary information and prepare an agenda for the upcoming team meeting.",
    isComplete: true,
  },
  {
    id: 8,
    name: "Code review for pull requests",
    description:
      "Conduct code reviews for open pull requests to maintain code quality.",
    isComplete: false,
  },
  {
    id: 9,
    name: "Brainstorm new product features",
    description:
      "Collaborate with the team to generate ideas for potential new features in the product.",
    isComplete: false,
  },
  {
    id: 10,
    name: "Optimize website performance",
    description:
      "Identify and implement optimizations to improve the performance of the company website.",
    isComplete: false,
  },
];

function TodayTaskList() {
  // form control
  // const taskData = mock;
  const { state, dispatch } = useTaskContext();
  const [taskData, setTaskData] = useState(state.taskList);

  useEffect(() => {
    setTaskData(state.taskList);
  }, [state.taskList]);

  const handleCheckboxChangeValue = ({
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
                onChange={handleCheckboxChangeValue}
              />
            </div>
            <button className=" ml-7 flex-grow font-medium text-left justify-between flex">
              <span>{task.name}</span>{" "}
              <i className="fi fi-bs-angle-small-right"></i>
            </button>
          </div>
        ))
      ) : (
        <></>
      )}
    </form>
  );
}

export default TodayTaskList;
