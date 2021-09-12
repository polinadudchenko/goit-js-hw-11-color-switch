const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548',];

let colorChanger = 0;

const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
startBtn.addEventListener('click', changeColor)
stopBtn.addEventListener('click', stopChangeColor)


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function recieveColor() {
    const randomColorIndex = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = `${colors[randomColorIndex]}`
}

function changeColor() {
    colorChanger = setInterval(recieveColor, 1000);
    startBtn.disabled = true;
}

function stopChangeColor(){
    clearInterval(colorChanger)
    startBtn.disabled = false;
}