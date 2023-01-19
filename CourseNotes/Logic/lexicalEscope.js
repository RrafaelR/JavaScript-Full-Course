const firstName = "Rafael";

function printName() {
    console.log(firstName);
}

function callPrintName(){
    const firstName = 'Claudio';
    printName();
}
callPrintName();