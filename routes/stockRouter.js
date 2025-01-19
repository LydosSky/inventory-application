const { Router } = require('express');
const stockController = require('../controllers/stockController');

const stockRouter = Router();
stockRouter.get('/', stockController.getAllStock);
stockRouter.get('/store/:storeId', stockController.getStockByStoreId);
stockRouter.get('/product/:productId', stockController.getStockByProductId);
stockRouter.post('/', stockController.addStock);
stockRouter.put('/', stockController.updateStock);
stockRouter.delete('/:stockId', stockController.deleteStock);

module.exports = stockRouter;
