// Option:1 directly set on the HTML element
//  <button onclick="console.log(65)">Anothern button</button>

// option: 2 add onclick function on the html element 
// IMPORTANT: We will use this
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = "red";
}

// option: 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = "blue";
}
// option: 3 another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// Option: 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makepink);
function makepink() {
    document.body.style.backgroundColor = 'pink';
}

// Optiion: 4 another
const makeGreenButton = document.getElementById('make-green');
     makeGreenButton.addEventListener('click',function makeGreen(){
     document.body.style.backgroundColor = 'green';   
     })
// Option:4 final
// IMPORTANT: We will use this sometimes
// document.getElementById('make-goldenrod').addEventListener('click', function(){})
document.getElementById('make-goldenrod').addEventListener('click', function (){
    document.body.style.backgroundColor = 'goldenrod'; 
 })