function Product(name, price, amount){ // constructor function
    Object.defineProperty(this, 'amount', {
        enumerable: true, // show this key of the object, mainly for itarating
        configurable: false, // this key could be reconfigured?
        get: function(){
            return amount;
        },
        set: function(value){
            if( typeof value !== 'number'){
                throw new TypeError('put a valid value');
                return;
            }
            amount = value;
        }
        
    });
}

function createProduct(name){
    return {
        get name(){
            return name;
        },
        set name(value){
            name = value;
        }
    }
}

const p1 = new Product("T-shirt", 20, 3);
console.log(p1); //Product { amount: [Getter/Setter] }
//p1.amount = 'Rafael'; -> it gives a error
p1.amount = 15; // use the set for set value
console.log(p1.amount); //use the get for take the value 

const p2 = createProduct('Gloves');
console.log(p2); //{ name: [Getter/Setter] }
p2.name = 'Good gloves'; // it use set function for set name;
console.log(p2.name); // it use get function to get value | Good gloves