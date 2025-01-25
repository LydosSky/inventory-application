const { Router } = require('express');
const productController = require('../controllers/productController');
const asyncHandler = require('express-async-handler');

const productRouter = Router();
productRouter.get('/', asyncHandler(productController.getAllProducts));

productRouter.get(
  '/:productId',
  asyncHandler(productController.getProductById),
);

productRouter.post('/productAdd', asyncHandler(productController.addProduct));

productRouter.post(
  '/productUpdate',
  asyncHandler(productController.updateProduct),
);
productRouter.post(
  '/:productId',
  asyncHandler(productController.deleteProduct),
);

module.exports = productRouter;
