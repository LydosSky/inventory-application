const { Router } = require('express');
const storeController = require('../controllers/storeController');

const storeRouter = Router();

storeRouter.get('/', storeController.getAllStores);
storeRouter.get('/:storeId', storeController.getStoreById);
storeRouter.post('/', storeController.addStore);
storeRouter.put('/', storeController.updateStore);
storeRouter.delete('/:storeId', storeController.deleteStore);

module.exports = storeRouter;
