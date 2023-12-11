const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Assurez-vous d'importer le bon contrôleur

// Obtenez tous les produits
router.get('/', productController.getAllProducts);

// Obtenez un produit par ID
router.get('/:id', productController.getProductById);

// Créez un nouveau produit 
router.post('/', productController.createProduct);

// Mettez à jour un produit par ID 
router.put('/:id', productController.updateProduct);

// Supprimez un produit par ID 
router.delete('/:id', productController.deleteProduct);

module.exports = router;
