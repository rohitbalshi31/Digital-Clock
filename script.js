function time() {
    var datetime = new Date();
    var hrs = datetime.getHours();
    var min = datetime.getMinutes();
    var sec = datetime.getSeconds();
    var ampm = document.getElementById("ampm");


    if( hrs >= 12){
        ampm.innerHTML = "PM";
    } else {
        ampm.innerHTML = "AM";
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
}
setInterval(time, 1000);