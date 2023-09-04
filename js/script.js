
var lastScrollPos = window.scrollY;
const navBar = document.getElementsByClassName("navBar")[0];
const edu = document.getElementById("monash");
var gpaLoaded = false;
var cgpaLoaded = false;
const selectJubil = document.getElementById("select-jubilee");
const selectMonash = document.getElementById("select-monash");
const jubil = document.getElementById("jubilee");
const monash = document.getElementById("monash");
jubil.style.visibility = "hidden";
var intervalConsoleID;

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

    const monashEdu = edu.getBoundingClientRect();
    if (currentScrollPos + window.innerHeight >= monashEdu.top && gpaLoaded === false) {
        var gpaProg = document.getElementById("gpaProgress");
        var gpa = 3.2/4 * 100;
        increaseProgress(gpaProg, gpa, 1);
    }

    if (currentScrollPos + window.innerHeight >= monashEdu.top && cgpaLoaded === false) {
        var cgpaProg = document.getElementById("cgpaProgress");
        var cgpa = 3.6/4 * 100;
        increaseProgress(cgpaProg, cgpa, 2);
    }
}

function increaseProgress(obj, val, choice){
    var value = 0;
    var maximumWidth = 0
    //1 means GPA
    if (choice === 1){
        value = val/100 * 4;
        maximumWidth = 4;
        gpaLoaded = true;
    }else if (choice === 2){ //2 means cGPA
        value = val/100 * 4;
        maximumWidth = 4;
        cgpaLoaded = true;
    }
    var counter = 0;

    obj.style.width = "0%";
    obj.textContent = value + "/"+ maximumWidth;
    obj.style.color="white";
    obj.style.textAlign = "center";
    setInterval(increase, 20);
    function increase(){
        if (counter < val){
            counter++;
            obj.style.width = counter +"%";
        }
    }
}

selectJubil.addEventListener("click", function(){
    if (jubil.style.visibility === "hidden") {
        jubil.style.visibility = "visible";
        selectJubil.style.filter = "brightness(100%)";
        monash.style.visibility = "hidden";
        selectMonash.style.filter = "brightness(50%)";
    }
})

selectMonash.addEventListener("click", function(){
    if(monash.style.visibility === "hidden"){
        monash.style.visibility = "visible";
        selectMonash.style.filter = "brightness(100%)";
        jubil.style.visibility = "hidden";
        selectJubil.style.filter = "brightness(50%)";

        var gpaProg = document.getElementById("gpaProgress");
        var gpa = 3.2/4 * 100;
        increaseProgress(gpaProg, gpa, 1);

        var cgpaProg = document.getElementById("cgpaProgress");
        var cgpa = 3.6/4 * 100;
        increaseProgress(cgpaProg, cgpa, 2);
    }
})

window.addEventListener('scroll', scrollAction);


// Console related JS here
var consoleExp = document.getElementById("console");
const msg = document.getElementById("experience");

var txt = [
  "Joget Inc",
  "Worked as a Software Developer Intern. Initially was placed as a product " 
  + "specialist but was moved to the Product Development Team, where my duty was more "
  + "of a front end. I improved and enhanced some of their available elements in their "
  + "product, Joget DX. In essence, Joget DX is a web-based visual approach empowers "
  + "non-coders to build and maintain apps anytime, anywhere. As a software developer intern at Joget "
  + "these were the tasks handed to me: ",
  "Improved the design of the select box",
  "Added full screen functionality for their signature pad",
  "Added numpad to their text field if number formatting is turned on"
]   

var docfrag = document.createDocumentFragment();
var currentIndex = 0;

function updateScreen() {
  if (currentIndex < txt.length) {
    var p = document.createElement("p");
    if(currentIndex == 1){
        p.textContent = "> " + txt[currentIndex];
        p.style.paddingLeft = "5%";
        p.style.margin = "0px 0px";
        p.style.textAlign = "justify";
    }else if(currentIndex > 1){
        p.textContent = "-> " + txt[currentIndex];
        p.style.paddingLeft = "10%";
        p.style.margin = "0px 0px";
    } else{
        p.textContent = "> " + txt[currentIndex];
        p.style.margin = "0px 0px";
    }
    docfrag.appendChild(p);
    consoleExp.appendChild(p);
    currentIndex++;
  } else {
    clearInterval(intervalConsoleID);
  }
}

// Start displaying text line by line
var intervalConsoleID = window.setInterval(updateScreen, 600);

const targetElement = document.getElementById('experience');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // If the element is in the viewport (user has viewed it)
    if (entry.isIntersecting) {
      // Start running the updateScreen function at intervals
      intervalConsoleID = window.setInterval(updateScreen, 1000);
    }
    else {
        // If the element is not in the viewport, clear the interval
        clearInterval(intervalConsoleID);
      }
  });
});

// Start observing the target element
observer.observe(targetElement);

