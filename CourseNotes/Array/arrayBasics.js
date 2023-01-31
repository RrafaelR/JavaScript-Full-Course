const newArray = ['first', 'second'];
// pass this newArray like reference
const array1 = newArray;
// take a copy of array
const array2 = [...newArray];
//pop() : return and remove de last element
array2.pop();
//shift() : return and remove the first element
array1.shift();
//push() : add at the end of array
array1.push('first');
//unshift() : add at begenning of array
array1.unshift('unshift');
//slice() : take a part of array, (start, end-1)
array1.slice(0, 2);
array1.slice(0,-1); // same thing than before
console.log(array1);

console.log(array2);// it's a copy of newArray

let nome = "Michael Jackson dos Santos";
const nomes = nome.split(" "); // divide the string by spaces
console.log(nomes);

nome = nomes.join(' '); // this func join all array string in divided by space
console.log(nome);