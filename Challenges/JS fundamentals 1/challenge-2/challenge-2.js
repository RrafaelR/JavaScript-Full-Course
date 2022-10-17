// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// ------- Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

function BMI(mass, height){
    return(mass/(height*height));
}
const massJohnData1 = 92;
const heightJohnData1 = 1.95;
const massMarkData1 = 78;
const heightMarkData1 = 1.69;
var markHigherBMIData1 = BMI(massMarkData1,heightMarkData1)>BMI(massJohnData1,heightJohnData1);
if(markHigherBMIData1)
    console.log(`Mark's BMI ${BMI(massMarkData1,heightMarkData1).toFixed(1)} is higher than John's ${BMI(massJohnData1,heightJohnData1).toFixed(1)}`);
else
    console.log(`John's BMI ${BMI(massJohnData1,heightJohnData1).toFixed(1)} is higher than Mark's ${BMI(massMarkData1,heightMarkData1).toFixed(1)}`);
const massJohnData2 = 85;
const heightJohnData2 = 1.76;
const massMarkData2 = 95;
const heightMarkData2 = 1.88;
var markHigherBMIData2 = BMI(massMarkData2,heightMarkData2)>BMI(massJohnData2,heightJohnData2);
if(markHigherBMIData2)
    console.log(`Mark's BMI ${BMI(massMarkData2,heightMarkData2).toFixed(1)} is higher than John's ${BMI(massJohnData2,heightJohnData2).toFixed(1)}`);
else
    console.log(`John's BMI ${BMI(massJohnData2,heightJohnData2).toFixed(1)} is higher than Mark's ${BMI(massMarkData2,heightMarkData2).toFixed(1)}`);