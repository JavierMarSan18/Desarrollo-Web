function addTask(caller) {
    let buttonsContainer = caller.parentNode;
    let column = buttonsContainer.parentNode;
    let tasksContainer = column.querySelector('.tasks-container');
    let frames = tasksContainer.querySelectorAll('div.frame');
    var emptyFrame = null;

    //Recorre los frames y valida si existe uno vacio
    for (var i = 0; i < frames.length; i++) {
        var frame = frames[i];
        console.log(frame);
        if (!frame.hasChildNodes()) {
            emptyFrame = frame;
            break; // Detenemos el bucle tan pronto como encontramos un frame vacío
        }
    }

    let newTask = createTask();

    if(emptyFrame !== null){
        emptyFrame.appendChild(newTask);
    }else{
        let newFrame = createFrame();
        newFrame.appendChild(newTask)
        tasksContainer.appendChild(newFrame);
    }
}

function createTask() {
    let task = document.createElement('textarea');
    task.className = 'task';
    task.draggable = true;
    task.addEventListener('dragstart', drag);
    task.id = 'task' +  taskCount.incrementAndGet();
    return task;
}

function createFrame() {
    let frame = document.createElement('div');
    frame.className = 'frame';
    frame.addEventListener('drop', drop);
    frame.addEventListener('dragover', allowDrop);
    return frame;
}