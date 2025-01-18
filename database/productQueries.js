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
 * @param {array} product
 * product is an array filled with values
 * -- [name, description, price, category_id]
 */
exports.addProduct = (product) =>
  pool.query(
    'INSERT INTO products (name, description, price, category_id) VALUES ($1, $2, $3, $4)',
    product,
  );

/**
 * Update Product
 * @param {array} product - is an array with updated or old values
 * first value of the array is the id of the product
 * */
exports.updateProduct = (product) =>
  pool.query(
    'UPDATE products SET name = $2, description = $3, price = $4, category_id = $5 WHERE id = $1',
    product,
  );

/**
 * Delete Product
 * @param {number} productId - Id of the category
 * deletes category with given id
 */
exports.deleteProduct = (productId) =>
  pool.query('DELETE FROM products WHERE id = $1', [productId]);
