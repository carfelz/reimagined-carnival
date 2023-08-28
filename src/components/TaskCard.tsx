import ITask from "@/app/interfaces/Tasks.interface"

type TaskCardProps = {
    task: ITask
}
const TaskCard: React.FC<TaskCardProps> = ({task}) => {
    return(
        <div className="bg-gray-800 p-10 hover:bg-gray-700 rounded-md hover:cursor-pointer">
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
    )
}

export default TaskCard