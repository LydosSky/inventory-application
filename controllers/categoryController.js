const categoryQueries = require('../database/categoryQueries');
const _ = require('lodash');

/**
 * Get all categories
 * @param {Request} req
 * @param {Response} res
 * */
exports.getCategories = (req, res) =>
  categoryQueries.getAllCategories().then((categories) => res.send(categories));

/**
 * Get Category by Id
 * @param {Request} req
 * @param {Response} res
 * */
exports.getCategoryById = (req, res) =>
  categoryQueries
    .getCategoryById(parseInt(req.params.categoryId))
    .then((category) => _.first(category));

/**
 * Add New Category
 * @param {Request} req
 * @param {Response} res
 * */
exports.addCategory = (req, res) =>
  categoryQueries.addCategory([]).then(() => res.send('category added'));

/**
 * Update Category
 * @param {Request} req
 * @param {Response} res
 * */
exports.updateCategory = (req, res) =>
  categoryQueries.updateCategory([]).then(() => res.send('category updated'));

/**
 * Delete Category
 * @param {Request} req
 * @param {Response} res
 * */
exports.updateCategory = (req, res) =>
  categoryQueries
    .updateCategory(parseInt(req.params.categoryId))
    .then(() => res.send('category deleted'));
