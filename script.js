setInterval(() => {
    let date = new Date();
    let htime = date.getHours();
    let mtime = date.getMinutes();
    let stime = date.getSeconds();
    let hrotation = 30*htime + mtime/2;
    let mrotation = 6*mtime;
    let srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`

function updateClock(){
    // get the current date
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // Extract hour, minute and seconds from the date

    // pad 0 if minute or second is lees than 10 (single digit)
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes; 
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;  
    currentHour = (currentHour < 10 ? "0" : "") + currentHour;  

    let timeOfDay = (currentHour < 12) ? "AM" : "PM";
    // covert railway clock to AM/PM clock
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 00) ? 12 : currentHour;
    // prepare the time string from hours, minutes and seconds
    let currentTimeStr = currentHour + ":" + currentMinutes + ":" +                    currentSeconds + " " + timeOfDay
    // inside the time string into the dom
    document.getElementById('clock').innerHTML = currentTimeStr;
}
updateClock();
}, 1000);