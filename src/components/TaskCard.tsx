import ITask from "@/app/interfaces/Tasks.interface"
import { FaTrash } from "react-icons/fa";

type TaskCardProps = {
    task: ITask
    openModal: Function
    deleteTask: Function
}
const TaskCard: React.FC<TaskCardProps> = ({ task, openModal, deleteTask }) => {
    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
        event.preventDefault();
        openModal();
    }

    function handleDeleteTask(e: Event) {
        e.preventDefault();
        deleteTask(task._id);
    }
    return (
        <div>
            <div className="flex justify-end">
                <FaTrash onClick={handleDeleteTask}  className="text-slate-100 hover:text-red-900 text-sm fixed w-6 m-2 cursor-pointer" />
            </div>
            <div onClick={handleClick} className="bg-gray-800 p-10 hover:bg-gray-700 rounded-md hover:cursor-pointer">
                <div className="flex">
                    <h1>{task.title}</h1>
                </div>
                <p>{task.description}</p>
            </div>
        </div>

    )
}

export default TaskCard