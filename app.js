const morgan = require('morgan');
const express = require('express');
const path = require('node:path');
const dotenv = require('dotenv');
dotenv.config();

const stockRouter = require('./routes/stockRouter');
const categoryRouter = require('./routes/categoryRouter');
const productRouter = require('./routes/productRouter');
const storeRouter = require('./routes/storeRouter');

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

morgan.token('body', function (req) {
  return Object.keys(req.body).length > 0 ? JSON.stringify(req.body) : '----';
});

app.use(morgan(':method :url :body'));

app.use('/', stockRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);
app.use('/stores', storeRouter);

app.use((err, req, res, next) => {
  console.log(err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Express app listenning on port ${PORT}!`);
});
