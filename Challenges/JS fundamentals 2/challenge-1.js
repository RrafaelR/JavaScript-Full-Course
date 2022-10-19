calcAverage= (score1,score2,score3)=>{
    return (score1+score2+score3)/3;
}
function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= 2*avgKoalas)
        console.log(`Dolphins win(${avgDolphins}vs${avgKoalas})`)
    else if( avgKoalas>= 2*avgDolphins)
        console.log(`Dolphins win(${avgKoalas}vs${avgDolphins})`)
    else
        console.log("No teams wins...")
}
const dolphinsData1 = calcAverage(44,23,71);
const koalasData1 = calcAverage(65,54,49);
checkWinner(dolphinsData1,koalasData1);
const dolphinsData2 = calcAverage(85,54,41);
const koalasData2 = calcAverage(23,34,27);
checkWinner(dolphinsData2,koalasData2);
