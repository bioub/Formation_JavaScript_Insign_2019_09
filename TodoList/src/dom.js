/**
 * @param {HTMLElement} container 
 * @param {HTMLElement} element 
 */
function prependChild(container, element) {
  if (!container.childElementCount) {
    container.appendChild(element);
  } else {
    container.insertBefore(element, container.firstElementChild);
  }
}