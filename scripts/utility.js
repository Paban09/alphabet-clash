function hideElementByClass(value){
    const view = document.getElementById(value);
    view.classList.add('hidden');
}

function showElementByClass(value){
    const view = document.getElementById(value);
    view.classList.remove('hidden');
}

function getRandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabet=alphabetString.split('');
    const index=Number.parseInt(Math.random()*25);
    const randomAlphabet=(alphabet[index]);
    return randomAlphabet; 
}

function addBackgroundColor(id){
    const key=document.getElementById(id);
    key.classList.add('bg-orange-400');
}

function removeBackgroundColor(id){
    const element=document.getElementById(id);
    element.classList.remove('bg-orange-400');
}

function getScore(){
    const score = document.getElementById('score');
    return (parseInt(score.innerText));
}

function setScore(value){
    const scoreSection = document.getElementById('score');
    scoreSection.innerText=value;
}

function getLife(){
    const life = document.getElementById('life');
    return (parseInt(life.innerText));
}

function setLife(value){
    const lifeSection = document.getElementById('life');
    lifeSection.innerText=value;
}

function setFinalScore(value){
    const scoreSection = document.getElementById('final-score');
    scoreSection.innerText=value;
}