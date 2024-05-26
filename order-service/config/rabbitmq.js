import amqplib from 'amqplib'
import { orderModel } from '../model/order.model.js';

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

export const createQueue=async (queueName)=>{

  await returnChannel()
  return await channel.assertQueue(queueName, { durable: true })
  
}


export const createOrderWithQueue= async(queueName)=>{
    await createQueue(queueName);
    channel.consume(queueName, async msg => {
        if(msg.content){
            const {products, userEmail} = JSON.parse(msg.content.toString());
            const newOrder = new orderModel({
                products,
                userEmail,
                totalPrice : products.reduce((prev,curr)=>{
                    return prev += curr.price;
                },0)
            })
            await newOrder.save()
            channel.ack(msg)
            pushToQueue('PRODUCT', newOrder)
        }
    })
}

export const pushToQueue = async(QueueName , data)=>{
    try {
        await channel.assertQueue(QueueName, { durable: true })
        return channel.sendToQueue(QueueName , Buffer.from(JSON.stringify(data)))
     
    } catch (error) {
        console.log(error.message)
    }

}