function  getKeyValue(){
    document.addEventListener('keyup',(event)=>{
        const playerPressed=event.key.toUpperCase();
        const currentAlphabet =document.getElementById('current-alphabet');
        const targetAlphabet = currentAlphabet.innerText;
        
        if(targetAlphabet===playerPressed){
            //  console.log('got it');
             let score=getScore();
             // console.log(targetAlphabet.toLowerCase());
             removeBackgroundColor(targetAlphabet.toLowerCase());
             continueGame();
             score=score+1;
             setScore(score);      
        }else{
            //  console.log('not got it');
             let life=getLife();
             life=life-1;
             if(life>0){
                 setLife(life);
             }else{
                 let score=getScore();
                 setFinalScore(score);
                 hideElementByClass('playground-view');
                 showElementByClass('score-view');
             }
             
        }
        
     });
}

function continueGame(){
    const randomAlphabet =getRandomAlphabet();
    const currentAlphabet =document.getElementById('current-alphabet');
    currentAlphabet.innerText=randomAlphabet.toUpperCase();
    addBackgroundColor(randomAlphabet);
}

function play(){
    hideElementByClass('home-view');
    showElementByClass('playground-view');
    getKeyValue();
    continueGame();
}

function reset(){
    const currentAlphabet =document.getElementById('current-alphabet');
    const targetAlphabet = currentAlphabet.innerText;
    removeBackgroundColor(targetAlphabet.toLowerCase());
    setLife(3);
    setScore(0);
    hideElementByClass('score-view');
    showElementByClass('home-view');
}