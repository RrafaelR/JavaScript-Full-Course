//              -5       -4        -3         -2        -1
//               0        1         2          3         4
const names = ['Maria', 'joão', 'Eduardo', 'Gabriel', 'Julia'];
// nomes.splice(Start index, delete, addElement1, addElement2, addElement3);

//remove of final
let removed = names.splice(4, 1); // read: start of index 4 exclude 1 element
console.log(names, removed); // [ 'Maria', 'joão', 'Eduardo', 'Gabriel' ] [ 'Julia' ]
//add at the index informed
removed = names.splice(2, 0, 'Luiz', 'Otavio');
console.log(names, removed); //[ 'Maria', 'joão', 'Luiz', 'Otavio', 'Eduardo', 'Gabriel' ] []
//add at the end of array
removed = names.splice(names.length, 0, 'Daniel');
console.log(names, removed);//['Maria', 'joão', 'Luiz', 'Otavio', 'Eduardo', 'Gabriel', 'Daniel'] []
