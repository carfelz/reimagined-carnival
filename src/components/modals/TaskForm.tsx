import { useState } from 'react'
import { useAppDispatch } from '@/store/hooks'
import * as slice from '@/store/slices/taskSlice'
import ITask from '@/app/interfaces/Tasks.interface'

const TaskForm: React.FC = () => {
    const [newTask, setNewTask] = useState({
        title: '',
        description: ''
    } as ITask)

    const dispath = useAppDispatch();

    function handleInput(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { value, name } = event.currentTarget
        setNewTask({
            ...newTask,
            [name]: value
        })

        dispath(slice.setNewTask(newTask))
    }
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-12">
                    <div className="pb-12">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                    Title
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:none sm:max-w-md">
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            onInput={handleInput}
                                            autoComplete="title"
                                            className="block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="title..."
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        name="description"
                                        onInput={handleInput}
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default TaskForm