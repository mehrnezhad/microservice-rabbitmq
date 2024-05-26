import { Router } from "express";
import { userController } from "../controller/user.controller.js";

const authRouter = Router()

authRouter.post('/register',userController.register)
authRouter.post('/login',userController.login)
export default authRouter