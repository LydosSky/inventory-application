const database = require('../database/storeQueries');

exports.getIndexPage = (req, res) =>
  database.getAllStores().then((response) => {
    console.log(response);
    res.render('index', { title: 'Panel | Home', stores: response });
  });
