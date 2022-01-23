
var lost = false;
var score = 0

window.onload = function(){
    document.getElementById("start").addEventListener("click", started);
    document.getElementById("end").addEventListener("mouseover", ended);
    var boundaries = document.querySelectorAll('#game div.boundary');
    for(var i = 0; i<boundaries.length;i++){
        boundaries[i].onmouseover = boundariesCrossed;
    }
}

function boundariesCrossed(){
    lost = true;
    score -= 10;
    document.getElementById("status").innerHTML = "hehe, you lost :(";
    var boundaries = document.querySelectorAll('#game div.boundary');
    for(var i = 0; i<boundaries.length;i++){
        boundaries[i].classList.add("youlose");
    }
}

function started(){
    lost = false;
    // document.getElementById("game").classList.add("start")
    document.getElementById("status").innerHTML = 'Begin by moving your mouse over the "S".'
    var boundaries = document.querySelectorAll('#game div.boundary');
    for(var i = 0; i<boundaries.length;i++){
        boundaries[i].classList.remove("youlose");
    }
}

function ended(){
    if(lost==false){
        score +=5
        document.getElementById("status").innerHTML = "You won :/"
        // document.getElementById("game").classList.add("end");
    }
}
