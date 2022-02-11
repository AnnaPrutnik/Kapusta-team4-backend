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
    try {
      let categories = [];
      switch (type) {
        case 'incomes':
          categories = await this.repository.getIncomeCategories();
          break;

        case 'expenses':
          categories = await this.repository.getExpenseCategories();
          break;

        default:
          break;
      }
      return categories;
    } catch (error) {
      console.error(`Error on getting categories: ${error.message}`);
      return null;
    }
  }
}
