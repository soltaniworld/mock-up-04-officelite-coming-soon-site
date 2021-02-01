// Get date of launch from HTML
const dateFromHTML = document.querySelector(".counter__title--date").innerHTML;

//Set date to countdown to, time now, and time left
const countDownDate = new Date(dateFromHTML +' 0:0:0');
let now = new Date().getTime();
let timeleft = countDownDate - now;

// Variables
let days, hours, minutes, seconds;

//calculate Date variables, and set html day, hour, min, sec
function renewTime() {
    now = new Date().getTime();
    timeleft = countDownDate - now;

    //if countdown is overdue, set all variabels to 0, else set time left
    if (timeleft < 0){
        days = hours = minutes = seconds = 0;
    }
    else{    
    days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    }

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".mins").innerHTML = minutes;
    document.querySelector(".secs").innerHTML = seconds;
}

//Reset function to renew clock every second
renewTime()
setInterval(renewTime, 1000);
