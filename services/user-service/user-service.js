export class UserService {
  repository;

  constructor(repository) {
    this.repository = repository;
  }

  async findUserByEmail(email) {
    try {
      return await this.repository.findUserByEmail(email);
    } catch (error) {
      console.error(`Error on searching user: ${error.message}`);
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
}
