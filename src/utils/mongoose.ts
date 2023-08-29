import { connect, connection } from "mongoose";

let isConnected: boolean = false;

export async function connectDB() {
    if(isConnected) return
    return await connect('mongodb://localhost:27017/to-do-app')
        .then((response) => {
            isConnected = !!response.connections[0].readyState
        })
        .catch((error) => error)
}

connection.on('connected', () => {
    console.log('database runinng')
})

connection.on('error', (error) => {
    console.log('Unable to connect to database', error)
})