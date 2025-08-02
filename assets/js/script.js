let tareas = [
    { descripcion: 'Estudiar JavaScript', completada: false},
    { descripcion: 'Hacer ejercicio', completada: true},
    { descripcion: 'Leer un libro', completada: true},

];



function renderizarTareas() {
  const lista = document.getElementById('listaTareas');
  lista.innerHTML = '';

  tareas.forEach((tarea, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    li.innerHTML = `
      <div class= "${tarea.completada ? 'completada' : ''}">
        <input type="checkbox" class="form-check-input me-2"
        ${tarea.completada ? 'checked' : ''}
        onchange="cambiarEstado(${index})">
        ${tarea.descripcion}
       </div>
       
       <button class="btn btn-sm btn-outline-primary" onclick="eliminarTarea(${index})">Eliminar</button>

      
    `;

    lista.appendChild(li)
    
  }) ;

  actualizarContadores();

}

function agregarTarea() {
    const input = document.getElementById('inputTarea');
    const descripcion = input.value.trim();
    
    if (descripcion !== '') {
        tareas.push({descripcion, completada: false});
        input.value = '';
        renderizarTareas()
    }
}

function eliminarTarea(index) {
    tareas.splice(index, 1);
    renderizarTareas();
}

function cambiarEstado(index) {
    tareas[index].completada = !tareas[index].completada;
    renderizarTareas();
}


function actualizarContadores() {
    document.getElementById('totalTareas').textContent = tareas.length;

    let completadas = 0;
    for (let tarea of tareas) {
        if (tarea.completada){
            completadas++;
        }
    }

    document.getElementById('tareasCompletadas').textContent = completadas;
}


renderizarTareas();