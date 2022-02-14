import { AbstractRepository } from '../abstract-repository/abstract-repository';

export class CategoryRepository extends AbstractRepository {
  constructor(model) {
    super(model);
  }

  async getIncomeCategories() {
    const categories = await this.model.find({ isExpense: false });
    return categories;
  }

  async getExpenseCategories() {
    const categories = await this.model.find({ isExpense: true });
    return categories;
  }

  async getCategory(id) {
    const category = await this.model.findById(id);
    return category;
  }

  async findCategoryType(id) {
    const { isExpense } = await this.model.findById(id);
    return isExpense;
  }
}
