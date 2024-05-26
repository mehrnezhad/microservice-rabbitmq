import autoBind from "auto-bind"
import { productModel } from "../model/product.model.js"
import { createQueue, pushToQueue } from "../config/rabbitmq.js"
class ProductController {
    constructor() {
        autoBind(this)
    }
    async create(req, res, next) {
        try {
            const { title, description, price } = req.body
            const product = await productModel.create({ title, description, price })
            res.status(201).json({ product })
        } catch (error) {
            next(error)
        }
    }


    async buy(req, res, next) {
        try {



            const { productIDs = [] } = req.body
            const products = await productModel.find({ _id: { $in: productIDs } })
            const { email } = req.user


            await pushToQueue('ORDER', { products, userEmail: email })

            const channel = await createQueue('PRODUCT')
            channel.consume('PRODUCT', msg => {
                console.log(JSON.parse(msg.content.toString()))
            })
            return res.json({
                message: 'order created successfully'
            })
        } catch (error) {
            next(error)
        }
    }
}

export const productController = new ProductController()