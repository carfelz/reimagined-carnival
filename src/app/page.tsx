import { connectDB } from "@/utils/mongoose";
import ITask from "./interfaces/Tasks.interface";
import Task from "./models/Task";
import Tasks from "@/components/Tasks";


async function fetchData(): Promise<ITask[]> {
  connectDB();
  return await Task.find()
}

const HomePage: React.FC = async () => {
  const tasks = JSON.parse(JSON.stringify(await fetchData()))
  return <Tasks tasks={tasks}/>
}

export default HomePage