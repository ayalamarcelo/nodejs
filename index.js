const tareas = require('./tasks');
tareas.mostrarTareas();
tareas.agregarTarea({description: 'pasear al perro'});
tareas.mostrarTareas();
tareas.vaciarLista();
tareas.mostrarTareas();
tareas.agregarTarea({description: 'hacer las compras'});