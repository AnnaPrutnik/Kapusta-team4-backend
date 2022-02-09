import AuthController from './auth-controller/auth-controller';
import CategoryController from './category-controller/category-controller';

const authController = new AuthController();
const categoryController = new CategoryController();

export { authController, categoryController };
