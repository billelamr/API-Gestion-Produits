const jwt = require('jsonwebtoken');
const db = require('../db'); 

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Affiche le contenu du corps de la requête dans la console
  console.log(req.body);

  try {
    const user = await db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
    console.log('Résultat de la requête SQL:', user);
    console.log('Nombre d\'utilisateurs trouvés:', user.length);

    if (user.length === 0) {
      res.status(401).json({ error: 'Identifiants invalides' });
    } else {
      const token = jwt.sign({ userId: user[0].id }, 'secret', { expiresIn: '1h' });
      console.log('Token créé:', token);
      res.json({ token });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur Interne du Serveur' });
  }
};

