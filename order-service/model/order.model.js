import { Schema,model } from "mongoose";

const idSchema = new Schema({
    _id : {type: String}
})

const orderSchema = new Schema({
    products: {type: [idSchema]},
    userEmail: { type: String },
    totalPrice: { type: Number }
},{timestamps : true})

export const orderModel = model('order',orderSchema)