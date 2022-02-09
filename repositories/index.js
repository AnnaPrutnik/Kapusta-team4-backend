import { User, Category, Transaction } from '../models';
import { UserRepository } from './user-repository/user-repository';
import { CategoryRepository } from './category-repository/category-repository';
import { TransactionRepository } from './transaction-repository/transaction-repository';

const userRepository = new UserRepository(User);
const categoryRepository = new CategoryRepository(Category);
const transactionRepository = new TransactionRepository(Transaction);

export { userRepository, categoryRepository, transactionRepository };
