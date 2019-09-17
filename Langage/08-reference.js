let nb1 = 1;
let nb2 = nb1; // duplique la valeur
nb2 = 2;

console.log(nb1); // 1

let o1 = { nb: 1 };
let o2 = o1; // duplique la référence
o2.nb = 2;

console.log(o1.nb); // 2