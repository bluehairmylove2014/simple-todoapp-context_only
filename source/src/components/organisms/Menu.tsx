import Tasks from "../molecules/Tasks";
import UserList from "../molecules/UserList";
import Tags from "../molecules/Tags";
import MenuSearchBox from "../molecules/MenuSearchBox";

function Menu() {
  return (
    <aside className="w-full h-full p-4 bg-inherit">
      <div className="bg-zinc-100 p-5 w-full h-full flex flex-col justify-between items-start rounded-xl overflow-hidden">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h3>Menu</h3>
            <i className="fi fi-br-menu-burger"></i>
          </div>
          <MenuSearchBox />
          <nav>
            <h6 className=" mb-2 text-[0.6rem]">TASKS</h6>
            <Tasks />
            <hr className=" my-3" />
            <h6 className=" mt-4 mb-2 text-[0.6rem]">LISTS</h6>
            <UserList />
            <hr className=" my-3" />
            <h6 className=" mt-4 mb-2 text-[0.6rem]">TAGS</h6>
            <Tags />
          </nav>
        </div>

        <div className=" w-full flex flex-grow flex-col justify-end items-start">
          <button className=" text-xs font-semibold w-full bg hover:bg-zinc-300 transition-colors px-2 py-1 rounded opacity-70 hover:opacity-100 text-left mb-2">
            <i className="fi fi-br-settings-sliders"></i>
            <span className="ml-3">Setting</span>
          </button>
          <button className=" text-xs font-semibold w-full bg hover:bg-zinc-300 transition-colors px-2 py-1 rounded opacity-70 hover:opacity-100 text-left">
            <i className="fi fi-br-exit"></i>
            <span className="ml-3">Sign out</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Menu;
