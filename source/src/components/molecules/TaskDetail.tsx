"use client";

import { useTaskContext } from "@/contexts";
import { useRef } from "react";
import { useForm, Controller } from "react-hook-form";

type templateType = "create" | "edit";
type taskDetailTemplateType = {
  title: string;
  btns: [
    {
      textColor: string;
      bgColor: string;
      borderColor: string;
      type: "submit" | "button";
      label: string;
      onClick?: () => void;
    }
  ];
};

const taskDetailTemplateList: { [key: string]: taskDetailTemplateType } = {
  create: {
    title: "Create new task",
    btns: [
      {
        textColor: "text-white",
        bgColor: "bg-green-600",
        borderColor: "bg-green-600",
        type: "submit",
        label: "Create task",
        onClick: () => {},
      },
    ],
  },
};

function TaskDetail({ template }: { template: templateType }) {
  const taskDetailRef = useRef<HTMLDivElement>(null);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const { dispatch } = useTaskContext();

  const handleClose = () => {
    if (taskDetailRef.current) {
      taskDetailRef.current.classList.add("w-0");
      taskDetailRef.current.classList.add("opacity-0");
      taskDetailRef.current.classList.remove("w-1/3");
    }
  };
  const onSuccessSubmit = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    dispatch({
      type: "ADD_TASK_ACTION",
      payload: {
        name: title,
        description,
        isComplete: false,
      },
    });
    reset();
    handleClose();
  };

  return (
    <aside
      id="task-detail"
      ref={taskDetailRef}
      className=" transition-all w-0 opacity-0 h-full fixed z-40 right-0 top-0 p-4"
    >
      <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_0px_50px_-12px] bg-zinc-100 h-full w-full rounded-xl p-5 flex flex-col justify-between items-start">
        <div className="flex flex-shrink justify-between items-center w-full">
          <h3>{taskDetailTemplateList[template].title}</h3>
          <button onClick={handleClose}>
            <i className="fi fi-br-cross-small"></i>
          </button>
        </div>

        <form
          className="mt-4 flex-grow w-full flex flex-col justify-between items-start"
          onSubmit={handleSubmit(onSuccessSubmit)}
          noValidate
        >
          <div className="flex-grow w-full">
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <div className="mb-2 border-solid border-[1px] border-zinc-300 rounded">
                  <input
                    className=" bg-transparent w-full h-8 px-4 text-xs outline-none"
                    type="text"
                    placeholder="Task name..."
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <div className="mb-2 border-solid border-[1px] border-zinc-300 rounded">
                  <textarea
                    className=" bg-transparent w-full h-32 px-4 py-2 text-xs resize-none outline-none"
                    placeholder="Description..."
                    {...field}
                  />
                </div>
              )}
            />
          </div>
          <div className="flex flex-row justify-between items-center w-full flex-shrink">
            {taskDetailTemplateList[template].btns.map((btn) => (
              <button
                className=" m-auto bg-green-600 hover:bg-green-700 transition-colors text-white text-xs rounded px-8 py-2"
                onClick={btn.onClick}
                type={btn.type}
                key={btn.label}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </form>
      </div>
    </aside>
  );
}

export default TaskDetail;
