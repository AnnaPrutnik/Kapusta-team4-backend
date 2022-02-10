import AuthController from './auth-controller/auth-controller';
import CategoryController from './category-controller/category-controller';
import GoogleAuthController from './google-controller/google-controller';
import TransactionController from './transaction-controller/transaction-controller';
import UserController from './user-controller/user-controller';

const authController = new AuthController();
const categoryController = new CategoryController();
const googleAuthController = new GoogleAuthController();
const transactionController = new TransactionController();
const userController = new UserController();

export {
  authController,
  categoryController,
  googleAuthController,
  transactionController,
  userController,
};
