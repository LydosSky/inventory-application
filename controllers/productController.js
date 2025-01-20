const productQueries = require('../database/productQueries');
const _ = require('lodash');

/**
 * Get Products
 * @param {Request} req
 * @param {Response} res
 * */
exports.getAllProducts = (req, res) =>
  productQueries.getAllProducts().then((products) => res.send(products));

/**
 * Get Product by Id
 * @param {Request} req
 * @param {Response} res
 * */
exports.getProductById = (req, res) =>
  productQueries
    .getProductById(parseInt(req.params.productId))
    .then((product) => res.send(_.first(product)));

/**
 * Add Product
 * @param {Request} req
 * @param {Response} res
 * */
exports.addProduct = (req, res) =>
  productQueries
    .addProduct(({ name, description, price, category_id } = req.body))
    .then(() => res.send('product added'));

/**
 * Update Product
 * @param {Request} req
 * @param {Response} res
 * */
exports.updateProduct = (req, res) =>
  productQueries
    .updateProduct(({ id, name, description, price, category_id } = req.body))
    .then(() => res.send('product updated'));

/**
 * Delete Product
 * @param {Request} req
 * @param {Response} res
 * */
exports.deleteProduct = (req, res) =>
  productQueries
    .deleteProduct(req.params.productId)
    .then(() => res.send('product deleted'));
