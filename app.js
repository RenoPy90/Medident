const express = require('express');
const path = require('path');
const cors = require('cors');

// Inicializamos Express
const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servimos carpetas públicas
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/imagenes', express.static(path.join(__dirname, 'imagenes')));
app.use('/html', express.static(path.join(__dirname, 'html')));

// Rutas para login y registro
const loginRoutes = require('./routes/login');
const registroRoutes = require('./routes/registro');
app.use('/login', loginRoutes);
app.use('/registro', registroRoutes);

// Redirige a login por defecto
app.get('/', (req, res) => {
  res.redirect('/html/login.html');
});

// Levanta el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
