├── /html               --> Contiene las vistas HTML (login, registro, etc.)
│   └── login.html
│
├── /css                --> Estilos CSS usados en las páginas
│   └── login.css
│
├── /js                 --> Lógica en JavaScript para validación del lado cliente
│   └── login.js
│
├── /img                --> Imágenes del sitio web (logo, iconos, etc.)
│   └── logo.png
│
├── /routes             --> Define las rutas que recibe el servidor (por ejemplo, /login)
│   └── login.js
│
├── /controllers        --> Contiene la lógica del backend (controladores)
│   └── loginController.js
│
├── /config             --> Archivos de configuración como la conexión a la base de datos
│   └── db.js
│
├── app.js              --> Archivo principal del servidor Express (punto de entrada)
└── package.json        --> Define las dependencias del proyecto y scripts

Detalles de funcionamiento:
Frontend (Cliente):

HTML: todas las interfaces están en la carpeta /html.

CSS: los estilos personalizados para cada vista están en /css.

JS: validaciones de formularios o interacciones en /js.

Estas vistas se sirven como contenido estático desde app.js.

Backend (Servidor Node.js):

Usa Express para manejar peticiones HTTP.

Las rutas se definen en /routes, y cada una llama a un controlador en /controllers.

La conexión a la base de datos MySQL se define en /config/db.js.


# MediDent - Sistema de Gestión Odontológica
Sistema web en desarrollo para registro, agenda de turnos y gestión de citas en una clínica odontológica.

---

## 🧱 Estructura de Carpetas

/html
  → Contiene todas las vistas HTML del sistema:
     - login.html
     - registro.html
     - calendario.html
     - agendar_cita.html
     - doctores.html
     - visualizar_cita.html
     - opciones.html

/css
  → Estilos CSS personalizados para cada vista.

/js
  → Lógica en JavaScript para validaciones y simulaciones en frontend.

/imagenes
  → Recursos visuales: logo, íconos de opciones, etc.

/routes
  → Rutas que gestionan los formularios (login y registro).

/controllers
  → Lógica backend de las rutas: validaciones y simulaciones de base de datos.

/config
  → Archivo de conexión a la base de datos MySQL (a ser implementado por backend).

app.js
  → Servidor principal de Express, configura rutas y archivos estáticos.

package.json
  → Define dependencias del proyecto Node.js.

---

## 🔐 Flujo del Usuario (Cliente)

1. Inicia sesión desde `login.html` (correo + contraseña).
2. Es redirigido a `opciones.html`.
3. Desde allí puede:
   - Ver calendario (`calendario.html`)
   - Agendar cita (`agendar_cita.html`)
   - Ver profesionales (`doctores.html`)
   - Ver citas agendadas (`visualizar_cita.html`)

---

## 📦 Funciones Simuladas por Ahora

- Días ocupados del calendario se almacenan en `localStorage["diasOcupados"]`.
- Las citas agendadas se simulan con `localStorage["citasSimuladas"]`.
- Toda la lógica futura será conectada a la base de datos MySQL.

---

## 🧪 Cómo Ejecutar el Proyecto

1. Instalar dependencias:
   npm install

2. Ejecutar servidor local:
   node app.js

3. Acceder desde navegador:
   http://localhost:3000

---

## 🛠 A implementar por backend

- Validación real en base de datos para login y registro
- Guardado y consulta de citas
- Control de sesiones y roles (cliente / funcionario)
- Gestión de disponibilidad por profesional

---

Proyecto diseñado por: Gustavo
Frontend completo y funcional.
Listo para conexión con backend y base de datos.
