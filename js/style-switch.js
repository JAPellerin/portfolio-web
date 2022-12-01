/* ========================= toggle style switcher ========================= */
const styleSwitcherToggle = document.querySelector(".style-switch-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switch").classList.toggle("open");
})
// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switch").classList.contains("open"))
    {
        document.querySelector(".style-switch").classList.remove("open");
    }
})
document.querySelector(".nav-toggler").addEventListener("click", () => 
{
    if(document.querySelector(".style-switch").classList.contains("open"))
    {
        document.querySelector(".style-switch").classList.remove("open");
    }
})
/* ========================== theme colors =========================== */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

var colorCookie = getCookie("color");
if(colorCookie) {
    alternateStyles.forEach((style) => {
    if(getCookie("color") === style.getAttribute("title"))
    {
        style.removeAttribute("disabled");
    }
    else
    {
        style.setAttribute("disabled","true");
    }
})
}

let mode = getCookie("mode");
if(mode) {
    if(getCookie("mode") === "dark"){
        document.body.classList.toggle("dark");
    }
}

function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
            setCookie("color",color,30);
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")) {
        setCookie("mode","dark",30);
    } else {
        setCookie("mode","light",30)
    }
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})