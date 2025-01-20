const pool = require('./pool');

/**
 * Gets all of the products created from database
 * @param {}
 * */
exports.getAllProducts = () =>
  pool.query('SELECT * FROM products').then((response) => response.rows);

/**
 * Get a single product details by product id
 * @param {number} productId - Id of wanted product
 */
exports.getProductById = (productId) =>
  pool
    .query('SELECT * FROM products WHERE id = $1', [productId])
    .then((response) => response.rows);

/**
 * Add New Product
 * @param {Object} product
 * product is an Object
 * {
 *   @prop {string} name
 *   @prop {string} description
 *   @prop {number} price
 *   @prop {number} category_id
 * }
 */
exports.addProduct = ({ name, description, price, category_id }) =>
  pool.query(
    'INSERT INTO products (name, description, price, category_id) VALUES ($1, $2, $3, $4)',
    [name, description, price, category_id],
  );

/**
 * Update Product
 * @param {Object} product -
 * product is an Object
 * {
 *   @prop {number} id
 *   @prop {string} name
 *   @prop {string} description
 *   @prop {number} price
 *   @prop {number} category_id
 * }
 * */
exports.updateProduct = ({ id, name, description, price, category_id }) =>
  pool.query(
    'UPDATE products SET name = $2, description = $3, price = $4, category_id = $5 WHERE id = $1',
    [id, name, description, price, category_id],
  );

/**
 * Delete Product
 * @param {number} productId - Id of the category
 * deletes category with given id
 */
exports.deleteProduct = (productId) =>
  pool.query('DELETE FROM products WHERE id = $1', [productId]);
