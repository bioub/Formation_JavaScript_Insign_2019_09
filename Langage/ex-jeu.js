function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);
const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];

function loop() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre ? ', (reponseSaisie) => {
    console.log('Vous avez saisi : ' + reponseSaisie);

    const entierSaisi = parseInt(reponseSaisie);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return loop();
    }

    essais.push(entierSaisi);

    if (entierAlea === entierSaisi) {
      console.log('Gagné');
      return rl.close();
    }

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
    }

    loop();
  });
}

loop();
