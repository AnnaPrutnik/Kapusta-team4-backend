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
}
