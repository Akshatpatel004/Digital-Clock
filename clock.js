// Sun Dec 22 2024 13:02:47 GMT+0530 (India Standard Time)
setInterval(() => {
    let a = Date();

    let old_day= ((a[0]) + (a[1]) + (a[2]));
    let old_month = ((a[4]) + (a[5]) + (a[6]));
    let hour =((a[16]) + (a[17]));
    let min= ((a[19]) + (a[20]));
    let sec = ((a[22]) + (a[23]));

    let h= document.getElementById("hour");
    let m= document.getElementById("minute");
    let s= document.getElementById("sec");
    let d_n= document.getElementById("d_n");
    let new_day = document.getElementById("day");
    let new_month=document.getElementById("month");
    let date= document.getElementById("date").innerText=((a[8]) + (a[9]));
    let year= document.getElementById("year").innerText=((a[11]) + (a[12]) + (a[13]) + (a[14]));
    


    // am OR pm
    if (hour>=12) {
        d_n.innerText="pm";
    } else {
        d_n.innerText="am";
    }

    // DAY
    if (old_day== "Mon") {
        new_day.innerText="Monday";
    }
    if (old_day== "Tue"){
        new_day.innerText="Tuesday";
    }
    if (old_day== "Wed"){
        new_day.innerText="Wednesday";
    }
    if (old_day== "Thu"){
        new_day.innerText="Thursday";
    }
    if (old_day== "Fri"){
        new_day.innerText="Friday";
    }
    if (old_day== "Sat"){
        new_day.innerText="Saturday";
    }
    if (old_day== "Sun"){
        new_day.innerText="Sunday";
    }

    if (old_month=="Jan") {
        new_month.innerText="January";
    }
    if (old_month=="Feb") {
        new_month.innerText="February";
    }
    if (old_month=="Mar") {
        new_month.innerText="March";
    }
    if (old_month=="Apr") {
        new_month.innerText="April";
    }
    if (old_month=="May") {
        new_month.innerText="May";
    }
    if (old_month=="Jun") {
        new_month.innerText="June";
    }
    if (old_month=="Jul") {
        new_month.innerText="July";
    }
    if (old_month=="Aug") {
        new_month.innerText="August";
    }
    if (old_month=="Sep") {
        new_month.innerText="September";
    }
    if (old_month=="Oct") {
        new_month.innerText="October";
    }
    if (old_month=="Nov") {
        new_month.innerText="November";
    }
    if (old_month=="Dec") {
        new_month.innerText="December"; 
    }

    h.innerText=hour;
    m.innerText=min;
    s.innerText=sec;
}, 1000);
