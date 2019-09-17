/**
 * @param {object} todo 
 * @param {number} todo.id 
 * @param {string} todo.title 
 * @param {boolean} todo.completed 
 * @param {HTMLElement} container 
 */
function addTodo(todo, container) {
  const rowElt = document.createElement('div');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;
  rowElt.appendChild(checkbox);

  const span = document.createElement('span');
  span.innerText = todo.title;
  rowElt.appendChild(span);

  const button = document.createElement('button');
  button.className = 'todo-remove';
  button.innerText = '-';
  rowElt.appendChild(button);

  prependChild(container, rowElt);
}