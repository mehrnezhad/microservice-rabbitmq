import express from "express"
import { config } from "dotenv"
import notFoundHandler from "./common/exception/notfound-exception.js"
import allExceptionHandler from "./common/exception/all-exception.js"
import productRouter from "./handler/app.route.js"
import swaggerCongif from "./config/swagger.config.js"
import mongooseConfig from "./config/mongoose.config.js"

config()
const app = express()
const PORT  = process.env.PORT
app.use(express.json())
app.use(express.urlencoded())
app.use(productRouter)

swaggerCongif(app)
mongooseConfig()
notFoundHandler(app)
allExceptionHandler(app)
app.listen(PORT, () => {
    console.log('product-service is running!...',PORT)
})