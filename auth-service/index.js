import express from "express"
import { config } from "dotenv"
import notFoundHandler from "./common/exception/notfound-exception.js"
import allExceptionHandler from "./common/exception/all-exception.js"
import authRouter from "./handler/app.route.js"
import mongooseConfig from "./config/mongoose.config.js"
import swaggerCongif from "./config/swagger.config.js"

config()
const app = express()
mongooseConfig()
app.use(express.json())
app.use(express.urlencoded())
app.use(authRouter)
swaggerCongif(app)
notFoundHandler(app)
allExceptionHandler(app)

app.listen(process.env.PORT, () => {
    console.log(`auth-service is running!... ${process.env.PORT}`)
})