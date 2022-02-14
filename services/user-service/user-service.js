export class UserService {
  repository;

  constructor(repository) {
    this.repository = repository;
  }

  async findUserByEmail(email) {
    try {
      return await this.repository.findUserByEmail(email);
    } catch (error) {
      console.error(`Error on searching user by email: ${error.message}`);
      return null;
    }
  }

  async findUserById(id) {
    try {
      return await this.repository.getById(id);
    } catch (error) {
      console.error(`Error on searching user by id: ${error.message}`);
      return null;
    }
  }

  async isUserValid(email, password) {
    try {
      const user = await this.repository.findUserByEmail(email);
      const isPasswordValid = await user.isPasswordValid(password);
      if (!isPasswordValid) {
        return null;
      }

      return user;
    } catch (error) {
      console.error(`Error on checking user's validity: ${error.message}`);
      return null;
    }
  }

  async getBalance(id) {
    const balance = await this.repository.getBalance(id);
    return balance;
  }

  async setBalance(id, value) {
    console.log(value);
    const newBalance = await this.repository.setBalance(id, value);
    await this.repository.setIsFirstLogin(id);
    return newBalance;
  }

  async updateUser(id) {
    const user = await this.repository.updateUser(id);
    return user;
  }

}
