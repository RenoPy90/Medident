document.getElementById("loginForm").addEventListener("submit", function (e) {
  const correo = document.querySelector('input[name="correo"]').value;
  const password = document.querySelector('input[name="password"]').value;

  if (!correo || !password) {
    e.preventDefault();
    alert("Por favor completa todos los campos.");
  }
});