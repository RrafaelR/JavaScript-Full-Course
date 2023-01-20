function rand(min = 500, max=3000){
    const num = Math.random()*(max-min) + min;
    return Math.floor(num);
}

function f1(callback){
    setTimeout(()=>{
        if(callback) callback();
        console.log("function 1");
    }, rand());
}

function f2(callback){
    setTimeout(()=>{
        if(callback) callback();
        console.log("function 2");
    }, rand());
}

function f3(){
    setTimeout(()=>{
        console.log("function 3");
    }, rand());
}

// f1(()=>{
//     f2(()=>{
//         f3();
//     })
// });

f1(f1CallBack);
function f1CallBack(){f2(f2CallBack)};

function f2CallBack(){f3()}