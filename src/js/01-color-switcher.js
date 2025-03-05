document.querySelector('button[data-start]').addEventListener('click', onButtonStart);
document.querySelector('button[data-stop]').addEventListener('click', onButtonStop);

let intervalId = null;
let isActive = false;

function onButtonStart() {
    if (isActive) return;

    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);

    isActive = true;
}

function onButtonStop() {
    clearInterval(intervalId);
    isActive = false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
   