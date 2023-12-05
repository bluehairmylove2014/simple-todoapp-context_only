"use client";
import { URLS } from "@/constants/url";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tasksList = [
  {
    taskIconClass: "fi fi-bs-angle-double-small-right",
    taskName: "Upcoming",
    pathName: URLS.UPCOMING,
  },
  {
    taskIconClass: "fi fi-bs-list-check",
    taskName: "Today",
    pathName: URLS.TODAY,
  },
  {
    taskIconClass: "fi fi-ss-calendar-lines",
    taskName: "Calendar",
    pathName: URLS.CALENDAR,
  },
  {
    taskIconClass: "fi fi-sr-note-sticky",
    taskName: "Sticky Wall",
    pathName: URLS.STICKY_WALL,
  },
];

function Tasks() {
  const pathName = usePathname();

  return (
    <ul className=" flex flex-col justify-start items-start">
      {tasksList.map((task) => (
        <Link
          href={task.pathName}
          key={task.pathName}
          className={`${
            pathName.includes(task.pathName)
              ? "bg-zinc-300"
              : "bg-inherit opacity-70 hover:opacity-100 hover:bg-zinc-300"
          } w-full transition-colors px-2 py-1 rounded mb-2`}
        >
          <i className={`${task.taskIconClass} text-xs`}></i>
          <span className=" font-semibold text-xs ml-3">{task.taskName}</span>
        </Link>
      ))}
    </ul>
  );
}

export default Tasks;
