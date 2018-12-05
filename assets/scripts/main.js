"use strict";
let inputDate = document.querySelector("#inputDate");

let pauseButton = document.querySelector("#pauseTime");
let continueButton = document.querySelector("#continueTime");


let count = () => {
    if(inputDate.value != ""){
        let targetDate = Date.parse(inputDate.value);
        let now = new Date().getTime();
        
        let diff = targetDate - now;

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";  
    } 
}

let skaiciuoti = setInterval(count, 1000);

pauseButton.addEventListener("click", () => {
    clearInterval(skaiciuoti);
});
continueButton.addEventListener("click", () => {
    skaiciuoti = setInterval(count, 1000);
});


