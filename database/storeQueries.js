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
  pool
    .query('SELECT * FROM stores WHERE id = $1', [storeId])
    .then((response) => response.rows);

/**
 * Add New Store
 * @param {Object} store
 * store is a object filled with values
 * store Object is {
 *   id: number,
 *   name: string,
 *   location: string,
 *   email:string
 * }
 */
exports.addStore = ({ name, location, phone, email }) =>
  pool.query(
    'INSERT INTO stores (name, location, phone, email) VALUES ($1, $2, $3, $4)',
    [name, location, phone, email],
  );

/**
 * Update store
 * @param {Object} store - is object with updated or old values
 * store Object is {
 *   id: number,
 *   name: string,
 *   location: string,
 *   email:string
 * }
 * */
exports.updateStore = ({ id, name, location, phone, email }) =>
  pool.query(
    'UPDATE stores SET name = $2, location = $3, phone = $4, email = $5 WHERE id = $1',
    [id, name, location, phone, email],
  );

/**
 * Delete store
 * @param {number} storeId - Id of the store
 * deletes store with given id
 */
exports.deleteStore = (storeId) =>
  pool.query('DELETE FROM stores WHERE id = $1', [storeId]);
