import createError from 'http-errors';
import { categoryService } from '../../services';

class CategoryController {
  async getCategories(req, res, next) {
    const type = req.params;
    const categories = await categoryService.getCategoriesOneType(type);
    if (!categories) {
      return next(createError(400, 'Choose right categories'));
    }
    return res.status(200).json({
      status: 'success',
      code: 200,
      data: categories,
    });
  }
}

export default CategoryController;
