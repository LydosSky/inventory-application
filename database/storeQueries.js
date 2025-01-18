const pool = require('./pool');

/**
 * Gets all of the stores created from database
 * @param {}
 * */
exports.getAllStores = () =>
  pool.query('SELECT * FROM stores').then((response) => response.rows);

/**
 * Get a single store details by store id
 * @param {number} storeId - Id of wanted store
 */
exports.getStoreById = (storeId) =>
  pool.query('SELECT * FROM stores WHERE id = $1', [storeId]);

/**
 * Add New Store
 * @param {array} store
 * store is a array filled with values of the
 * store array example [name, location, phone, email]
 */
exports.addStore = (store) =>
  pool.query(
    'INSERT INTO stores (name, location, phone, email) VALUES ($1, $2 $3, $4)',
    store,
  );

/**
 * Update store
 * @param {array} store - is array with updated or old values
 * first value of the array is the id of the store
 * */
exports.updateStore = (store) =>
  pool.query(
    'UPDATE stores SET name = $2, location = $3, phone = $4, email = $5 WHERE id = $1',
    store,
  );

/**
 * Delete store
 * @param {number} storeId - Id of the store
 * deletes store with given id
 */
exports.deleteStore = (storeId) =>
  pool.query('DELETE FROM stores WHERE id = $1', [storeId]);
