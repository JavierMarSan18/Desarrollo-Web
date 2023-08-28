
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("task", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("task");
    let target = ev.target;

    if (target.classList.contains('frame') && target.childElementCount < 1) {
      target.appendChild(document.getElementById(data)); 
    }
  }