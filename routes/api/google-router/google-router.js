import { Router } from 'express';
import errorWrapper from '../../../helpers/errorWrapper';
import { googleAuthController } from '../../../controllers/';

export const googleAuthRouter = new Router();

googleAuthRouter.get('/google', errorWrapper(googleAuthController.googleAuth));
googleAuthRouter.get('/google-redirect', googleAuthController.googleRedirect);
// googleAuthRouter.get(
//   '/google-redirect/:data',
//   googleAuthController.googleSendUser,
// );
