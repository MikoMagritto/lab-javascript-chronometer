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
let num=document.getElementsByClassName('number');
btnLeft.onclick = function (){
  // On demarre le chrono
  if(btnLeft.innerHTML === "START"){ 
  chronometer.startClick(printTime) // ttes les secondes, printTime va etre appelé
}else if(btnLeft.innerHTML === "STOP"){
  chronometer.stopClick()
}
  // changer le bouton start en rouge avec le texte stop.
}
btnRight.onclick=function(){
  if(btnRight.innerHTML==='RESET'){
  chronometer.resetClick();
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML=seconds[0];
  secUni.innerHTML = seconds[0];
  let minutes=chronometer.twoDigitsNumber( chronometer.getMinutes());
  minDec.innerHTML=minutes[0];
  minUni.innerHTML=minutes[0];
  }
}

function printTime() {
 printMinutes();
 printSeconds();
 printMilliseconds(); // Mettre à jour l'afficqhge de la montre
}
//À  chaque seconde, on affiche les minutes et les secondes.
function printMinutes() {
  let minutes=chronometer.twoDigitsNumber( chronometer.getMinutes())// ... your code goes here
  minDec.innerHTML=minutes[0];
  minUni.innerHTML=minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];// ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  let millisecond=chronometer.twoDigitsNumber(setInterval(()=>{chronometer.currentTime*1000},1));
  milDec.innerHTML=millisecond[0];
  milUni.innerHTML=millisecond[1];// ... your code goes here
}

function printSplit() {
  
  //let htmlContent = '<li>`${i}.${splitClick()}`</li>'
 // for (let i=0;i<10;i++){ 
  //if(btnRight.onclick){
    //splits.insertAdjacentText('afterbegin', htmlContent );
    
    //let liTag = document.createElement('li')
    
    //document.body.insertBefore(liTag,)
 // }
  
}//}

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
