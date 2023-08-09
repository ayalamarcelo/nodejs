let tareas = [];

function mostrarTareas() {
  console.log(tareas);
}

function agregarTarea(nuevaTarea) {
  tareas.push(nuevaTarea);
}

function vaciarLista() {
  tareas = [];
}

function eliminarUltimaTarea() {
  // eliminar la ultima tarea
}

function eliminarTareaEspecifica() {
  // eliminar una tarea especifica usando el indice
}


module.exports = { mostrarTareas, agregarTarea, vaciarLista };
