// defineProperty - defineProperties

function Product(name, price, amount){
    // this.name = name;
    // this.price = price;
    Object.defineProperty(this, 'amount', {
        enumerable: true, // show this key of the object, mainly for itarating
        value: amount, // define the value
        writable: false, // it's for allow to modify
        configurable: false, // this key could be reconfigured?
    });

    Object.defineProperties(this, {
        name: {
            enumerable: true, // show this key of the object, mainly for itarating
            value: amount, // define the value
            writable: true, // it's for allow to modify
            configurable: false, // this key could be reconfigured?
        },
        price: {
            enumerable: false, // show this key of the object, mainly for itarating
            value: amount, // define the value
            writable: false, // it's for allow to modify
            configurable: false, // this key could be reconfigured?
        }
    })

}

const p1 = new Product("T-shirt", 20, 3);
p1.amount = 500; //if writable is true, it can modify
delete p1.amount; // it only works if configurable is true
console.log(p1); // Product { amount: 3, name: 3 }
for(let key in p1){
    console.log(key);
}; // amount | name