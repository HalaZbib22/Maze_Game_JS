window.onload = function () {
  var lost = false;
  var score = 0;
  var Status = document.getElementById("status");
  var S = document.getElementById("start");
  var E = document.getElementById("end");
  var boundaries = document.getElementsByClassName("boundary");
  var box = document.getElementById("game");
  S.addEventListener("click", started);
  boundaries[5].style.textAlign = "center";
  boundaries[5].innerText = score;

  function started() {
    lost = false;
    E.addEventListener("mouseover", ended);
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].addEventListener("mouseover", boundariesCrossed);
      boundaries[i].style.backgroundColor = null;
    }
    Status.innerHTML = "Game in progress... ";
    box.addEventListener("mouseleave", boundariesCrossed);
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].classList.remove("youlose");
    }
  }

  function boundariesCrossed() {
    lost = true;
    score -= 10;
    box.removeEventListener("mouseleave", boundariesCrossed);
    Status.innerHTML = "hehe, you lost :'( | Press S to start over";
    boundaries[5].innerText = score;
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].removeEventListener("mouseover", boundariesCrossed);
      boundaries[i].classList.add("youlose");
    }
  }

  function ended() {
    box.removeEventListener("mouseleave", boundariesCrossed);
    E.removeEventListener("mouseover", ended);
    if (lost == false) {
      score += 5;
      Status.innerHTML = "You won :/ | Press S to start over";
      boundaries[5].innerText = score;
      for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeEventListener("mouseover", boundariesCrossed);
        boundaries[i].style.backgroundColor = "#88ff88";
      }
    } else {
      for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].style.backgroundColor = "#8888ff";
      }
    }
  }
};
