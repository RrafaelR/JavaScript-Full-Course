function Product(name, price){
    this.name = name;
    this.price = price;
}
Product.prototype.increase = function(value){
    this.price += value;
}
Product.prototype.decrease= function(value){
    this.price+= value;
}

function T_shirt(name, price, color){
    Product.call(this, name, price); //set constructor of Product
    this.color = color;
}
T_shirt.prototype = Object.create(Product.prototype); // link the prototype of T_shirt with the Product | it happens because prototyupe is a object and in this method you are creating a new prototype
const shirt = new T_shirt('TankTop', 10.9, 'red');
console.log(shirt); // Product { name: 'TankTop', price: 10.9, color: 'red' }
T_shirt.prototype.constructor = T_shirt; // set the constructor of T-shirt again
shirt.increase(10.0);
console.log(shirt); // T_shirt { name: 'TankTop', price: 20.9, color: 'red' }

T_shirt.prototype.changeColor = function(newColor){
    this.color = newColor;
}
shirt.changeColor('blue');
shirt.increase(50);
console.log(shirt); // T_shirt { name: 'TankTop', price: 70.9, color: 'blue' }