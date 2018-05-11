const movingObject = document.querySelector('.moving-object');
const selection = document.querySelector('select');


function applyClass(){
    let userChoice = document.querySelector('.animation-selection').value;
    let text = document.querySelector('h1');

    text.classList.add(userChoice);
    
    setTimeout(() => {
        text.classList.remove(userChoice);
    }, 3000)
}








