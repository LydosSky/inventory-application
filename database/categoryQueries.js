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
 * @param {array} category
 * category is a array filled with values of the
 * category array [name, description]
 */
exports.addCategory = (category) =>
  pool.query(
    'INSERT INTO categories (name, description) VALUES ($1, $2)',
    category,
  );

/**
 * Update category
 * @param {array} category - is an array with updated or old values
 * first value of the array is the id of the category
 * */
exports.updateCategory = (category) =>
  pool.query(
    'UPDATE categories SET name = $2, description = $3 WHERE id = $1',
    category,
  );

/**
 * Delete Category
 * @param {number} categoryId - Id of the category
 * deletes category with given id
 */
exports.deleteCategory = (categoryId) =>
  pool.query('DELETE FROM categories WHERE id = $1', [categoryId]);
