const productQueries = require('../database/productQueries');
const categoryQueries = require('../database/categoryQueries');
const _ = require('lodash');

/**
 * Get Products
 * @param {Request} req
 * @param {Response} res
 * */
exports.getAllProducts = async (req, res) => {
  const categories = await categoryQueries.getAllCategories();
  const products = await productQueries.getAllProducts();

  res.render('products', { title: 'Stock | Products', products, categories });
};

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
    .then(() => res.redirect('/products'));

/**
 * Update Product
 * @param {Request} req
 * @param {Response} res
 * */
exports.updateProduct = (req, res) =>
  productQueries
    .updateProduct(({ id, name, description, price, category_id } = req.body))
    .then(() => res.redirect('/products'));

/**
 * Delete Product
 * @param {Request} req
 * @param {Response} res
 * */
exports.deleteProduct = (req, res) =>
  productQueries
    .deleteProduct(req.params.productId)
    .then(() => res.redirect('/products'));
