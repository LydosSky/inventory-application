const { Router } = require('express');
const storeController = require('../controllers/storeController');

const storeRouter = Router();

storeRouter.get('/', storeController.getAllStores);
storeRouter.get('/:storeId', storeController.getStoreById);
storeRouter.post('/storeUpdate', storeController.updateStore);
storeRouter.post('/storeAdd', storeController.addStore);
storeRouter.delete('/:storeId', storeController.deleteStore);

module.exports = storeRouter;
