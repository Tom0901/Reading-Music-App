
var playerScore= 0; 
const min = 1;
const max = 9; 
const oneMinutes = 60 
var display = null;
var random = 0;
var text = null; 
var timer = null;

function generateRandom(min = 1, max = 9) {
    return Math.floor(Math.random() * (+max - +min)) + +min;
}

function updateScore() {
    const display = document.getElementById('score'); 
    display.textContent = playerScore; 
};

function timerFunction(duration, display) {
    var d = new Date();
    var t = d.toLocaleTimeString();
    var timerEle = document.getElementById("timer");
    timerEle.innerHTML = t;
//game functionality// 
}

function stopTimer() {
    clearInterval(timer);
}

const notoletter = (num)=> {
    switch (num) {
        case 1: 
        return 'E';
                case 2: 
        return 'F';
                case 3: 
        return 'G';
                case 4: 
        return 'A';
                case 5: 
        return 'B';
                case 6: 
        return 'C';
                case 7: 
        return 'D';
                case 8: 
        return 'E';
                case 9: 
        return 'F';
    }
}

//scoping function// 
window.onload = function () {    
    display = document.querySelector('#timer');
    text = document.getElementById('text');
    timer = setInterval(timerFunction, 1000);

    random = generateRandom();
    const buttons = document.getElementsByClassName('button'); 
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', buttonEventListener, false);
    }

    startTimer(oneMinutes, display);    
};

var buttonEventListener = function(e) {
    var letterFromFunc = document.getElementById(e.target.id).value;

        console.log("Called! " + letterFromFunc);
        
        if (letterFromFunc == notoletter(random)) {
            playerScore++; 
            updateScore();
            stopTimer();
            timer = setInterval(timerFunction, 1000); 
            random = generateRandom();
        }
};