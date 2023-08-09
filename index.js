const tareas = require('./tasks');
tareas.mostrarTareas();
tareas.agregarTarea({description: 'pasear al perro'});
tareas.mostrarTareas();
tareas.vaciarLista();
tareas.mostrarTareas();
tareas.agregarTarea({description: 'hacer las compras'});
tareas.agregarTarea({description: 'practicar con node'});
tareas.agregarTarea({description: 'eliminar una tarea especifica'});
tareas.agregarTarea({description: 'eliminar una tarea especifica'});
tareas.mostrarTareas();
tareas.eliminarTareaEspecifica();
tareas.mostrarTareas();


