import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import taskSlice from "./slices/taskSlice";

export const store = configureStore({
    reducer: {
        counterSlice,
        taskSlice
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export type RooState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;