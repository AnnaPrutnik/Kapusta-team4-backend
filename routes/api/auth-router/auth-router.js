import { Router } from 'express';
import { authController } from '../../../controllers';
import { guard } from '../../../middlewares/';

export const authRouter = new Router();

authRouter.post('/signup', authController.signUpUser);
authRouter.post('/login', authController.logInUser);
authRouter.get('/logout', authController.logOutUser);
authRouter.get('/refresh', guard, authController.refreshUser);
