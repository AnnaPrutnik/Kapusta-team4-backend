import AuthController from './auth-controller/auth-controller';
import TransactionController from './transaction-controller/transaction-controller';

const authController = new AuthController();
const transactionController = new TransactionController();

export { authController, transactionController };
