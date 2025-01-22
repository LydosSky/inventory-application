const storeQueries = require('../database/storeQueries');
const _ = require('lodash');

/**
 * Gets all stores from database
 * @param {Request} req
 * @param {Response} res
 * eventually also will be rendering a view
 * */
exports.getAllStores = (req, res) =>
  storeQueries
    .getAllStores()
    .then((stores) =>
      res.render('stores', { title: 'Stock | Stores', stores }),
    );

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
 * A store is
 * {
 *   name: string
 *   location: string
 *   phone: string
 *   email: string
 * }
 * */
exports.addStore = (req, res) =>
  storeQueries
    .addStore(({ name, location, phone, email } = req.body))
    .then(() => res.send('store added'));

/**
 * Update Store
 * @param {Request} req
 * @param {Response} res
 * Pick store information from the form creates new
 * store object with information. Key is providing
 * proper id of store.
 * {
 *   id: number
 *   name: string
 *   location: string
 *   phone: string
 *   email: string
 * }
 * */
exports.updateStore = (req, res) =>
  storeQueries
    .updateStore(({ id, name, location, phone, email } = req.body))
    .then(() => res.send('store updated'));

/**
 * Delete Store
 * @param {Request} req
 * @param {Response} res
 *
 */
exports.deleteStore = (req, res) =>
  storeQueries
    .deleteStore(parseInt(req.params.storeId))
    .then(() => res.send('store deleted'));
