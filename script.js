

const min = document.querySelector(".min")
const sec = document.querySelector(".sec")
const milisec = document.querySelector(".mili")
const points = document.querySelectorAll(".points")
const start = document.querySelector("#button-start")
const pause = document.querySelector("#button-pause")
const restart = document.querySelector("#button-restart")
const continuetime = document.querySelector("#button-continue")

let milisecCounter = 0
let secCounter = 0
let minCounter = 0
let startTime




function padrao(){
    milisecCounter = 0
    secCounter = 0
    minCounter = 0
    start.classList.remove("hide")
    pause.classList.add("hide")
    continuar.classList.add("hide")

    milisec.innerHTML = milisecCounter.toString().padStart(3,"0")
    sec.innerHTML = secCounter.toString().padStart(2,"0")
    min.innerHTML = minCounter.toString().padStart(2,"0")
    
}
function countTimer(){
    milisecCounter++
    if(milisecCounter == 1000){
        secCounter++
       milisecCounter = 0
    }

    if(secCounter == 60){
        minCounter++
        secCounter = 0
    }
    
    milisec.innerHTML = milisecCounter.toString().padStart(3,"0")
    sec.innerHTML = secCounter.toString().padStart(2,"0")
    min.innerHTML = minCounter.toString().padStart(2,"0")
    

}
function startTimer(){
 start.classList.add("hide")
 pause.classList.remove("hide")
 startTime = setInterval(countTimer,1)   
}

function pauseTime(){
    pause.classList.add("hide")
    continuetime.classList.remove("hide")
    clearInterval(startTime)
}
function resetTimer(){
    clearInterval(startTime)
    min.innerHTML = "00"
    sec.innerHTML = "00"
    milisec.innerHTML = "000"
    padrao()

}
function continueTimer(){
   start.classList.add("hide")
   pause.classList.remove("hide")
   continuetime.classList.add("hide")
   startTime = setInterval(countTimer,1)
}

start.addEventListener("click",startTimer)
pause.addEventListener("click",pauseTime)
restart.addEventListener("click",resetTimer)
continuetime.addEventListener("click",continueTimer)
