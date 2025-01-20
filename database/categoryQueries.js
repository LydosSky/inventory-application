const pool = require('./pool');

/**
 * Gets all of the categories created from database
 * @param {}
 * */
exports.getAllCategories = () =>
  pool.query('SELECT * FROM categories').then((response) => response.rows);

/**
 * Get a single category details by category id
 * @param {number} categoryId - Id of wanted category
 */
exports.getCategoryById = (categoryId) =>
  pool
    .query('SELECT * FROM categories WHERE id = $1', [categoryId])
    .then((response) => response.rows);

/**
 * Add New Category
 * @param {Object} category
 * category is an Object
 * {
 *   @prop {string} name,
 *   @prop {string} description
 * }
 */
exports.addCategory = ({ name, description }) =>
  pool.query('INSERT INTO categories (name, description) VALUES ($1, $2)', [
    name,
    description,
  ]);

/**
 * Update category
 * @param {Object} category - is an object
 * Key is providing proper category id.
 * {
 *   @prop {number} id
 *   @prop {string} name
 *   @prop {string} description
 * }
 * */
exports.updateCategory = ({ id, name, description }) =>
  pool.query(
    'UPDATE categories SET name = $2, description = $3 WHERE id = $1',
    [id, name, description],
  );

/**
 * Delete Category
 * @param {number} categoryId - Id of the category
 * deletes category with given id
 */
exports.deleteCategory = (categoryId) =>
  pool.query('DELETE FROM categories WHERE id = $1', [categoryId]);
