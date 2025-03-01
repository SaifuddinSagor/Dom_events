console.log('external file')
// Option 2 to handle event
function makeYellow() {
    document.body.style.backgroundColor = 'Yellow';
}
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// Option 3 : get Element by Id and then set onclick
const btnMakeBlue = document.getElementById('btn-make-blue');
// console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
const btnMakePurple = document.getElementById('btn-make-purple');
// console.log(btnMakeBlue);
btnMakePurple.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}