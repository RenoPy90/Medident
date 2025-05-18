const db = require('../config/db'); // ✅ Conexión a la base de datos
const bcrypt = require('bcrypt');

exports.iniciarSesion = (req, res) => {
  const { email, password } = req.body;

  // ✅ Consulta en la tabla de usuarios usando el email recibido
  const query = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).send('Usuario no encontrado');
    }

    const usuario = results[0];

    // ✅ Verifica la contraseña usando bcrypt y la almacenada en la base
    const match = await bcrypt.compare(password, usuario.password);
    if (!match) {
      return res.status(401).send('Contraseña incorrecta');
    }

    // ✅ Si todo está bien, redirige a la página principal
    res.redirect('/html/principal.html');
  });
};
