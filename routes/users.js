const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Mettez à jour le chemin d'importation

// Obtenez tous les utilisateurs (accessible à l'admin)
router.get('/', userController.getAllUsers);

// Obtenez un utilisateur par ID (accessible à l'admin ou à l'utilisateur lui-même)
router.get('/:id', userController.getUserById);

// Créez un nouvel utilisateur (accessible à tous)
router.post('/', userController.createUser);

// Mettez à jour un utilisateur par ID (accessible à l'admin ou à l'utilisateur lui-même)
router.put('/:id', userController.updateUser);

// Supprimez un utilisateur par ID (accessible à l'admin ou à l'utilisateur lui-même)
router.delete('/:id', userController.deleteUser);

module.exports = router;
