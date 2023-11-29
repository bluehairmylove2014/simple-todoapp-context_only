"use client";

function AddNewTaskBtn() {
  return (
    <button
      className=" text-left border-solid border-[1px] border-zinc-200 rounded-md w-full h-10 px-4 text-xs transition-colors bg-inherit hover:bg-zinc-100"
      onClick={() => {
        const taskDetailElement = document.getElementById("task-detail");
        if (taskDetailElement) {
          taskDetailElement.classList.add("w-1/3");
          taskDetailElement.classList.remove("opacity-0");
          taskDetailElement.classList.remove("w-0");
        }
      }}
    >
      <i className="fi fi-br-plus"></i>
      <span className="ml-3 opacity-50">Add New Task</span>
    </button>
  );
}

export default AddNewTaskBtn;
