const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

btnLeft.onclick = function (){
  // On demarre le chrono
  chronometer.startClick(printTime) // ttes les secondes, printTime va etre appelé

  // changer le bouton start en rouge avec le texte stop.
}

function printTime() {
  // Mettre à jour l'qfficqhge de lq ,ontre
}
//À  chaque seconde, on affiche les minutes et les secondes.
function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  if(btnLeft.onclick){
    let liTag = document.createElement('li')
    
    document.body.insertBefore(liTag,)
  }
  
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP"
  btnLeft.className = "btn stop"
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.className = "btn split"
  //SPLIT devient reset et reset devient Split.
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.className = "btn start"
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.className = "btn reset"
  // Reset devient split au click sur start et au stop.
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
 if(btnLeft.innerHTML === "START"){
   setStopBtn();
   setSplitBtn();
 }
 else {
   setStartBtn();
   setResetBtn();
 }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  // ... your code goes here
});
