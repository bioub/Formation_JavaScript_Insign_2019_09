const random = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require('readline');

class Jeu {
  constructor(options = {}) {
    const { min = 0, max = 100 } = options;
  
    this.rl = readline.createInterface(process.stdin, process.stdout);
    this.entierAlea = random.getIntInclusive(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez déjà joué : ${this.essais.join(' - ')} !!!`);
    }
  
    this.rl.question('Quel est le nombre ? ', (reponseSaisie) => {
      console.log('Vous avez saisi : ' + reponseSaisie);
  
      const entierSaisi = Number.parseInt(reponseSaisie);
  
      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }
  
      this.essais.push(entierSaisi);
  
      if (entierSaisi === this.entierAlea) {
        console.log('Gagné');
        return this.rl.close();
      }
  
      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
      }
  
      if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
      }
  
      this.jouer();
    });
  }
}

const game = new Jeu();
game.jouer();