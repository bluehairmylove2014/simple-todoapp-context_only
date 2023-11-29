import AddNewTaskBtn from "@/components/atoms/AddNewTaskBtn";
import TaskDetail from "@/components/molecules/TaskDetail";
import TodayTaskList from "@/components/molecules/TodayTaskList";

function page() {
  return (
    <main className="w-full h-full bg-inherit">
      <AddNewTaskBtn />
      <TodayTaskList />
      <TaskDetail template="create" />
    </main>
  );
}

export default page;
