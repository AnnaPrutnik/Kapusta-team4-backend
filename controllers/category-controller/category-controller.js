import createError from 'http-errors';
import { categoryService } from '../../services';

class CategoryController {
  //   async createCategory(req, res, next) {
  //     const { category, isExpense } = req.body;
  //     const newCategory = await categoryService.addCategory(category, isExpense);

  //     return res.json({ message: 'category add controller', newCategory });
  //   }

  async getCategories(req, res, next) {
    const type = req.params;
    console.log('controller', type);
    const categories = await categoryService.getCategoriesOneType(type);
    console.log(categories);
    return res.json({ message: 'category get controller', categories });
  }
}

export default CategoryController;
