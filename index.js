const tareas = require('./tasks');
tareas.mostrarTareas();
tareas.agregarTarea({description: 'pasear al perro'});
tareas.mostrarTareas();
tareas.vaciarLista();
tareas.mostrarTareas();
tareas.agregarTarea({description: 'hacer las compras'});
tareas.agregarTarea({description: 'practicar con node'});
tareas.agregarTarea({description: 'eliminar una tarea especifica' , done: true});
tareas.agregarTarea({description: 'eliminar una tarea especifica', done: false});
tareas.mostrarTareas();
tareas.eliminarTareaEspecifica(2);
tareas.mostrarTareas();

