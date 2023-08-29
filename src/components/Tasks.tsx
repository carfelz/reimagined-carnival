"use client"

import { openModal, closeModal } from "@/store/slices/taskSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ITask from "@/app/interfaces/Tasks.interface";
import Modal from "./Modal";
import TaskCard from "./TaskCard";

type TaskProps = {
    tasks: ITask[]
}

const Tasks: React.FC<TaskProps> =  ({ tasks }) => {
    const isOpen = useAppSelector((state) => state.taskSlice.isModalOpen);
    const dispath = useAppDispatch();
  
    function OpenModal() {
      return dispath(openModal());
    }
    function CloseModal() {
      return dispath(closeModal());
    }
  
    return(
      <>
        <div className="grid grid-cols-3 gap-2">
        {
        tasks.map(task => (
          <TaskCard key={task.title} task={task} openModal={OpenModal} />
        ))
      }
      </div>
      <Modal title='testing' show={isOpen} closeModal={CloseModal} onClose={() => {}} onSubmit={() => {}} />
  
      </>
    )
  }
  
  export default Tasks