import { connectDB } from "@/utils/mongoose";
import ITask from "./interfaces/Tasks.interface";
import TaskCard from "@/components/TaskCard";
import Modal from "@/components/Modal";
import Task from "./models/Task";

async function fetchData(): Promise<ITask[]> {
  connectDB();
  return await Task.find()
}

const HomePage: React.FC = async () => {
  const tasks = await fetchData();
  return(
    <>
      <div className="grid grid-cols-3 gap-2">
      {
      tasks.map(task => (
        <TaskCard task={task} />
      ))
    }
    </div>
    <Modal title='testing' show={true} onClose={() => {}} onSubmit={() => {}} />

    </>
  )
}

export default HomePage