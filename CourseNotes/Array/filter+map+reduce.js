// join all the three main functions

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// return the sum of all doubled pair values
// filter pair values
// double values 
// sum all values (reduce)

const pairNumbers = numbers.filter(value=>value%2===0);
const doubleValues = pairNumbers.map((value)=>{
    return value*2;
});
const total = doubleValues.reduce((acumulator,value)=>{
    acumulator += value;
    return acumulator;
}, 0);
console.log(total); //324