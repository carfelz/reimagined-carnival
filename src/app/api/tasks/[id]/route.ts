import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Task from "@/app/models/Task";
import ITask from "@/app/interfaces/Tasks.interface";

export async function GET(req: Request, { params }: any) {
    try {
        connectDB();
    const task: ITask | null = await Task.findById(params.id) || null

    return NextResponse.json(task);
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, {
            status: 404
        })
    }
}

export async function PUT(req: Request, { params }: any) {
    try {
        connectDB();
        
        const update: ITask = await req.json()
        
        const updatedTask: ITask | null = await Task.findOneAndUpdate({
            _id: params.id
        }, update, { new: true })

        return NextResponse.json(updatedTask);

    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, {
            status: 404
        })
    }
}

export async function DELETE(req: Request, { params }: any) {
    try {
        connectDB();

        const { id } = params;
        await Task.findByIdAndDelete(id);
        return NextResponse.json(id)
    } catch (error: any) {
       return NextResponse.json(error.message, {status: 404}) 
    }
}