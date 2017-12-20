function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
  //document.addEventListener('submit', event => {
    event.preventDefault();



    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // create a delete button
    let deleteBtn = document.createElement('button')

    // Create a text node
    let t = document.createTextNode("Delete");

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //attach the delete button to the ul
    deleteBtn.appendChild(t);
    newLi.appendChild(deleteBtn);

    // empty the input
    newToDoText.value = '';

    //add delete button to delete To Dos not needed
    newLi.addEventListener("click",  event => {
      event.preventDefault();

      //alert('Delete button clicked');

      newLi.parentNode.removeChild(newLi);

    });

  });
}

window.onload = function() {
  onReady();
};
