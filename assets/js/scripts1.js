var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
    changeColor();
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
    changeColor();
}

function changeColor() {
    currentNumberWrapper.style.color = (currentNumber >= 0) ? 'black' : 'red';
}