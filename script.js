//below is the code to a counter program
const decreaseBtn = document.getElementById(`decreaseBtn`);
const resetBtn = document.getElementById(`resetBtn`);
const increaseBtn = document.getElementById(`increaseBtn`);
const counter = document.getElementById(`counter`); 
let count = 0;

decreaseBtn.onclick = function(){
    count--;
    counter.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    counter.textContent = count;
}
increaseBtn.onclick = function(){
    count++;
    counter.textContent = count;
}
// now lets discuss the count object
let x = 3.86;
let y ;

//y = Math.round(x);
//y = Math.floor(x);
//y = Math.ceil(x);
//y = Math.trunc(x);
//y = Math.sqrt(x);
//y = Math.pow(x,2);
//y = Math.abs(x);     sin,cos,tan.max,min etc...

console.log(y);
//generating a random number.
const diceVal = document.getElementById(`diceVal`); 
const rollBtn = document.getElementById(`rollBtn`);
let randomNum = 0;

rollBtn.onclick = function(){
 randomNum = Math.floor(Math.random()*6)+1;
 diceVal.textContent = randomNum;
}



