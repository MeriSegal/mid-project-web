
window.onload =changeImg1;


function changeImg1(){
    setTimeout(changeImg2, 3000)
    document.getElementById("revert").src= "images/250X110668568400.jpg";
    document.getElementById("title").innerHTML="טיפז"
}

function changeImg2(){
    setTimeout(changeImg3, 3000)
    document.getElementById("revert").src= "images/banner_atar.jpg";
    document.getElementById("title").innerHTML="קפה מעולה"
}

function changeImg3(){
    setTimeout(changeImg1, 3000)
    document.getElementById("revert").src= "images/paz_250x110103131473.jpg";
    document.getElementById("title").innerHTML="שטחי מסחר"
}