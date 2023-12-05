"use client";
import Link from "next/link";

const lists = [
  {
    color: "bg-rose-600",
    name: "Personal",
  },
  {
    color: "bg-sky-600",
    name: "Work",
  },
  {
    color: "bg-amber-300",
    name: "List 1",
  },
];

function UserList() {
  return (
    <ul className=" flex flex-col justify-start items-start">
      {lists.map((item) => (
        <Link
          href={`/${item.name}`}
          key={item.name}
          className=" px-2 py-2 flex flex-row justify-start items-center w-full bg hover:bg-zinc-300 transition-colors rounded opacity-70 hover:opacity-100"
        >
          <div className={`w-2 p-2 ${item.color} rounded`}></div>
          <span className=" font-semibold text-xs ml-3">{item.name}</span>
        </Link>
      ))}
    </ul>
  );
}

export default UserList;
