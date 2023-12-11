const db = require('../db');

// Obtenez tous les utilisateurs
async function getUsers() {
  const users = await db.query('SELECT * FROM users');
  return users;
}

// Obtenez un utilisateur par ID
async function getUserById(userId) {
  const user = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
  return user[0]; // Supposant que l'ID de l'utilisateur est unique
}

// Créer un nouvel utilisateur
async function createUser(name, email, password, role) {
  await db.query('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)', [name, email, password, role]);
}

// Mettre à jour les informations d'un utilisateur
async function updateUser(userId, name, email, password, role) {
  await db.query('UPDATE users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?', [name, email, password, role, userId]);
}

// Supprimer un utilisateur par ID
async function deleteUser(userId) {
  await db.query('DELETE FROM users WHERE id = ?', [userId]);
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
