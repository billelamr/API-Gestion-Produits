// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/login', authController.login);

// Routes nécessitant une authentification
router.get('/profile', authMiddleware, (req, res) => {
  // Vous pouvez accéder aux informations de l'utilisateur à partir de req.userId
  const userId = req.userId;
  res.json({ message: `Profil de l'utilisateur avec l'ID ${userId}` });
});

router.put('/change-password', authMiddleware, (req, res) => {
  // Vous pouvez accéder aux informations de l'utilisateur à partir de req.userId
  const userId = req.userId;
  // Implémentez le changement de mot de passe ici
  res.json({ message: `Mot de passe changé pour l'utilisateur avec l'ID ${userId}` });
});

module.exports = router;
