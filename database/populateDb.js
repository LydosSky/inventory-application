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
    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS inventory (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    warehouse_location VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity >= 0),
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO categories (name, description) VALUES
('Electronics', 'Devices like phones, laptops, and tablets'),
('Furniture', 'Home and office furniture'),
('Clothing', 'Men and women apparel'),
('Food', 'Perishable and non-perishable food items');


INSERT INTO products (name, description, price, category_id) VALUES
('Smartphone', 'Latest model with 128GB storage', 699.99, 1),
('Laptop', '15-inch screen, 16GB RAM', 1199.99, 1),
('Office Chair', 'Ergonomic chair with lumbar support', 149.99, 2),
('Dining Table', 'Wooden table for 6 people', 299.99, 2),
('T-Shirt', 'Cotton t-shirt, size M', 19.99, 3),
('Jeans', 'Blue denim, size 32', 39.99, 3),
('Cereal Box', '500g box of whole-grain cereal', 4.99, 4),
('Milk', '1 liter of organic milk', 2.49, 4);

INSERT INTO inventory (product_id, warehouse_location, quantity, last_updated) VALUES
(1, 'Warehouse A', 50, CURRENT_TIMESTAMP),
(2, 'Warehouse A', 30, CURRENT_TIMESTAMP),
(3, 'Warehouse B', 20, CURRENT_TIMESTAMP),
(4, 'Warehouse B', 10, CURRENT_TIMESTAMP),
(5, 'Warehouse C', 100, CURRENT_TIMESTAMP),
(6, 'Warehouse C', 80, CURRENT_TIMESTAMP),
(7, 'Warehouse A', 200, CURRENT_TIMESTAMP),
(8, 'Warehouse B', 150, CURRENT_TIMESTAMP);
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
