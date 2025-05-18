document.addEventListener("DOMContentLoaded", function () {
    const calendario = document.querySelector(".calendario");
  
    // Obtenemos el mes y año actual
    const hoy = new Date();
    const anio = hoy.getFullYear();
    const mes = hoy.getMonth(); // 0 = Enero, 1 = Febrero...
  
    // Días simulados como ocupados (pueden venir de la BD más adelante)
    const diasOcupados = [5, 10, 14, 20, 25];
  
    // Obtenemos cuántos días tiene el mes actual
    const diasEnMes = new Date(anio, mes + 1, 0).getDate();
  
    // Obtenemos el día de la semana en que empieza el mes (0=domingo)
    const primerDiaSemana = new Date(anio, mes, 1).getDay();
  
    // Agregamos espacios vacíos antes del primer día (para alinear la grilla)
    for (let i = 0; i < primerDiaSemana; i++) {
      const espacio = document.createElement("div");
      espacio.classList.add("dia");
      espacio.style.visibility = "hidden"; // Invisible pero ocupa lugar
      calendario.appendChild(espacio);
    }
  
    // Generamos los días reales del mes
    for (let dia = 1; dia <= diasEnMes; dia++) {
      const celda = document.createElement("div");
      celda.classList.add("dia");
  
      // Si el día está en el array de ocupados, lo marcamos como tal
      if (diasOcupados.includes(dia)) {
        celda.classList.add("ocupado");
      } else {
        celda.classList.add("disponible");
      }
  
      celda.textContent = dia;
  
      // (Opcional) Evento al hacer clic sobre un día
      celda.addEventListener("click", () => {
        if (celda.classList.contains("ocupado")) {
          alert("Este día ya está ocupado.");
        } else {
          alert(`Has seleccionado el día ${dia} para agendar tu cita.`);
        }
      });
  
      calendario.appendChild(celda);
    }
  });
  