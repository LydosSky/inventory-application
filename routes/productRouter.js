const { Router } = require('express');
const productController = require('../controllers/productController');

const productRouter = Router();

productRouter.get('/', productController.getAllProducts);
productRouter.get('/:productId', productController.getProductById);
productRouter.post('/productAdd', productController.addProduct);
productRouter.post('/productUpdate', productController.updateProduct);
productRouter.delete('/:productId', productController.deleteProduct);

module.exports = productRouter;
