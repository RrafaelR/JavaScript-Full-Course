// function that almost pause code in the time that it stop.
//never arrive all values at the same time
function* genareting1() {
    const s1= 'value1';
    yield s1;
    const s2= 'value2';
    yield s2;
    const s3= 'value3';
    yield s3;
}

const g1 = genareting1();
// console.log(g1.next().value); //return value1
// console.log(g1.next().value); //return value2
// console.log(g1.next().value); //return value3
// console.log(g1.next()); // return undefined and done is true because generating function finish

//it's iterable
// for(let i of g1){
//     console.log(i);
// }

function* generating2(){
    yield 1; // yield is similitar to return, but it stop at this point and when called again next yield will be called
    yield 2;
    yield 3;
}

function* generating3(){
    yield* generating2();
    yield 4;
    yield 5;
    yield 6;
}
const g3 = generating3();
console.log(g3.next().value); // return 1
for(let value of g3){
    console.log(value);
}

