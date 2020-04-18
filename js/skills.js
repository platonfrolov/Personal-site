let firsttime = true
checkAnimation()
function checkAnimation(){
    if (firsttime){
        firsttime = false;
        animateSkills();
    } 
}

function animateSkills(){
    showStripes()
    showSkills()
    animateCircles()
}

function showStripes(){
    l = document.getElementById("leftstripe");
    r = document.getElementById("rightstripe");
    l.animate({
        width: '100%'
    }, {
        duration: 1000
    })
}

function showSkills(){

}

function animateCircles(){

}