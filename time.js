document.addEventListener("DOMContentLoaded", function () {
    setInterval(update, 1000);;
});


function getTime(){
    const now = new Date();
    const  hours = now.getHours().toString().padStart(2, '0');
    const  mins = now.getMinutes().toString().padStart(2, '0');
    const  secs = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${mins}:${secs}`;

    return time;
}

function update() {
    const timeElement = document.getElementById('current-time');
    const currentTime = getTime();
    timeElement.textContent = currentTime;
}