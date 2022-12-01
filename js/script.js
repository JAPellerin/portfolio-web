/* ============================= Side-bar ============================= */
const navTogglerBtn = document.querySelector(".nav-toggler"),
sidebar = document.querySelector(".side-bar");
navTogglerBtn.addEventListener("click", () => 
{
    sidebarSectionTogglerBtn();
    if(document.querySelector(".style-switch").classList.contains("open"))
    {
        document.querySelector(".style-switch").classList.remove("open");
    }
})
function sidebarSectionTogglerBtn()
{
    sidebar.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++ )
    {
        allSection[i].classList.toggle("open");
    }
}
/* ========================= typing animation ========================= */
var typed = new Typed(".typing",{
    strings:["","Designer Web.","Artiste Digital.","Développeur Web.","Designer Graphique.","Intégrateur Web."],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})