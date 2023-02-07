
const showInformations = {
    showInformations(){
        console.log(`${this.name} costs $${this.value} reais`);
    }
};
const showNameProduct = {
    showNameProduct(){
        console.log(`${this.name}`);
    }
};

function createProduct(name, value){
    //const productPrototype = Object.assign({}, showInformations, showNameProduct) -> it's the same thing than the code below
    const productPrototype = {...showInformations, ...showNameProduct}; //here you're copying the attributes of other objects to productPrototype | it's called composing or mixing
    return Object.create(productPrototype, { // here you're setting the protorype for the object
        name: {
            value: name
        },
        value: {
            value: value
        }
    })
};
const product1 = createProduct('knife', 20);
product1.showNameProduct();
product1.showInformations();