
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    timerId = setInterval(setBodyBG, 1000);
}
function setBodyBG() {
    document.body.style.backgroundColor = getRandomHexColor();
    startBtn.setAttribute("disabled", "disabled");
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

function onStopBtnClick(){
    clearInterval(timerId);
    startBtn.removeAttribute("disabled");
}