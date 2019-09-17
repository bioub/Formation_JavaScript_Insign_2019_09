/** @type {HTMLFormElement} */
const formElt = document.querySelector('.todo-form');

/** @type {HTMLInputElement} */
const inputElt = document.querySelector('.todo-input');

/** @type {HTMLDivElement} */
const listElt = document.querySelector('.todo-list');

formElt.addEventListener('submit', (event) => {
  event.preventDefault();

  const todo = {
    id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    title: inputElt.value,
    completed: false,
  };

  addTodo(todo, listElt);
});

(async () => {
  const todos = await fetchTodos();

  for (const todo of todos) {
    addTodo(todo, listElt);
  }
})();

/* Exercice

Au clic d'un bouton moins supprimer la todo
removeChild
event.target
parentNode

Au clic de la checkbox (.todo-toggle) tout cocher/décocher
querySelectorAll
Array.from
event.target
*/