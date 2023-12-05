"use client";
import { MOCK_TASK_DATA } from "@/constants/taskMockVal";
import { useTaskContext } from "@/contexts";
import { usePathname } from "next/navigation";
import debounce from "lodash/debounce";

function TodoHeader() {
  const pathName = usePathname();
  const { dispatch } = useTaskContext();

  const handleChange = debounce((value: string) => {
    dispatch({
      type: "FILTER_ACTION",
      payload: value,
    });
  }, 500);

  return (
    <header className="flex flex-row justify-between items-start w-full h-full mt-6">
      <h1 className="uppercase">{pathName.split("/")[1]}</h1>
      <div className="relative border-[1px] border-solid border-zinc-300 rounded w-96 h-10 ">
        <i className="fi fi-rr-search text-xs relative bottom-[1px] w-fit h-full flex flex-col items-start justify-center z-10 ml-2"></i>
        <input
          type="text"
          name="search"
          id="search-box"
          placeholder="Search..."
          className=" bg-transparent outline-none absolute top-0 left-0 w-full h-full z-0 px-7 text-xs"
          onChange={(e) => handleChange(e.target.value.trim())}
        />
      </div>
    </header>
  );
}

export default TodoHeader;
