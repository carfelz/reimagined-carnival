import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Task from "@/app/models/Task";
import ITask from "@/app/interfaces/Tasks.interface";

export async function GET() {
    connectDB();
    const allTasks: ITask[] = await Task.find();
    return NextResponse.json(allTasks);
}

export async function POST(req: Request) {
    try {
        connectDB();
        
        const data: ITask = await req.json()
        const titleExist: ITask | null = await Task.findOne({
            title: data.title
        }).exec()

        if (titleExist) {
            return NextResponse.json({
                message: 'Task already exist'
            })
        }

        const newTask: ITask = await (new Task(data)).save()
        return NextResponse.json(newTask)
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        })
    }
}