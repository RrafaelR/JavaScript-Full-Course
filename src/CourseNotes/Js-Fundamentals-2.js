// ------------- Expressions functions with arrow functions ---------------------

const calAge = birthYear => 2022-birthYear;
const calAge2 = (birthYear) =>{return 2022-birthYear} // second way to make the same thing


console.log(calAge(2002));
console.log(calAge2(2002));

//-------------- Array methods -------------------------
const ar = [1990, "Rafael Chagas", 1889];
ar.push("String no final");
console.log(ar);