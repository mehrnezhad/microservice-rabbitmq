import amqplib from 'amqplib'
import { json } from 'express';

let channel;

export const connectToChannel = async () => {
    try {
        const connection = await amqplib.connect('amqp://localhost:5672')
        return (await connection.createChannel())
    } catch (error) {
        console.log('cannot connect to rabbitmq server')
    }
}

export const returnChannel = async()=>{
    if(!channel){

        channel = await connectToChannel()
    }
    return channel
}

export const pushToQueue = async(QueueName , data)=>{
    try {
        await channel.assertQueue(QueueName, { durable: true })
        return channel.sendToQueue(QueueName , Buffer.from(JSON.stringify(data)))
     
    } catch (error) {
        console.log(error.message)
    }

}