const { Router } = require('express');
const categoryController = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.get('/', categoryController.getCategories);
categoryRouter.get('/:categoryId', categoryController.getCategoryById);
categoryRouter.post('/categoryAdd', categoryController.addCategory);
categoryRouter.post('/categoryUpdate', categoryController.updateCategory);
categoryRouter.delete('/:categoryId', categoryController.deleteCategory);

module.exports = categoryRouter;
