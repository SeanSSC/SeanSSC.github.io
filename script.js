
var lastScrollPos = window.pageYOffset
const navBar = document.getElementById("navBar")
const infoCanvas = document.getElementById("canvasInfo2")
const summaryCanvas = document.getElementById("canvasInfo")
const backgrounds = document.getElementsByClassName("bg-image")


function scrollAction(){
    var currentScrollPos = window.pageYOffset
    navBar.style.top = window.top + "px"
    if(lastScrollPos > currentScrollPos){
        //Scroll up        
        navBar.style.display = "block"
    }else{
        //Scroll down
        navBar.style.display = "none"
    }
    lastScrollPos = currentScrollPos

}
window.addEventListener('scroll', scrollAction);

