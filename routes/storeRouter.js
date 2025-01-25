const { Router } = require('express');
const storeController = require('../controllers/storeController');
const asyncHandler = require('express-async-handler');

const storeRouter = Router();

storeRouter.get('/', asyncHandler(storeController.getAllStores));
storeRouter.get('/:storeId', asyncHandler(storeController.getStoreById));
storeRouter.post('/storeUpdate', asyncHandler(storeController.updateStore));
storeRouter.post('/storeAdd', asyncHandler(storeController.addStore));
storeRouter.post('/:storeId', asyncHandler(storeController.deleteStore));

module.exports = storeRouter;
