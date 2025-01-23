const categoryQueries = require('../database/categoryQueries');
const _ = require('lodash');

/**
 * Get all categories
 * @param {Request} req
 * @param {Response} res
 * */
exports.getCategories = (req, res) =>
  categoryQueries
    .getAllCategories()
    .then((categories) =>
      res.render('categories', { title: 'Stock | Categories', categories }),
    );

/**
 * Get Category by Id
 * @param {Request} req
 * @param {Response} res
 * */
exports.getCategoryById = (req, res) =>
  categoryQueries
    .getCategoryById(parseInt(req.params.categoryId))
    .then((category) => res.send(_.first(category)));

/**
 * Add New Category
 * @param {Request} req
 * @param {Response} res
 * */
exports.addCategory = (req, res) =>
  categoryQueries
    .addCategory(({ name, description } = req.body))
    .then(() => res.redirect('/categories'));

/**
 * Update Category
 * @param {Request} req
 * @param {Response} res
 * */
exports.updateCategory = (req, res) =>
  categoryQueries
    .updateCategory(({ id, name, description } = req.body))
    .then(() => res.redirect('/categories'));

/**
 * Delete Category
 * @param {Request} req
 * @param {Response} res
 * */
exports.deleteCategory = (req, res) =>
  categoryQueries
    .deleteCategory(parseInt(req.params.categoryId))
    .then(() => res.send('category deleted'));
