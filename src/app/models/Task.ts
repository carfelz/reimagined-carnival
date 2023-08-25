import { Schema, model, models } from "mongoose";
import ITask from "../interfaces/Tasks.interface";

const ISREQUIRED = 'is required'

const taskSchema = new Schema<ITask>({
    title: {
        type: String,
        required: [true, `title ${ISREQUIRED}`],
        trim: true,
        unique: true,
    },
    description: {
        type: String,
        required: [true, `description ${ISREQUIRED}`],
        trim: true,
        unique: true,
    }
}, {
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
})

export default models.Task || model('Task', taskSchema)