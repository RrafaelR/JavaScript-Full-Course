//map -> receive a array with the same length of the original but midified
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const doubleNumber = numbers.map(value=> value*2);
console.log(doubleNumber); // console with all vlues *2


//for each element:
//return only a string with name
//remove only key name of the object
//add a key id in each object

const people = [
    {name: 'Luiz', age: 62},
    {name: 'Maria', age: 23},
    {name: 'Eduardo', age: 55},
    {name: 'Leticia', age: 19},
    {name: 'Rosana', age: 32},
    {name: 'Wallace', age: 47}
];


const stringWithName = people.map((value)=>{
    const people1 = {...value}; //copy the object for the original obect continues unmodified
    return people1.name;
})
console.log(stringWithName);

const addIdKey = people.map((value, index)=>{
    people1 = {...value};
    people1.id = index;
    return people1;
})
console.log(addIdKey);

const removeKeyName = people.map((value)=>{
    const people1 = {...value};
    delete people1.name;
    return people1;
})
console.log(removeKeyName);
console.log(people);


