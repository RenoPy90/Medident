document.getElementById("registroForm").addEventListener("submit", function (e) {
    const nombre = document.querySelector('input[name="nombre"]').value;
    const correo = document.querySelector('input[name="correo"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const confirmar = document.querySelector('input[name="confirmar"]').value;
  
    if (!nombre || !correo || !password || !confirmar) {
      e.preventDefault();
      alert("Por favor completa todos los campos.");
      return;
    }
  
    if (password !== confirmar) {
      e.preventDefault();
      alert("Las contraseñas no coinciden.");
      return;
    }
  });
  