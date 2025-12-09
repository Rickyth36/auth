import express from 'express';
import userAuth from '../middleware/userAuth.js';
import { getuserData } from '../controller/userController.js';

const userRouter = express.Router();
userRouter.get('/data', userAuth, getuserData)

export default userRouter;