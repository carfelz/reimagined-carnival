"use client"

import { decrement, increment, reset } from "@/store/slices/counterSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

export default function Home() {
    const count = useAppSelector((state) => state.counterSlice.value);
    const dispath = useAppDispatch();

    function handleIncrement() {
        return dispath(increment())
    }

    function handleDecrement() {
        return dispath(decrement())
    }

    function handleReset() {
        return dispath(reset());
    }
    return (
        <main className="max-w-[1200px] p-[20px]">
            <div className="mb-4 text-center">
                <h4 className="mb-4">{count}</h4>
                <button onClick={handleIncrement}>increment</button>
                <button onClick={handleDecrement}>decrement</button>
                <button onClick={handleReset}>reset</button>
            </div>
        </main>
    )
}