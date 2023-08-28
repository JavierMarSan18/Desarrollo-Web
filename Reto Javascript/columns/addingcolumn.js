function addColumn() {
    let framesCount = 4;
    addColumnWithFramesCount(framesCount);
}

function addColumnWithFramesCount(framesCount) {
    console.log('adding column: ' + framesCount);
    let columnContainer = document.getElementById('columns-container');
    let column = createColumn(framesCount);
    columnContainer.appendChild(column);
}

function createColumn(framesCount) {
    console.log('Creating column: ' + framesCount);
    let column = document.createElement('div');
    column.className = 'column'
    let taskContainer = createTasksContainer(framesCount);
    let buttonsContainer = createButtonsContainer();
    column.appendChild(taskContainer);
    column.appendChild(buttonsContainer);
    return column;
}

function createTasksContainer(framesCount) {
    let tasksContainer = document.createElement('div');
    tasksContainer.className = 'tasks-container';

    console.log('Creating tasks container: ' + framesCount);
    for (let i = 0; i < framesCount; i++) {
        let frame = createFrame();
        tasksContainer.appendChild(frame);
    }
    return tasksContainer;
}

function createButtonsContainer() {
    let buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';
    let addTaskButton = createAddTaskButton();
    buttonsContainer.appendChild(addTaskButton);
    return buttonsContainer;
}

function createAddTaskButton() {
    let addTaskButton = document.createElement('button');
    addTaskButton.className = 'task-button add-task-button';
    addTaskButton.onclick = function () {
        addTask(this);
    }
    addTaskButton.textContent = '+';
    return addTaskButton;
}