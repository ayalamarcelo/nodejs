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
  tareas.pop();
}

function eliminarTareaEspecifica(indice) {
  if (indice >= 0 && indice < tareas.length) {
    tareas.splice(indice, 1);
  }
}

module.exports = { mostrarTareas, agregarTarea, vaciarLista, eliminarUltimaTarea, eliminarTareaEspecifica };
