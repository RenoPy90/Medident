const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.registrarUsuario = async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
    db.query(query, [nombre, email, hashedPassword], (err, result) => {
      if (err) return res.status(500).send('Error al registrar');

      res.redirect('/html/login.html');
    });
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
};
