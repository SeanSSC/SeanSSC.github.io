
var lastScrollPos = window.pageYOffset
const navBar = document.getElementById("navBar")
const contact = document.getElementsByClassName("contactMe")[0]

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

function alwaysVisible() {
    var windowHeight = window.innerHeight;
    var windowRight = window.innerWidth;
    var computedStyle = window.getComputedStyle(contact);
    var contactHeight = parseInt(computedStyle.height);
    var windowBottomY = windowHeight - (contactHeight);
    contact.style.top = windowBottomY + "px";
  }
  

window.addEventListener('scroll', scrollAction);
window.addEventListener('scroll', alwaysVisible);
alwaysVisible;
