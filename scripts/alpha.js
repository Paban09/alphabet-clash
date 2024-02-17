function continueGame(){
    const randomAlphabet =getRandomAlphabet();
    const currentAlphabet =document.getElementById('current-alphabet');
    currentAlphabet.innerText=randomAlphabet.toUpperCase();
    addBackgroundColor(randomAlphabet);
}

function play(){
    hideElementByClass('home-view');
    showElementByClass('playground-view');
    continueGame();
}