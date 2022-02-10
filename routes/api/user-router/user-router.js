import { Router } from 'express';
import { userController } from '../../../controllers';
import { guard } from '../../../middlewares';

export const userRouter = new Router();

// - `/beginner` - GET - энд-поинт для изменения у user-а поля isFirstLogin;
// - `/balance` GET - энд-поинт обновления баланса пользователя

userRouter.patch('/balance', guard, userController.setBalance);
userRouter.get('/balance', guard, userController.getBalance);
