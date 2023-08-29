
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
    console.log("Jubil", jubil.style.visibility === "hidden")
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
