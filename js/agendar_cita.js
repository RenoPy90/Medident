document.addEventListener("DOMContentLoaded", function () {
    const selectFecha = document.getElementById("fecha");
    const form = document.getElementById("formCita");
  
    // 1. Traer los días ocupados del localStorage
    const ocupados = JSON.parse(localStorage.getItem("diasOcupados")) || [];
  
    // 2. Obtener los días del mes actual
    const hoy = new Date();
    const anio = hoy.getFullYear();
    const mes = hoy.getMonth(); // 0 = enero, 1 = febrero...
    const diasEnMes = new Date(anio, mes + 1, 0).getDate();
  
    // 3. Llenar el select con los días disponibles
    for (let dia = 1; dia <= diasEnMes; dia++) {
      if (!ocupados.includes(dia)) {
        const opcion = document.createElement("option");
        opcion.value = dia;
        opcion.textContent = `${dia}/${mes + 1}/${anio}`;
        selectFecha.appendChild(opcion);
      }
    }
  
    // 4. Al enviar el formulario
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const fechaSeleccionada = parseInt(selectFecha.value);
  
      // Si ya está ocupada, mostrar error (por seguridad)
      if (ocupados.includes(fechaSeleccionada)) {
        alert("Esa fecha ya fue agendada.");
        return;
      }
  
      // Agregamos la fecha al array de ocupados y lo actualizamos en localStorage
      ocupados.push(fechaSeleccionada);
      localStorage.setItem("diasOcupados", JSON.stringify(ocupados));
  
      alert("¡Cita agendada con éxito!");
  
      // Redireccionar o recargar para ver efecto (puede llevar al calendario si querés)
      setTimeout(() => {
        window.location.href = "../html/calendario.html";
      }, 1500);
    });
  });
  