// portée globale
function externe(msg) {
  // portée de closure
  function interne() {
    // portée locale
    console.log(msg);
  }
  return interne;
}

const hello = externe('Hello');
hello();

// Dans 1sec 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// Dans 1sec 0 1 2
for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}

// Dans 1sec 0 1 2
for (let i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}