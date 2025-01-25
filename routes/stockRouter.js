const { Router } = require('express');
const stockController = require('../controllers/stockController');
const asyncHandler = require('express-async-handler');

const stockRouter = Router();

stockRouter.get('/', asyncHandler(stockController.getAllStock));
stockRouter.get(
  '/store/:storeId',
  asyncHandler(stockController.getStockByStoreId),
);
stockRouter.get(
  '/product/:productId',
  asyncHandler(stockController.getStockByProductId),
);
stockRouter.post('/stockAdd', asyncHandler(stockController.addStock));
stockRouter.post('/stockUpdate', asyncHandler(stockController.updateStock));
stockRouter.post('/:stockId', asyncHandler(stockController.deleteStock));

module.exports = stockRouter;
