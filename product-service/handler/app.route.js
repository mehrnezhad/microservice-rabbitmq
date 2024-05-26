import { Router } from "express";
import { productController } from "../controller/product.controller.js";
import Authorization from "../../isAuthenticated.js";

const productRouter = Router()

productRouter.post('/create' , productController.create)
productRouter.post('/buy',Authorization,productController.buy)

export default productRouter