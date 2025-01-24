const { Router } = require('express');
const stockController = require('../controllers/stockController');

const stockRouter = Router();

stockRouter.get('/', stockController.getAllStock);
stockRouter.get('/store/:storeId', stockController.getStockByStoreId);
stockRouter.get('/product/:productId', stockController.getStockByProductId);
stockRouter.post('/stockAdd', stockController.addStock);
stockRouter.post('/stockUpdate', stockController.updateStock);
stockRouter.post('/:stockId', stockController.deleteStock);

module.exports = stockRouter;
