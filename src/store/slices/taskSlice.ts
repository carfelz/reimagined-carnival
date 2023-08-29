import ITask from "@/app/interfaces/Tasks.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TaskState = {
    isModalOpen: boolean;
    selectedTask: ITask | null,
}

const initialState = {
    isModalOpen: false,
    selectedTask: null,
} as TaskState

export const taskSlice = createSlice({
    name: 'Task',
    initialState,
    reducers: {
        reset: () => initialState,
        openModal: (state) => {
            if(state.isModalOpen) return
            state.isModalOpen = true
        },
        closeModal: (state) => {
            if(!state.isModalOpen) return
            state.isModalOpen = false
        }
    }
})

export const  {
    reset,
    openModal,
    closeModal,
} = taskSlice.actions

export default taskSlice.reducer;

