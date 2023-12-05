"use client";

function MenuSearchBox() {
  return (
    <form className=" my-4 border-gray-300 w-full h-fit rounded-md border-solid border-[1px] overflow-hidden px-2 py-1 relative focus:shadow-sm bg-white">
      <button type="submit" className=" relative z-10 opacity-75 text-xs pb-1">
        <i className="fi fi-rr-search"></i>
      </button>
      <span className=" relative z-10 ml-2 opacity-75 text-xs pb-1">
        Search
      </span>
      <input
        type="text"
        className=" absolute top-0 left-0 w-full h-full z-0 outline-none px-7 bg-transparent"
      />
    </form>
  );
}

export default MenuSearchBox;
