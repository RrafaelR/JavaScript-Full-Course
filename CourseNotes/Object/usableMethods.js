const products = {name: "cup", price: 2}
const otherProducts = {
    ...products,
    capacity: 200
}; // copy the object products for otherProducts and added new value
const otherProducts2 = Object.assign({}, products, {capacity: 200}) // do the same thing than code above
const specificAtributes = {name: products.name, price: products.price}; // take a copy of the specific values of products
otherProducts.name = 'Glass'; 
otherProducts.price = 2.5;
console.log(products); //{ name: 'cup', price: 2 }
console.log(otherProducts); //{ name: 'Glass', price: 2.5, capacity: 200 }

console.log(Object.keys(otherProducts)) // print all keys of this object

console.log(Object.getOwnPropertyDescriptor(products, 'name')) // present the specification of this property  | { value: 'cup', writable: true, enumerable: true, configurable: true }

console.log(Object.values(products)) // get values of the object without the keys | [ 'cup', 2 ]
console.log(Object.entries(products)) // return one array with each key and value for each object | [ [ 'name', 'cup' ], [ 'price', 2 ] ]