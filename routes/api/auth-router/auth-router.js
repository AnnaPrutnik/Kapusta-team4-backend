import { Router } from 'express';
import { authController } from '../../../controllers';

export const authRouter = new Router();

authRouter.post('/signup', authController.signUpUser);
authRouter.post('/login', authController.logInUser);
authRouter.post('/logout', authController.logOutUser);