//reduce

//Sum all values from array
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numbers.reduce((acumulator, value, index, array)=>{
    //acumulator is a value for you use in all iteration and you need to return the acumulator if you don't do this it's become undefined
    acumulator += value;
    return acumulator;
}, 0); // this 0 is the inicial value for acumulator, if you didn't declare it here acumulator start's with the first value
console.log(total); //236 it is the sum of all values in array

//return all pair values
const pairValues = numbers.reduce((acumulator, value)=>{
    if(value%2 === 0) acumulator.push(value);
    return acumulator;
}, []); //acumulator starts with a empty array
console.log(pairValues); //[ 50, 80, 2, 8, 22 ]






const people = [
    {name: 'Luiz', age: 32},
    {name: 'Maria', age: 23},
    {name: 'Eduardo', age: 55},
    {name: 'Leticia', age: 19},
    {name: 'Rosana', age: 62},
    {name: 'Wallace', age: 47}
];

//return oldest person

const oldestPerson = people.reduce((acumulator, value)=>{
    if(acumulator.age > value.age) return acumulator; // acumulator = acumulator
    return value; // acumulator = value
}); 
console.log(oldestPerson);

