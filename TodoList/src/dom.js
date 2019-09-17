/**
 * @param {HTMLElement} container 
 * @param {HTMLElement} element 
 */
export function prependChild(container, element) {
  if (!container.childElementCount) {
    container.appendChild(element);
  } else {
    container.insertBefore(element, container.firstElementChild);
  }
}

/**
 * @param {HTMLElement} element 
 */
export function remove(element) {
  element.parentNode.removeChild(element);
}