function showHour(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR' , {
        hour12: false
    })
}

const timer = setInterval(()=>{
    console.log(showHour())
}, 1000);
setTimeout(()=>{
    clearInterval(timer)
}, 5000);

