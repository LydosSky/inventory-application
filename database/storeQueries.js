const pool = require('./pool');

exports.getAllStores = () =>
  pool.query('SELECT * FROM stores').then((response) => response.rows);
