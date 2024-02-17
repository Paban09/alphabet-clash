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
    console.log(key.classList.add('bg-orange-400'));
}