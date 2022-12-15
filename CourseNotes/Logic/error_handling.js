const sum = (x,y) => {
    if(
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        throw new Error('x or y isn´t a number');
    }

    return x+y;
};

try {
    console.log(sum(1,2));
    console.log(sum('1',2));
} catch(error){
    console.log(error);
    console.log('Some wrong thing happend with sum function');
}