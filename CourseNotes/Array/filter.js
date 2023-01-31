//Filter -> aways return array with filtered elements, don't modified the elements
// Filter (Basic)
// Return numbers > 10
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(value, index, array){ // only for undertand how it work's, this params aren't necessary
    if(index === 0){
        console.log(array);
    }
    console.log(index);
    return value > 10;
}

const filteredNumbers = numbers.filter(callbackFilter);
console.log(filteredNumbers); // [ 50, 80, 11, 15, 22, 27 ]

// Filter with arrow function
const filteredNumbers2 = numbers.filter(value => value>10); //when you only have the return aren't  necessary {} and the word return

// a little complex example
//return people that there are name with 5 letters or more
//return people that have more than 50 years old
//return people that name finish with the letter a
const people = [
    {name: 'Luiz', age: 62},
    {name: 'Maria', age: 23},
    {name: 'Eduardo', age: 55},
    {name: 'Leticia', age: 19},
    {name: 'Rosana', age: 32},
    {name: 'Wallace', age: 47}
];

const name5lettersOrMore = people.filter(value=> value.name.length >=5);
console.log("people that there are name with 5 letters or more: ", name5lettersOrMore);

const more50Years = people.filter(value => value.age >50);
console.log("people that have more than 50 years old", more50Years);

const nameFinishLetterA = people.filter(value => value.name.toLocaleLowerCase().endsWith('a'));
console.log("people that name finish with the letter a: ", nameFinishLetterA);

