    window.onload = () => {
        // let columnsContainer = document.getElementById('columns-container-id');
        let columnsCount = 3;
        let framesCount = 3;
        // setInitialColumns(columnsCount, framesCount);
    }

    // function setInitialColumns(columnsCount, framesCount) {
    //     let addColumnContainer = document.getElementById('addColumnContainer');
    //     for (let i = 0; i < columnsCount; i++) {
    //         addColumnBefore(addColumnContainer, framesCount); 
    //     }
    // }

    // function addColumnAfter(pointedColumn) {
    //     let parentContainer = pointedColumn.parentNode;
    //     let newColumn = createColumn();
    //     parentContainer.insertAfter(newColumn, pointedColumn);
    // }

    // function addColumnBefore(pointedColumn, framesCount) {
    //     let parentContainer = pointedColumn.parentNode;
    //     let newColumn = createColumn(framesCount);
    //     parentContainer.insertBefore(newColumn, pointedColumn);
    // }

    // function createColumn(framesCount) {
    //     let column = document.createElement('div');
    //     column.className = 'column';
    //     let tasksContainer = createTasksContainer(framesCount);
        
    //     let buttonsContainer = createButtonsContainer();
    //     let newTaskButton = createNewTaskButton(column);

    //     column.appendChild(tasksContainer);
    //     column.appendChild(buttonsContainer);
    //     return column;
    // }

    // function createTasksContainer(framesCount) {
    //     let tasksContainer = document.createElement('div');
    //     tasksContainer.className = 'tasksContainer';
    //     tasksContainer.id = 'tasksContainer' +  Math.random()*100;
        
    //     for (let i = 0; i < framesCount; i++) {
    //         let frame = createFrame();
    //         tasksContainer.appendChild(frame);
    //     }
        
    //     return tasksContainer;
    // }

    // function createFrame() {
    //     let frame = document.createElement('div');
    //     frame.className = 'frame';
    //     // Agregar el evento "drop" al elemento div principal
    //     frame.ondrop = function(event) {
    //         drop(event);
    //     };
    //     // Agregar el evento "dragover" al elemento div principal
    //     frame.ondragover = function(event) {
    //         allowDrop(event);
    //     };
    //     return frame;
    // }
    
    // function createTask() {
        
    // }

    // function createButtonsContainer() {
    //     let buttonsContainer = document.createElement('div');
    //     buttonsContainer.className = 'buttons-container';
    //     return buttonsContainer;
    // }

    // function createNewTaskButton(column) {
    //     console.log('Creating new task button');
    //     let button = document.createElement('button');
    //     button.className = 'button';
    //     button.textContent = '+'
    //     return button;
    // }

    function addColumn(columnsContainer, columnCount) {
        console.log("SET COLUMNS");
        for (let i = 0; i < columnCount; i++) {
            addColumn(columnsContainer);
        }
    }
    
    function addColumn(columnContainer){
        let column = document.createElement("div");
        column.className = "column";
        // column.id = "column" + Math.random()*100;

        addTasksContainer(column);
        addButtonsContainer(column);

        let buttonAdd = document.createElement("button");
        columnContainer.appendChild(column);
    }

    function addTasksContainer(column) {
        let tasksContainer = document.createElement('div');
        column.appendChild(tasksContainer);
        return tasksContainer;
    }

    function addNewTaskButton(tasksContainer) {
        let button = document.createElement('button');
        button.className = 'button';
    }

    function addButtonsContainer(column) {
        let buttonsContainer = document.createElement('div');
        column.appendChild(buttonsContainer);
        return buttonsContainer;
    }
    
    function addTask(column) {
    
        // Crear el elemento div principal con la clase "socket"
        var frame = document.createElement("div");
        frame.className = "frame";

        // Agregar el evento "drop" al elemento div principal
        frame.ondrop = function(event) {
            drop(event);
        };

        // Agregar el evento "dragover" al elemento div principal
        frame.ondragover = function(event) {
            allowDrop(event);
        };

        // Crear el elemento div interno con la clase "task" y atributo "draggable"
        var task = document.createElement("textarea");
        task.className = "task";
        task.draggable = true;
        task.id = "task" + Math.random()*100;

        // Agregar el evento "dragstart" al elemento div interno
        task.ondragstart = function(event) {
            drag(event);
        };

        // Agregar el elemento div interno al elemento div principal
        frame.appendChild(task);
        column.appendChild(frame);
    }

    /////////////// Metodos para mover las tareas////////////////
    function allowDrop(ev) {
        ev.preventDefault();
    }
    
    function drag(ev) {
        ev.dataTransfer.setData("task", ev.target.id);
    }
    
    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("task");
        ev.target.appendChild(document.getElementById(data));
    }