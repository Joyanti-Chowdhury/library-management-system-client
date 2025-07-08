import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import Taskcard from "../module/Taskcard";
import { AddTaskModal } from "@/module/AddTaskModal";

export default function Task() {
  const tasks = useAppSelector(selectTasks);

  const filter = useAppSelector(selectFilter);

  console.log(tasks);
  console.log(filter);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center">
        <h1>Task</h1>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <Taskcard key={task.id} task={task}></Taskcard>
        ))}
      </div>
    </div>
  );
}
