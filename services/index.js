import { userRepository, categoryRepository } from '../repositories';
import { UserService } from './user-service/user-service';
import { AuthService } from './auth-service/auth-service';
import { CategoryService } from './category-service/category-service';
import { GoogleAuthService } from './goole-auth-service/google-auth-service';

const userService = new UserService(userRepository);
const authService = new AuthService(userRepository);
const googleAuthService = new GoogleAuthService(userRepository);
const categoryService = new CategoryService(categoryRepository);

export { userService, authService, googleAuthService, categoryService };
