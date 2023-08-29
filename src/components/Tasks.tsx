"use client"

import { openModal, closeModal, reset } from "@/store/slices/taskSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ITask from "@/app/interfaces/Tasks.interface";
import Modal from "./Modal";
import TaskCard from "./TaskCard";
import TaskForm from "./modals/TaskForm";
import { createNewTask, eraseTask } from "@/utils/services";
import { useRouter } from "next/navigation";

type TaskProps = {
    tasks: ITask[],
}

const Tasks: React.FC<TaskProps> =  ({ tasks }) => {
    const isOpen = useAppSelector((state) => state.taskSlice.isModalOpen);
    const newTask = useAppSelector((state) => state.taskSlice.newTask)
    const dispath = useAppDispatch();
    const router = useRouter();
  
    function OpenModal() {
      return dispath(openModal());
    }
    function CloseModal() {
      return dispath(closeModal());
    }

    function onCancel() {
      dispath(reset())
      dispath(closeModal());
    }

    async function handleModalSubmit() {
      await createNewTask(newTask);
      dispath(reset());
      router.refresh();
    }

    async function deleteTask(id: string) {
      await eraseTask(id);
      router.refresh();
    }
  
    return(
      <>
        <div className="grid grid-cols-3 gap-2">
        {
        tasks.map(task => (
          <TaskCard key={task.title} task={task} openModal={OpenModal} deleteTask={deleteTask} />
        ))
      }
      </div>
      <Modal
        title='testing'
        show={isOpen}
        onClose={CloseModal}
        onCancel={onCancel} 
        onSubmit={handleModalSubmit}>
            <TaskForm />
        </Modal>
  
      </>
    )
  }
  
  export default Tasks