const stockQueries = require('../database/stockQueries');
const productQueries = require('../database/productQueries');
const storeQueries = require('../database/storeQueries');

/**
 * Get all of the stock
 * @param {Request} req
 * @param {Response} res
 * */
exports.getAllStock = async (req, res) => {
  const products = await productQueries.getAllProducts();
  const stores = await storeQueries.getAllStores();
  const stock = await stockQueries.getAllStock();
  return res.render('index', {
    title: 'Stock | Stocks',
    products: products.map((p) => ({
      id: p.id,
      name: p.name,
    })),
    stores: stores.map((s) => ({
      id: s.id,
      name: s.name,
    })),
    stock,
  });
};

/**
 * Get Stock of a Store
 * @param {Request} req
 * @param {Response} res
 * */
exports.getStockByStoreId = (req, res) =>
  stockQueries
    .getStockByStoreId(parseInt(req.params.storeId))
    .then((stock) => res.send(stock));

/**
 * Get Stock of a Product
 * @param {Request} req
 * @param {Response} res
 * */
exports.getStockByProductId = (req, res) =>
  stockQueries
    .getStockByProductId(parseInt(req.params.productId))
    .then((stock) => res.send(stock));

/**
 * Add Stock of Product to a Store
 * @param {Request} req
 * @param {Response} res
 * */
exports.addStock = (req, res) =>
  stockQueries
    .addStock(({ storeId, productId, stockQuantity } = req.body))
    .then(() => res.redirect('/'));

/**
 * Update Stock of Product in a Store
 * @param {Request} req
 * @param {Response} res
 * */
exports.updateStock = (req, res) =>
  stockQueries
    .updateStock(({ id, stockQuantity } = req.body))
    .then(() => res.redirect('/'));
/**
 * Delete Stock of Product from Store
 * @param {Request} req
 * @param {Response} res
 * */
exports.deleteStock = (req, res) =>
  stockQueries.deleteStock(req.params.stockId).then(() => res.redirect('/'));
