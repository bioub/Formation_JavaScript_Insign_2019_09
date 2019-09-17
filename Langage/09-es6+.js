// REST Param : Conversion liste de valeurs -> tableau
//       sum1(1, 2, 3, 4, 5)
function sum1(a, b, ...nbs) {
  let result = a + b;

  nbs.forEach((nb) => result += nb);

  return result;
}

console.log(sum1(1, 2, 3, 4, 5)); // 10

// SPREAD Operator : Conversion tableau -> liste de valeurs
//           [1, 2, 3, 4]
function sum2(a, b, c, d) {
  return a + b + c + d;
}

const nbs = [1, 2, 3, 4];
console.log(sum2(...nbs));
//            [1, 2, 3, 4]
const clone = [...nbs    ];

// const un = nbs[0];
// const deux = nbs[1];
//    [1 , 2       , 3, 4]
const [un, deux = 2, ...autres] = nbs;
console.log(un); // 1