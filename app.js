function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo(){
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id
    });

    id++;

    newToDoText.value - '';

    renderTheUI();
  }

  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';


    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');

      const deleteBtn = document.createElement('button');
      deleteBtn.type = "deleteBtn";
      var t = document.createTextNode("Delete")

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);
      deleteBtn.appendChild(t);
      //return id; //

      newLi.addEventListener('click', event =>{
        event.preventDefault();

        deleteToDo(toDo.id);

        renderTheUI();
      });

    });
  }

  function deleteToDo(id){
      //const updateToDoList = toDos.filter(todo => todo.id <> id);
      toDos = toDos.filter(item => item.id !== id);
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
