import AuthController from './auth-controller/auth-controller';
import CategoryController from './category-controller/category-controller';
import GoogleAuthController from './google-controller/google-controller';

const authController = new AuthController();
const categoryController = new CategoryController();
const googleAuthController = new GoogleAuthController();

export { authController, categoryController, googleAuthController };
