const productModel = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productModel.getProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur Interne du Serveur' });
  }
};

exports.getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productModel.getProductById(productId);

    if (!product) {
      res.status(404).json({ error: 'Produit non trouvé' });
    } else {
      res.json(product);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur Interne du Serveur' });
  }
};

exports.createProduct = async (req, res) => {
  // Vérifiez l'authentification ici et assurez-vous que l'utilisateur est admin
  const { name, price } = req.body;

  try {
    await productModel.createProduct(name, price);
    res.json({ message: 'Produit créé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur Interne du Serveur' });
  }
};

exports.updateProduct = async (req, res) => {
  // Vérifiez l'authentification ici et assurez-vous que l'utilisateur est admin
  const productId = req.params.id;
  const { name, price } = req.body;

  try {
    await productModel.updateProduct(productId, name, price);
    res.json({ message: 'Produit mis à jour avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur Interne du Serveur' });
  }
};

exports.deleteProduct = async (req, res) => {
  // Vérifiez l'authentification ici et assurez-vous que l'utilisateur est admin
  const productId = req.params.id;

  try {
    await productModel.deleteProduct(productId);
    res.json({ message: 'Produit supprimé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur Interne du Serveur' });
  }
};
