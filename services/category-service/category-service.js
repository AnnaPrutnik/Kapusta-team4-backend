export class CategoryService {
  repository;

  constructor(repository) {
    this.repository = repository;
  }

  //   async addCategory(category, isExpense) {
  //     const addedCategory = await this.repository.addCategory(
  //       category,
  //       isExpense,
  //     );
  //     return addedCategory;
  //   }

  async getCategoriesOneType({ type }) {
    let categories = [];
    switch (type) {
      case 'incomes':
        categories = await this.repository.getIncomeCategories();
        break;

      case 'outcomes':
        categories = await this.repository.getExpenseCategories();
        break;

      default:
        break;
    }
    return categories;
  }
}
