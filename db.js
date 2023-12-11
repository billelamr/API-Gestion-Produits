const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'pass',
  database: 'BDD',
  connectionLimit: 200,
});

pool.getConnection()
  .then(connection => {
    console.log('Connecté à la base de données MariaDB');
    connection.release();
  })
  .catch(err => {
    console.error('Erreur de connexion à la base de données MariaDB:', err);
  });

module.exports = pool;
