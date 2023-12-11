const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const db = require('./db');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Routes publiques
app.use('/auth', authRoutes);

// Middleware d'authentification pour les routes suivantes
app.use(authMiddleware);

// Routes protégées
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use(express.json());


app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
