const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let seconds = 0;
let  timer;
const getTimeFromSeconds = (seconds) =>{
    const data =  new Date(seconds*1000);
    return data.toLocaleTimeString('pt-BR' , {
        hour12: false,
        timeZone: 'GMT'
    });
}

const startClock = ()=>{
    timer = setInterval(()=>{
        seconds++;
        clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000); 
}

start.addEventListener('click', function (event){
    startClock();
});

pause.addEventListener('click', function (event){
    clearInterval(timer);
});

reset.addEventListener('click', function (event){
    clearInterval(timer);
    seconds = 0;
    clock.innerHTML = getTimeFromSeconds(seconds);
});