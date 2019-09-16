const firstNames = ['Jean', 'Eric', 'Romain'];

// Algo :
// Afficher en majuscule tous les prénoms de 4 lettres

// Style de programmation (Paradigme) : impérative
for (let i = 0; i < firstNames.length; i++) {
  const firstName = firstNames[i];
  if (firstName.length === 4) {
    const firstNameUpper = firstName.toUpperCase();
    console.log(firstNameUpper);
  }
}

// Paradigme fonctionnel (ES5+)
// (remplacer les boucles et les ifs par des fonctions)
firstNames.filter((firstName) => firstName.length === 4)
          .map((firstName) => firstName.toUpperCase())
          .forEach((firstNameUpper) => console.log(firstNameUpper));

// call stack
// ^
// |                         lg   lg
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach
// +------------------------------------------> temps
//                           JEAN ERIC

