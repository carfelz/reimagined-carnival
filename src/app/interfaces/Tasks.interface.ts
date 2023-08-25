import { ObjectId } from "mongoose";

export default interface ITask {
    _id: ObjectId
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string
}