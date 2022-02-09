import { User, Category } from '../models';
import { UserRepository } from './user-repository/user-repository';
import { CategoryRepository } from './category-repository/category-repository';

const userRepository = new UserRepository(User);
const categoryRepository = new CategoryRepository(Category);

export { userRepository, categoryRepository };
