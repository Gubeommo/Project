const imagesList = ["http://file.instiz.net/data/file/20130518/5/2/0/5201eac82c79aaaff6d6016440d95fba","https://t1.daumcdn.net/cfile/tistory/2612954F5409265003?original","https://blog.kakaocdn.net/dn/bZRlDK/btqZtABmEHc/rWLD6yqsxYEsOJIKPeaiY0/img.jpg","","","","","",""];

const announcementMainList=["oh ! Great! So,,Shall we change the mood? ","Cool,, Sometimes I feel good, too. ","How about that? isn't cool?","","","","","",""];
const announcementSubList=["I have agood idea  you just enjoy!  ","When I watch Disney movies","I like the night view.","","","","","",""];
const happyButton = document.querySelector("#happy");
const sadButton = document.querySelector("#sad");
const angryButton = document.querySelector("#angry");
const hiddenbox = document.querySelector("#status-div");
const statusText = document.querySelector("#align-status-text");
const handleSpeak = document.querySelector("#speak");



//const randImage = images[Math.floor(Math.random()* images.length)];
let statusCondition = 0;
let randimages=0;

const HIDDEN_CLASSNAMES = "hidden";

const backImag = document.createElement("img");

function hiddenstatus(){
    hiddenbox.style.removeProperty("display");
    statusText.style.removeProperty("display");
    statusText.classList.add(HIDDEN_CLASSNAMES);
    hiddenbox.classList.add(HIDDEN_CLASSNAMES);

    setTimeout(chagneText,1000);
    setTimeout(chageimage,6000);

}

function chagneText(){
  handleSpeak.style.display = "flex";
  handleSpeak.classList.remove(HIDDEN_CLASSNAMES);
  const handleSpeakOne = document.querySelector("#speak h3:first-child");
  const handleSpeakTwo =document.querySelector("#speak h3:last-child");
  
  
  if (statusCondition === 0){
    const randAnnouncement = Math.floor(Math.random()*3);
    randimages = randAnnouncement;
    handleSpeakOne.innertext = announcementMainList[randAnnouncement];
    handleSpeakTwo.innertext= announcementSubList[randAnnouncement];

  }else if(statusCondition ===1){

  }else{

  }
}

function chageimage(){
  const randiamge = imagesList[randimages];
  document.body.style.backgroundImage = `url(${randiamge})`;
}



function happyImage(){
  statusCondition =0;
  hiddenstatus()
}


  

//backImag.src = `/img/${randImage}`;
happyButton.addEventListener("click",happyImage);
//document.body.appendChild(backImag);

