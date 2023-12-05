"use client";

const tags = [
  {
    color: "bg-sky-300",
    name: "Tag 1",
  },
  {
    color: "bg-rose-400",
    name: "Tag 2",
  },
];

function Tags() {
  return (
    <ul className=" flex flex-row flex-wrap gap-2 justify-start items-start">
      {tags.map((tag) => (
        <button
          key={tag.name}
          className={`${tag.color} px-3 py-1.5 w-fit h-fit text-[0.6rem] bg hover:bg-zinc-300 transition-colors rounded`}
        >
          {tag.name}
        </button>
      ))}
      <button
        className={` px-3 py-1.5 w-fit h-fit text-[0.6rem] bg bg-zinc-200 hover:bg-zinc-300 transition-colors rounded`}
      >
        + Add Tag
      </button>
    </ul>
  );
}

export default Tags;
