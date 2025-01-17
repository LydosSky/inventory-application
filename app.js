const express = require('express');
const path = require('node:path');
const dotenv = require('dotenv');
dotenv.config();

const indexRouter = require('./routes/indexRouter');
const categoryRouter = require('./routes/indexRouter');
const productRouter = require('./routes/productRouter');
const inventoryRouter = require('./routes/inventoryRouter');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/css',
  express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')),
);
app.use(
  '/css',
  express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font/')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')),
);

app.use('/', stockRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);
app.use('/stores', storeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Express app listenning on port ${PORT}!`);
});
