const target = document.getElementById('target')
let pointsCounter = document.getElementById('points')
let positionX = 0
let points = 0
let time = 0
const display = document.getElementById("display");
let isGameOn = false


target.addEventListener('click',function(){
        points += 1
        pointsCounter.textContent = "Points: " + points
        target.style.left=(Math.floor(Math.random() * 88)) + "%";
        target.style.top=(Math.floor(Math.random() * 88)) + "%";
        if (!isGameOn) startGame()
})

function startGame() {
    console.log("INVOCA?")
    resetTimer();
    isGameOn = true;
    points = 0;
    pointsCounter.textContent = "Points: " + points
    startTimer();
}

function stopGame(){
    stopTimer();
    isGameOn = false;
    //Make position of target to center
    target.style.left="45%";
    target.style.top="45%";
}

//TIMER from https://www.youtube.com/watch?v=d8-LGhKtzRw
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startTimer(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTimer, 10);
        isRunning = true;
    }
}

function stopTimer(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function resetTimer(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;    
    display.textContent = "00:00";
}

function updateTimer(){

    const max_time_seconds = "20"
    
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${seconds}:${milliseconds}`;

    if (seconds === max_time_seconds) stopGame();
}