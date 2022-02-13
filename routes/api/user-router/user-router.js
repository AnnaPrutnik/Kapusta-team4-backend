import { Router } from 'express';
import { userController } from '../../../controllers';
import { guard, validateSetBalance } from '../../../middlewares';

export const userRouter = new Router();

userRouter.patch(
  '/balance',
  guard,
  validateSetBalance,
  userController.setBalance,
);
userRouter.get('/balance', guard, userController.getBalance);
