import ITask from "@/app/interfaces/Tasks.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TaskState = {
    isModalOpen: boolean;
    selectedTask: ITask | null,
    newTask: ITask
}

const initialState: TaskState = {
    isModalOpen: false,
    selectedTask: null,
    newTask: {
        title: '',
        description: ''
    },
}

export const taskSlice = createSlice({
    name: 'Task',
    initialState,
    reducers: {
        reset: () => initialState,
        openModal: (state) => {
            state.isModalOpen = true
        },
        closeModal: (state) => {
            state.isModalOpen = false
        },
        setNewTask: (state, action: PayloadAction<ITask>) => {
            state.newTask = action.payload
        }
    }
})

export const  {
    reset,
    openModal,
    closeModal,
    setNewTask
} = taskSlice.actions

export default taskSlice.reducer;

