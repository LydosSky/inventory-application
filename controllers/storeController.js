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
    .getStoreById(parseInt(res.params.id))
    .then((store) => res.send(_.first(store)));

/**
 * Add new Store
 * @param {Request} req
 * @param {Response} res
 *
 * */
exports.addStore = (req, res) =>
  storeQueries.addStore().then(() => res.redirect('/'));

/**
 * Update Store
 * @param {Request} req
 * @param {Response} res
 *
 * */
exports.updateStore = (req, res) =>
  storeQueries.updateStore().then(() => res.redirect('/'));

/**
 * Delete Store
 * @param {Request} req
 * @param {Response} res
 */
exports.deleteStore = (req, res) =>
  storeQueries
    .deleteStore(parseInt(req.params.id))
    .then(() => res.redirect('/'));
