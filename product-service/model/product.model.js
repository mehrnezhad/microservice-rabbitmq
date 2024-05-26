import { Schema,model } from "mongoose";

const productSchema = new Schema({
    title: { type: String },
    description: { type: String },
    price: { type: Number }
},{timestamps : true})

export const productModel = model('product',productSchema)