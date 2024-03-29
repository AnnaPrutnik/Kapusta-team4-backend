import {
  userRepository,
  categoryRepository,
  transactionRepository,
} from '../repositories';
import { UserService } from './user-service/user-service';
import { AuthService } from './auth-service/auth-service';
import { CategoryService } from './category-service/category-service';
import { GoogleAuthService } from './google-auth-service/google-auth-service';
import { TransactionService } from './transaction-service/transaction-service';

const userService = new UserService(userRepository);
const authService = new AuthService(userRepository);
const googleAuthService = new GoogleAuthService(userRepository);
const categoryService = new CategoryService(categoryRepository);
const transactionService = new TransactionService(
  transactionRepository,
  userRepository,
  categoryRepository,
);

export {
  userService,
  authService,
  googleAuthService,
  categoryService,
  transactionService,
};
