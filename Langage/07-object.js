// En JS l'objet est un système clé/valeur
// Le concept le plus proche de l'objet JS en :
// - PHP : tableau associatif
// - Python/Ruby : dictionnary

console.log(Math.sum); // undefined

// Ajouter des clés/valeurs (étendre un objet)
Math.sum = (a, b) => a + b;
console.log(Math.sum('1', '2')); // '12'

// Modifier des clés/valeurs
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2')); // 3

// Supprimer des clés/valeurs
delete Math.sum;
console.log(Math.sum); // undefined

// ATTENTION DE NE PAS MODIFIER LES OBJETS NORMES

// 2 opérateurs pour accéder aux clés
console.log(Math.PI); // 3.141592653589793
console.log(Math['PI']); // 3.141592653589793
const property = 'PI';
console.log(Math[property]); // 3.141592653589793

// Object Literal
const coords = {
  x: 1,
  y: 2,
};

console.log(coords.x); // 1
console.log(coords.y); // 2

coords.z = 3;

for (const key in coords) {
  if (coords.hasOwnProperty(key)) {
    const value = coords[key];
    console.log(key, value);
  }
}

// Factory Function
function coordsFactory(x = 0, y = 0, z = 0) {
  return { 
    x,
    y,
    z,
    infos() { 
      return 'x : ' + this.x;
    },
  };
}

const coords1 = coordsFactory();
console.log(coords1.infos()); // x: 0

const coords2 = coordsFactory(1, 2, 3);
console.log(coords2.infos()); // x: 1

console.log(coords1.infos === coords2.infos); // false (compare les références)

// Constructor Function

function Coords(x = 0, y = 0, z = 0) {
  this.x = x;
  this.y = y;
  this.z = z;
}

Coords.prototype.infos = function() { 
  return 'x : ' + this.x;
};

// class Coords {
//   constructor(x = 0, y = 0, z = 0) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
//   }
//   infos() { 
//     return 'x : ' + this.x;
//   };
// }

console.log(typeof Coords); // function

const coordsA = new Coords();
const coordsB = new Coords(1, 2, 3);

console.log(typeof coordsA); // object
console.log(coordsB.x); // 1

console.log(coordsB.infos()); // x: 1

console.log(coordsA.infos === coordsB.infos); // true (compare les références)


// Test pour détecter si la clé existe
console.log(coordsA.hasOwnProperty('x')); // true
console.log(coordsA.hasOwnProperty('infos')); // false


for (const key in coordsA) {
  // permet de ne pas boucler sur le prototype
  if (coordsA.hasOwnProperty(key)) {
    const value = coordsA[key];
    console.log(key, value);
  }
}