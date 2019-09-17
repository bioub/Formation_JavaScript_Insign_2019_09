function createButton(value) {
  const btn = document.createElement('button');
  btn.innerText = value;
  document.body.appendChild(btn);

  btn.addEventListener('click', (event) => {
    console.log(value);
    event.target.innerText += '.';
  });
}

createButton('Bouton 1');
createButton('Bouton 2');
createButton('Bouton 3');