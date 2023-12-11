// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Récupérer le token du header de la requête
  const token = req.header('Authorization');

  // Vérifier si le token existe
  if (!token) {
    return res.status(401).json({ error: 'Token manquant, accès non autorisé' });
  }

  try {
    // Vérifier et décoder le token avec la même clé
    const decodedToken = jwt.verify(token, 'secret');

    // Ajouter les informations de l'utilisateur au request pour un accès ultérieur
    req.userId = decodedToken.userId;

    // Poursuivre vers la prochaine étape du middleware
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Token invalide, accès non autorisé' });
  }
};
