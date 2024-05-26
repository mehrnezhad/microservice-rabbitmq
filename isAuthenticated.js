import createHttpError from "http-errors"
import jwt from "jsonwebtoken"
import { config } from "dotenv"

const Authorization = async (req, res, next) => {
    config()
    try {
        const header = req.headers
        const token = header?.authorization?.split(" ")[1]
        if (!token) throw new createHttpError.Unauthorized('token not existed!')

       const payload = jwt.verify(token, process.env.JWT_SECRET)
      
       req.user = payload

     return next()

    } catch (error) {
        next(error)
    }


}
export default Authorization