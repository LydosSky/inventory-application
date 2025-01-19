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
 * @param {array} stock
 * stock is an array
 * -- [store_id, product_id, stock_quantity, last_restocked]
 * */
exports.addStock = (stock) =>
  pool.query(
    'INSERT INTO stock (store_id, product_id, stock_quantity, last_restocked) VALUES ($1, $2, $3, CURRENT_TIMESTAMP)',
    stock,
  );

/**
 * Update Stock
 * @param {array} stock
 * Updating stock takes product_id and store_id and stock_quantity
 * -- [store_id, product_id, stock_quantity]
 * */
exports.updateStock = (stock) =>
  pool.query(
    'UPDATE stock SET stock_quantity = $3, last_restocked = CURRENT_TIMESTAMP WHERE store_id = $1, product_id = $2',
    stock,
  );

/**
 * Delete Stock
 * @param {number} stockId
 * deletes the stock of given id
 * */
exports.deleteStock = (stockId) =>
  pool.query('DELETE FROM stock WHERE id = $1', [stockId]);
