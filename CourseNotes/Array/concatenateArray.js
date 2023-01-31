const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2); //concat this two array's
console.log(a3); //[ 1, 2, 3, 4, 5, 6 ]

a4 = a1.concat(a2, [7, 8, 9], 'Luiz'); // concat all this elements in a3
console.log(a4); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Luiz']

//using ... rest -> spread
const a5 = [...a1, ...a2, ...[7, 8, 9], [7, 8, 9]]; //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 7, 8, 9 ] ]
console.log(a5);
