const userModel = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur Interne du Serveur' });
  }
};

exports.getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userModel.getUserById(userId);

    if (!user) {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur Interne du Serveur' });
  }
};

exports.createUser = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    await userModel.createUser(username, password, role);
    res.json({ message: 'Utilisateur créé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur Interne du Serveur' });
  }
};

exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const { username, password, role } = req.body;
  // Vérifier l'authentification ici et s'assurer que l'utilisateur est admin ou l'utilisateur lui-même

  try {
    await userModel.updateUser(userId, username, password, role);
    res.json({ message: 'Utilisateur mis à jour avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur Interne du Serveur' });
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;
  // Vérifier l'authentification ici et s'assurer que l'utilisateur est admin ou l'utilisateur lui-même

  try {
    await userModel.deleteUser(userId);
    res.json({ message: 'Utilisateur supprimé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur Interne du Serveur' });
  }
};
