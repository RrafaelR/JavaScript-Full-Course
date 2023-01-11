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

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('start')){
        clearInterval(timer);
        startClock();
        clock.classList.remove('paused');
    }
    if(e.target.classList.contains('pause')){
        clearInterval(timer);
        clock.classList.add('paused');
    }
    if(e.target.classList.contains('reset')){
        clearInterval(timer);
        seconds = 0;
        clock.innerHTML = getTimeFromSeconds(seconds);
        clock.classList.remove('paused');
    }
});
