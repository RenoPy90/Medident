document.addEventListener("DOMContentLoaded", () => {
    const tabla = document.querySelector("#tablaCitas tbody");
  
    // Simulación de citas (pueden venir de la BD en el futuro)
    const citas = JSON.parse(localStorage.getItem("citasSimuladas")) || [
      { fecha: "3/5/2025", doctor: "Dra. Gómez", especialidad: "Ortodoncia" },
      { fecha: "9/5/2025", doctor: "Dr. Rodríguez", especialidad: "Odontología General" }
    ];
  
    citas.forEach(cita => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${cita.fecha}</td>
        <td>${cita.doctor}</td>
        <td>${cita.especialidad}</td>
      `;
      tabla.appendChild(fila);
    });
  });
  