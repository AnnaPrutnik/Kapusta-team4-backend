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
    const categories = await categoryService.getCategoriesOneType(type);
    if (!categories) {
      return next(createError(401, 'Choose right categories'));
    }
    return res.status(200).json({
      status: 'success',
      code: 200,
      data: categories,
    });
  }
}

export default CategoryController;
