// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// ------- Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// ------- Test data:
// 1- Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// 2- Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall

function BMI(mass, height){
    return(mass/(height*height));
}
const massJohnData1 = 92;
const heightJohnData1 = 1.95;
const massMarkData1 = 78;
const heightMarkData1 = 1.69;
var markHigherBMIData1 = BMI(massMarkData1,heightMarkData1)>BMI(massJohnData1,heightJohnData1);
//console.log(markHigherBMIData1); 

const massJohnData2 = 85;
const heightJohnData2 = 1.76;
const massMarkData2 = 95;
const heightMarkData2 = 1.88;
var markHigherBMIData2 = BMI(massMarkData2,heightMarkData2)>BMI(massJohnData2,heightJohnData2);
//console.log(markHigherBMIData2); 