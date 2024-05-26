import autoBind from 'auto-bind'
import { userModel } from '../model/auth.model.js'
import createHttpError from 'http-errors'
import jwt from 'jsonwebtoken'
class UserController {

    constructor() {
        autoBind(this)
    }

    async register(req, res, next) {
        try {

            const { name, email, password } = req.body
            const user = await userModel.findOne({ email })
            if (user) { throw new createHttpError.BadRequest('user existed') }
            const newUser = await userModel.create({ name, email, password })
            res.status(201).json({ message: 'user created', user: newUser })
        } catch (error) {
            next(error)
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body
            const user = await userModel.findOne({ email })
            if (!user) { throw new createHttpError.BadRequest('user not existed') }
            if (user.password !== password) { throw new createHttpError.BadRequest('password is incorrect!') }
            const token = jwt.sign({userID : user._id , email , name: user.name},process.env.JWT_SECRET, { expiresIn: "1d" }) 
            res.status(200).json({ message: 'token created', token })
        } catch (error) {
            next(error)
        }
    }

}
export const userController = new UserController()