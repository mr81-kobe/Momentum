const clock = document.querySelector('#clock');

function updateClock() {

const date = new Date();


const hour= String(date.getHours());
const minute= String(date.getMinutes()).padStart(2, '0');
const second= String(date.getSeconds()).padStart(2, '0');
clock.innerText=`${hour}:${minute}:${second}`;



}
updateClock();
setInterval(updateClock, 1000); 
//setTimeout(updateClock, 1000);