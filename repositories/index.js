import { User } from '../models';
import { UserRepository } from './user-repository/user-repository';

const userRepository = new UserRepository(User);

export { userRepository };
