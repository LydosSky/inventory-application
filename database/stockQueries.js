const { response } = require('express');
const pool = require('./pool');
/**
 * Gets all of the categories created from database
 * @param {}
 * */
exports.getAllStock = () =>
  pool.query('SELECT * FROM stock').then((response) => response.rows);

/**
 * Get stock of given store
 * @param {number} storeId
 * */
exports.getStockByStoreId = (storeId) =>
  pool
    .query('SELECT * FROM stock WHERE store_id = $1', [storeId])
    .then((response) => response.rows);

/**
 * Get Stock of given product
 * @param {number} productId
 */
exports.getStockByProductId = (productId) =>
  pool
    .query('SELECT * FROM stock WHERE product_id = $1', [productId])
    .then((response) => response.rows);

/**
 * Add Stock
 * @param {Object} stock
 * stock is object
 * {
 *   @prop {number} storeId
 *   @prop {number} productId
 *   @prop {number} stockQuantity
 * }
 * */
exports.addStock = ({ storeId, productId, stockQuantity }) =>
  pool.query(
    'INSERT INTO stock (store_id, product_id, stock_quantity, last_restocked) VALUES ($1, $2, $3, CURRENT_TIMESTAMP)',
    [storeId, productId, stockQuantity],
  );

/**
 * Update Stock
 * @param {Object} stock
 * Updating stock for given stores product
 * {
 *   @prop {number} id
 *   @prop {number} stockQuantity
 * }
 * */
exports.updateStock = ({ id, stockQuantity }) =>
  pool.query(
    'UPDATE stock SET stock_quantity = $2, last_restocked = CURRENT_TIMESTAMP WHERE id = $1',
    [id, stockQuantity],
  );

/**
 * Delete Stock
 * @param {number} stockId
 * deletes the stock of given id
 * */
exports.deleteStock = (stockId) =>
  pool.query('DELETE FROM stock WHERE id = $1', [stockId]);
