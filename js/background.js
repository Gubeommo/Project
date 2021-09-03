const images = ["0.jpg","1.jpg","2.jpg"];
const happyButton = document.querySelector("#happy");
const sadButton = document.querySelector("#sad");
const angryButton = document.querySelector("#angry");
const box = document.querySelector("#status-table");
const hiddenbox = document.querySelector("#status-div");

const randImage = images[Math.floor(Math.random()* images.length)];

const HIDDEN_CLASSNAMES = "hidden";
const backImag = document.createElement("img");

function hiddenstatus(){
    box.style.removeProperty("display");
    box.classList.add(HIDDEN_CLASSNAMES);
    hiddenbox.classList.add(HIDDEN_CLASSNAMES);
}

function happyImage(){
  hiddenstatus()
  document.body.style.backgroundImage = "url('http://file.instiz.net/data/file/20130518/5/2/0/5201eac82c79aaaff6d6016440d95fba')";
}

backImag.src = `/img/${randImage}`;
happyButton.addEventListener("click",happyImage);
//document.body.appendChild(backImag);

