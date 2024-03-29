export async function fetchTodos() {
  const url = 'https://jsonplaceholder.typicode.com/todos';

  const response = await fetch(url);
  const todos = await response.json();
  return todos.slice(0, 10);
}