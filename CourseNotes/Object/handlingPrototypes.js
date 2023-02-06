// new Object -> Object.prototype
const objectA = {
    keyA: 'A',
    //__proto__: Object.protype
};
const objectB = {
    keyB: 'B'
};
Object.setPrototypeOf(objectB, objectA); // prototype of objectB is now objectA
console.log(Object.getPrototypeOf(objectB));
console.log(objectB.keyA); // A

// Using protorype functions 
function Product(name, price){
    this.name = name;
    this.price = price;
}
Product.prototype.discount = function(percent){
    this.price = this.price - (this.price* (percent/100));
}

const p2 = {
    name: 'Shoes',
    price: 3.00
}
Object.setPrototypeOf(p2, Product.prototype); // set prototype of Prdouct to p2;
const p1 = new Product('Pencil', 2.00);
console.log(p1);
p1.discount(15); // simulating that a discount of 15% was offered
//this function discount is a function of Object Product, it isn't about instance of object p1
console.log(p1);
p2.discount(20); // object p2 now is object of type Product
console.log(p2);

const p3 = Object.create(Product.prototype, {
    name: {
        writable: true,
        configurable: true, 
        enumerable: true,
        value: 'cup'
    },
    price: {
        writable: true,
        configurable: true, 
        enumerable: true,
        value: 2.5
    }
}) // setting a new object that uses the constructor Product and your prototypes.
console.log(p3);
p3.discount(30);
console.log(p3);
