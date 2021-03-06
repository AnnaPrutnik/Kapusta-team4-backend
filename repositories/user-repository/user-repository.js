import { AbstractRepository } from '../abstract-repository/abstract-repository';

export class UserRepository extends AbstractRepository {
  constructor(model) {
    super(model);
  }

  async findUserByEmail(email) {
    return await this.model.findOne({ email });
  }

  async createNewUser(data) {
    return await this.model(data).save();
  }

  async updateToken(id, token) {
    return await this.model.updateOne({ _id: id }, { token });
  }

  async getBalance(id) {
    const user = await this.model.findById(id);
    return user.balance;
  }

  async setBalance(id, value) {
    const user = await this.model.findByIdAndUpdate(
      id,
      { balance: value },
      { new: true },
    );

    return user.balance;
  }

  async setIsFirstLogin(id) {
    const res = await this.model.findByIdAndUpdate(
      id,
      {
        isFirstLogin: false,
      },
      { new: true },
    );
  }
}
