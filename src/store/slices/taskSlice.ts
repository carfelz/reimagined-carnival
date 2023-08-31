import ITask from "@/app/interfaces/Tasks.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TaskState = {
    isModalOpen: boolean;
    selectedTask: ITask | null,
    updatedTask: ITask,
    newTask: ITask
    isCreating: boolean
    isUpdating: boolean
}

const initialState: TaskState = {
    isModalOpen: false,
    selectedTask: null,
    isCreating: true,
    isUpdating: false,
    updatedTask: {
        title: '',
        description: ''
    } as ITask,
    newTask: {
        title: '',
        description: ''
    } as ITask,
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
        setIsUpdating: (state) => {
            state.isCreating = false
            state.isUpdating = true
        },
        setNewTask: (state, action: PayloadAction<ITask>) => {
            Object.assign(state, { newTask: action.payload })
        },
        setSelectedTask: (state, action: PayloadAction<ITask>) => {
            Object.assign(state, { selectedTask: action.payload })
        },
        setUpdatedTask: (state, action: PayloadAction<ITask>) => {
            Object.assign(state, { updatedTask: action.payload })
        }
    }
})

export const  {
    reset,
    openModal,
    closeModal,
    setNewTask,
    setSelectedTask,
    setIsUpdating,
    setUpdatedTask
} = taskSlice.actions

export default taskSlice.reducer;

