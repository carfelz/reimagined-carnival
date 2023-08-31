"use client"

import { openModal, closeModal, reset, setSelectedTask, setNewTask, setIsUpdating, setUpdatedTask } from "@/store/slices/taskSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ITask from "@/app/interfaces/Tasks.interface";
import Modal from "./Modal";
import TaskCard from "./TaskCard";
import TaskForm from "./modals/TaskForm";
import { createNewTask, eraseTask, updateTask } from "@/utils/services";
import { useRouter } from "next/navigation";

type TaskProps = {
  tasks: ITask[],
}

const Tasks: React.FC<TaskProps> = ({ tasks }) => {
  const isOpen = useAppSelector((state) => state.taskSlice.isModalOpen);
  const newTask = useAppSelector((state) => state.taskSlice.newTask)
  const updatedTask = useAppSelector((state) => state.taskSlice.updatedTask)
  const isCreating = useAppSelector((state) => state.taskSlice.isCreating);
  const isUpdating = useAppSelector((state) => state.taskSlice.isUpdating);
  const dispath = useAppDispatch();
  const router = useRouter();

  function OpenModal() {
    dispath(openModal());
  }
  function CloseModal() {
    dispath(closeModal());
    dispath(reset())
  }

  function onCancel() {
    dispath(reset())
    dispath(closeModal());
  }

  async function handleModalSubmit() {
    if(isCreating) {
      await createNewTask(newTask);
    } else {
      await updateTask(updatedTask)
    }
    dispath(reset());
    router.refresh();
  }

  async function deleteTask(id: string) {
    await eraseTask(id);
    router.refresh();
  }

  function handleSelectedTask(task: ITask) {
    dispath(setIsUpdating())
    dispath(setSelectedTask(task))
  }

  function handleNewTask(task: ITask) {
    dispath(setNewTask(task));
  }

  function handleTaskUpdate(task: ITask) {
    dispath(setUpdatedTask(task))
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {
          tasks.map(task => (
            <TaskCard
              key={task.title}
              task={task}
              openModal={OpenModal}
              deleteTask={deleteTask}
              handleSelectedTask={handleSelectedTask}
              
            />
          ))
        }
      </div>
      <Modal
        title='testing'
        show={isOpen}
        onClose={CloseModal}
        onCancel={onCancel}
        onSubmit={handleModalSubmit}>
         <TaskForm setNewTask={handleNewTask} setUpdatedTask={handleTaskUpdate} isUpdating={isUpdating} isCreating={isCreating} />
      </Modal>

    </>
  )
}

export default Tasks