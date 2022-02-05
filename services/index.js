import { userRepository } from '../repositories';
import { UserService } from './user-service/user-service';
import { AuthService } from './auth-service/auth-service';

const userService = new UserService(userRepository);
const authService = new AuthService(userRepository);

export { userService, authService };
