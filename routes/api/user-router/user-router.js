import { Router } from 'express';
import { userController } from '../../../controllers';
import { guard, validateSetBalance, validateSignUp, validateLogIn, upload } from '../../../middlewares';

export const userRouter = new Router();

userRouter.patch(
  '/balance',
  guard,
  validateSetBalance,
  userController.setBalance,
);
userRouter.get('/balance', guard, userController.getBalance);
userRouter.patch('/avatar', guard, upload.single('avatar'), userController.uploadAvatar);
userRouter.put('/', guard, userController.updateUser);