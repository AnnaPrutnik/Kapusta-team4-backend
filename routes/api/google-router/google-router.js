import { Router } from 'express';
import errorWrapper from '../../../helpers/errorWrapper';
import { googleAuth, googleRedirect } from "../../../controllers/google-controller/google-controller";

const authRouter = new Router();

authRouter.get('/google', errorWrapper(googleAuth));
authRouter.get('/google-redirect', errorWrapper(googleRedirect));

export default authRouter;
