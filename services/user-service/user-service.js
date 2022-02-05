export class UserService {
  #repository;

  constructor(repository) {
    this.#repository = repository;
  }

  async createUser(data) {}
}
