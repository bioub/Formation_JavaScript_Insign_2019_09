import "core-js/stable";
import "regenerator-runtime/runtime";

import { addTodo } from "./todos";
import { remove } from "./dom";
import { fetchTodos } from "./api";

/** @type {HTMLFormElement} */
const formElt = document.querySelector('.todo-form');

/** @type {HTMLInputElement} */
const inputElt = document.querySelector('.todo-input');

/** @type {HTMLDivElement} */
const listElt = document.querySelector('.todo-list');

/** @type {HTMLInputElement} */
const toggleElt = document.querySelector('.todo-toggle');

formElt.addEventListener('submit', (event) => {
  event.preventDefault();

  const todo = {
    id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    title: inputElt.value,
    completed: false,
  };

  addTodo(todo, listElt);
});

listElt.addEventListener('click', (event) => {
  if (event.target.classList.contains('todo-remove')) {
    remove(event.target.parentNode);
  }
});

toggleElt.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxes = listElt.querySelectorAll('.todo-completed');

  for (const checkbox of checkboxes) {
    checkbox.checked = toggleElt.checked;
  }
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