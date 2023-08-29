'use client'

import { openModal } from "@/store/slices/taskSlice";
import { useAppDispatch } from "@/store/hooks";

function NavBar(): React.ReactElement {
    const dispath = useAppDispatch();

    function OpenModal() {
        return dispath(openModal());
      }

    return(
        <nav className="flex justify-between items-center bg-slate-400 px-4 h-10">
            <h1>To-Do app</h1>
            <button onClick={OpenModal}>+ Add new Task</button>
        </nav>
    )
}

export default NavBar