let person = {
    name: 'Rafael',
    lastName: 'Chagas'
};
const key = 'lastName';
console.log(person.name); //Rafael
console.log(person[key]);//Chagas

//instancing object

const person2 = new Object();
person2.name = 'João';
person2.lastName = 'Silva';

console.log(person2);// { name: 'João', lastName: 'Silva' }

//delete key
delete person2.name;
console.log(person2); // { lastName: 'Silva' }

//Creating maethods in objects
const person3 = new Object();
person3.name="carlos";
person3.callName = function(){
    console.log(`${this.name} is my name`);
}
person3.age= 21;
person3.bornYear = function(){
    const currentDate = new Date();
    return  currentDate.getFullYear() - this.age;
}

person3.callName(); //carlos is my name
console.log(person3.bornYear()); //2002

// iterating object
for(let key in person3){
    console.log(key);//name|callName|age|bornYear
}

// Factory / Constructor
function createPerson(name, lastName){ // factory func
    return {
        name,
        lastName,
        get fullName(){
            return `${this.name}`;
        }
    }
}

function Person(name, lastName){ // constructor func
    this.name = name;
    this.lastName = lastName;
    Object.freeze(this); // if you do it, this object is unmodifed, you lock the object
}

// word new ...  create bject {} <- this (the work this is connected with the creted object)
const personA = new Person('Luiz', 'Gustavo');
const personB = createPerson('Anna', 'Julia');
personB.age = 3; // you can do it because you changing the variable age instead of addres of const personB, you can't modified addres of personB to point to another object.

console.log(personA, personB); // Person { name: 'Luiz', lastName: 'Gustavo' } { name: 'Anna', lastName: 'Julia', fullName: [Getter], age: 3 }