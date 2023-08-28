
var lastScrollPos = window.scrollY;
const navBar = document.getElementsByClassName("navBar")[0];
function scrollAction(){
    var currentScrollPos = window.scrollY

    //Scroll down
    if (currentScrollPos > lastScrollPos){
        navBar.style.visibility = "hidden";
    }
    //Scroll up
    else if (currentScrollPos < lastScrollPos){
        navBar.style.visibility = "visible";
    }
    lastScrollPos = currentScrollPos;
}


window.addEventListener('scroll', scrollAction);