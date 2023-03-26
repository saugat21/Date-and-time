setInterval(() => {
    let date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    // condition for am and pm

    let dat = "AM";
    if (hour > 11) {
        dat = "PM";
    }
    if (hour > 12) { hour = hour - 12; }
    if (hour == 0) { hour = 12; }


    if (min < 10) {
        min = "0" + min;
    }
    // hour = hour > 12 ? hour - 12 : hour;
    //hour = hour == 0 ? hour - 12 : hour;
    //dat = hour < 12 ? "AM" : "PM";

    document.querySelector(".hours-time").innerHTML = hour;
    document.querySelector(".minutes-time").innerHTML = min;
    document.querySelector(".seconds-time").innerHTML = sec;
    document.querySelector(".am-pm").innerHTML = dat;
}, 1000);