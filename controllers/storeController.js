const storeQueries = require('../database/storeQueries');
const _ = require('lodash');

/**
 * Gets all stores from database
 * @param {Request} req
 * @param {Response} res
 * eventually also willbe rendering a view
 * */
exports.getAllStores = (req, res) =>
  storeQueries.getAllStores().then((stores) => res.send(stores));

/**
 * Gets  store by id
 * @param {Request} req
 * @param {Response} res
 *
 * eventually also willbe rendering a view
 * */
exports.getStoreById = (req, res) =>
  storeQueries
    .getStoreById(parseInt(req.params.storeId))
    .then((store) => res.send(_.first(store)));

/**
 * Add new Store
 * @param {Request} req
 * @param {Response} res
 *
 * */
exports.addStore = (req, res) =>
  storeQueries.addStore([]).then(() => res.send('store added'));

/**
 * Update Store
 * @param {Request} req
 * @param {Response} res
 *
 * */
exports.updateStore = (req, res) =>
  storeQueries.updateStore([]).then(() => res.send('store updated'));

/**
 * Delete Store
 * @param {Request} req
 * @param {Response} res
 */
exports.deleteStore = (req, res) =>
  storeQueries
    .deleteStore(parseInt(req.params.storeId))
    .then(() => res.send('store deleted'));
