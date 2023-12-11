const db = require('../db');

// Obtenez tous les produits
async function getProducts() {
  const products = await db.query('SELECT * FROM products');
  return products;
}

// Obtenez un produit par ID
async function getProductById(productId) {
  const product = await db.query('SELECT * FROM products WHERE id = ?', [productId]);
  return product[0]; // Supposant que l'ID du produit est unique
}

// Créer un nouveau produit
async function createProduct(name, price, description) {
  await db.query('INSERT INTO products (name, price, description) VALUES (?, ?, ?)', [name, price, description]);
}

// Mettre à jour les informations d'un produit
async function updateProduct(productId, name, price, description) {
  await db.query('UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?', [name, price, description, productId]);
}

// Supprimer un produit par ID
async function deleteProduct(productId) {
  await db.query('DELETE FROM products WHERE id = ?', [productId]);
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
