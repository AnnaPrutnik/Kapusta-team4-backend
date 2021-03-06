import { Router } from 'express';
import { authController } from '../../../controllers';
import { guard, validateSignUp, validateLogIn } from '../../../middlewares/';

export const authRouter = new Router();

authRouter.post('/signup', validateSignUp, authController.signUpUser);
authRouter.post('/login', validateLogIn, authController.logInUser);
authRouter.get('/logout', guard, authController.logOutUser);
authRouter.get('/refresh', guard, authController.refreshUser);
