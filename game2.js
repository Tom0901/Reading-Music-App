//Global Scope// 
const min = 1;
const max = 9;
let random = Math.floor(Math.random() * (+max - +min)) + +min;
let playerScore= 0; 
const mainImage =document.querySelector('.main-image-1'); 
(function(){

	while(random===1){
      mainImage.className == "main-image-1"; 
    }
    while(random===2){
    mainImage.classList.toggle( "main-image-2"); 
       
    }
    while(random===3){
    mainImage.classList.toggle( "main-image-3");
  
    }
    while(random===4){
    mainImage.classList.toggle( "main-image-4");
        
    }
    while(random===5){
  mainImage.classList.toggle( "main-image-5");
        
    }
    while(random===6){
    mainImage.classList.toggle( "main-image-6"); 
      
    }
    while(random===7){
    mainImage.classList.toggle( "main-image-7"); 
    
    }
    while(random===8){
    mainImage.classList.toggle( "main-image-8");  
   
    }
    while(random===9){
    mainImage.classList.toggle( "main-image-9");
    }
})();
//update score and select new image// 
const updateScore =()=>{ 
    const display = document.getElementById('score'); 
    display.textContent = playerScore; 
    
   

};
//scoping function// 


const game = ()=>{
 
const text = document.getElementById('text'); 

//timer//
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 ,
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
};


console.log(random);

};

//button event listeners// 

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');

//button functions// 

const button1Click = ()=> {
    button1.addEventListener('click', ()=>{
        const number1 = 1; 
        if (number1===random) {
            playerScore++;
        updateScore();
        (function(){
            random = Math.floor(Math.random() * (+max - +min)) + +min;
            console.log(random); 
        })();
        }
        else { text.textContent = "Try Again"; 

        }
    });

};


button1Click();

const button2Click = ()=> {
    button2.addEventListener('click', ()=>{
        const number2 = 2; 
        if (number2===random) {
            playerScore++;
        updateScore();
        (function(){
            random = Math.floor(Math.random() * (+max - +min)) + +min;
            console.log(random); 
        })();
      
        }
        else { text.textContent = "Try Again"; 

        }
    });

};

button2Click();

const button3Click = ()=> {
    button3.addEventListener('click', ()=>{
        const number3 = 3; 
        if (number3===random) {
            playerScore++;
        updateScore();
        (function(){
            random = Math.floor(Math.random() * (+max - +min)) + +min;
            console.log(random); 
        })();
        }
        else { text.textContent = "Try Again"; 

        }
    });

};

button3Click();


const button4Click = ()=> {
    button4.addEventListener('click', ()=>{
        const number4 = 4; 
        if (number4===random) {
            playerScore++;
        updateScore();
        (function(){
            random = Math.floor(Math.random() * (+max - +min)) + +min;
            console.log(random); 
        })();
        }
        else { text.textContent = "Try Again"; 

        }
    });

};

button4Click();


const button5Click = ()=> {
    button5.addEventListener('click', ()=>{
        const number5 = 5; 
        if (number5===random) {
            playerScore++;
        updateScore();
        (function(){
            random = Math.floor(Math.random() * (+max - +min)) + +min;
            console.log(random); 
        })();
        }
        else { text.textContent = "Try Again"; 

        }
    });

};

button5Click();

const button6Click = ()=> {
    button6.addEventListener('click', ()=>{
        const number6 = 6; 
        if (number6===random) {
            playerScore++;
        updateScore();
        (function(){
            random = Math.floor(Math.random() * (+max - +min)) + +min;
            console.log(random); 
        })();
        }
        else { text.textContent = "Try Again"; 

        }
    });

};

button6Click();

const button7Click = ()=> {
    button7.addEventListener('click', ()=>{
        const number7 = 7; 
        if (number7===random) {
            playerScore++;
        updateScore();
        (function(){
            random = Math.floor(Math.random() * (+max - +min)) + +min;
            console.log(random); 
        })();
        }
        else { text.textContent = "Try Again"; 

        }
    });

};



button7Click();

const button8Click = ()=> {
    button8.addEventListener('click', ()=>{
        const number8 = 8; 
        if (number8===random) {
            playerScore++;
        updateScore();
        (function(){
            random = Math.floor(Math.random() * (+max - +min)) + +min;
            console.log(random); 
        })();
        }
        else { text.textContent = "Try Again"; 

        }
    });

};



button8Click();

const button9Click = ()=> {
    button9.addEventListener('click', ()=>{
        const number9 = 9; 
        if (number9===random) {
            playerScore++;
        updateScore();
        (function(){
            random = Math.floor(Math.random() * (+max - +min)) + +min;
            console.log(random); 
        })();
        }
        else { text.textContent = "Try Again"; 

        }
    });

};



button9Click();

game();
