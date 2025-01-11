// Establecer la fecha de destino (puedes ajustarla según tus necesidades)
const fechaDestino = new Date("2025-02-21T23:59:59");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaDestino - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

// Actualizar cada segundo
setInterval(actualizarContador, 1000);

// Actualizar al cargar la página
actualizarContador();
