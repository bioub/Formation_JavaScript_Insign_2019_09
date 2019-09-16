// portée globale
function externe(msg) {
  // portée de closure
  function interne() {
    // portée locale
    console.log(msg);
  }
  interne();
}

externe('Hello');