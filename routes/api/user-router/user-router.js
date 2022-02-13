import { Router } from 'express';
import { userController } from '../../../controllers';
import { guard } from '../../../middlewares';
import { upload } from '../../../middlewares';

export const userRouter = new Router();

userRouter.patch('/balance', guard, userController.setBalance);
userRouter.get('/balance', guard, userController.getBalance);
userRouter.patch('/avatar', guard, upload.single('avatar'), userController.uploadAvatar);

