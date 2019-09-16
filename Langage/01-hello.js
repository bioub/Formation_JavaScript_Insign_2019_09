/**
 * Ma fonction hello
 * @param {string} name Le prénom
 * @returns {string} Le message de bonjour
 */
function hello(name) {
  return 'Hello ' + name + '!';
}

const firstNames = ['Jean', 'Eric'];

firstNames.forEach((firstName) => {
  console.log(hello(firstName));
});

for (let i = 0; i < firstNames.length; i++) {
  const firstName = firstNames[i];
  console.log(hello(firstName));
}

for (const firstName of firstNames) {
  console.log(hello(123));
}