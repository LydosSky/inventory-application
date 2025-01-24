#! /usr/bin/env node

const dotenv = require('dotenv');
dotenv.config();

const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    category_id INTEGER REFERENCES categories(id) ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS stores (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    phone VARCHAR(20),
    email VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS stock (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    store_id INTEGER REFERENCES stores(id) ON DELETE RESTRICT,
    product_id INTEGER REFERENCES products(id) ON DELETE RESTRICT,
    stock_quantity INTEGER NOT NULL CHECK (stock_quantity >= 0),
    last_restocked TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO categories (name, description) VALUES
('Electronics', 'Devices like phones, laptops, and tablets'),
('Furniture', 'Home and office furniture'),
('Clothing', 'Men and women apparel');


INSERT INTO products (name, description, price, category_id) VALUES
('Smartphone', 'Latest model with 128GB storage', 699.99, 1),
('Office Chair', 'Ergonomic chair with lumbar support', 149.99, 2),
('T-Shirt', 'Cotton t-shirt, size M', 19.99, 3);


INSERT INTO stores (name, location, phone, email) VALUES
('Store A', '123 Main St, New York', '123-456-7890', 'storea@example.com'),
('Store B', '456 Elm St, San Francisco', '987-654-3210', 'storeb@example.com');

INSERT INTO stock (store_id, product_id, stock_quantity, last_restocked) VALUES
(1, 1, 50, CURRENT_TIMESTAMP), -- 50 smartphones in Store A
(1, 2, 30, CURRENT_TIMESTAMP), -- 30 office chairs in Store A
(2, 3, 100, CURRENT_TIMESTAMP), -- 100 t-shirts in Store B
(2, 1, 25, CURRENT_TIMESTAMP); -- 25 smartphones in Store B
`;

async function main() {
  const client = new Client({
    connectionString: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_DB}`,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
