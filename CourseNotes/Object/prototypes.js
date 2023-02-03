// _proto_ is the property
// prototype is one attribute of dad's of the object, it's one attribute of Object
function Person(name, lastName){
    this.name = name;
    this.lastName = lastName;
}
//functions of the prototype could be overwrited.
Person.prototype.fullName = function (){
    return this.name+' '+this.lastName; // this function is an characteristic of Object Person.
//it isn't stored in the created object, it's stored in the father of Person that is object and all instance of Person can call this function.
}
//Person.prototype === person1.__proto__

const person1 = new Person('John', 'Smith'); // Person = constructor function
console.dir(person1);
console.log(person1.fullName());
const date = new Date(); // Date = constructor function | here you have a lot of prototypes for this Object like getFullYear(), getMonth(), and others...



