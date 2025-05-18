const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // o poné tu clave si tenés
  database: 'medident_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Base de datos conectada');
});

module.exports = db;
