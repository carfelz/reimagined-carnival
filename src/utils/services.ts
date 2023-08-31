import axios from "axios";
import ITask from "@/app/interfaces/Tasks.interface";

const BASE = 'http://localhost:3000'

export async function createNewTask(newTask: ITask): Promise<ITask> {
   return await axios.post(`${BASE}/api/tasks`, newTask);
}

export async function eraseTask(taskId: string): Promise<void> {
    return await axios.delete(`${BASE}/api/tasks/${taskId}`);
}

export async function updateTask(updatedTask: ITask): Promise<ITask> {
    return await axios.put(`${BASE}/api/tasks/${updatedTask._id}`, updatedTask)
}