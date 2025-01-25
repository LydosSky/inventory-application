const { Router } = require('express');
const categoryController = require('../controllers/categoryController');
const asyncHandler = require('express-async-handler');

const categoryRouter = Router();

categoryRouter.get('/', asyncHandler(categoryController.getCategories));
categoryRouter.get(
  '/:categoryId',
  asyncHandler(categoryController.getCategoryById),
);
categoryRouter.post(
  '/categoryAdd',
  asyncHandler(categoryController.addCategory),
);
categoryRouter.post(
  '/categoryUpdate',
  asyncHandler(categoryController.updateCategory),
);
categoryRouter.post(
  '/:categoryId',
  asyncHandler(categoryController.deleteCategory),
);

module.exports = categoryRouter;
