"use strict";

const data = {
    "riddle": [{
            "tanong": "Alalay kong bilugan, puro tubig ang tiyan.",
            "sagot": "Batya"
        },
        {
            "tanong": "Isang butil ng palay, sakop ang buong buhay.",
            "sagot": "Bumbilya"
        },
        {
            "tanong": "Isang pirasong tela lang ito, sinasaluduhan ng mga sundalo.",
            "sagot": "Watawat"
        }
    ]
}


let randomNumber = Math.trunc(Math.random() * 3);
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

const changeBackground = function(color){
    document.querySelector('body').style.backgroundColor = color;
}

const displayScore = function(score){
    document.querySelector('.score').textContent = score;
}

const displayHighScore = function(highscore){
    document.querySelector('.highscore').textContent = highscore;
}


const questionBox = document.querySelector('.tanong');
const submitButton = document.querySelector('.check');
const resetButton = document.querySelector('.bagongTanong');

window.addEventListener('load', function () {
    // LOAD QUESTION
    questionBox.textContent = `"${data.riddle[randomNumber].tanong}"`;
    // LOAD ANSWER
    let answer = data.riddle[randomNumber].sagot;

    submitButton.addEventListener('click', function () {
        // GET ANSWER
        const guess = document.querySelector('.sagot').value;


        if(!guess){
            displayMessage("Walang nakalagay na sagot...");
            changeBackground('#222');
        }

        else if (guess.toLowerCase() !== answer.toLowerCase()) {
            changeBackground('#710000');
            
            if(score > 1){
                score--;
                displayScore(score);
                displayMessage('Mali ang sagot');
            } else{
                displayMessage('Natalo ka na');
                displayScore(0)
            }
        }
        
        else if (guess.toLowerCase() === answer.toLowerCase()) {
            displayMessage('Tama ang sagot!');
            changeBackground('#0D5D00');
            
            if(score > highscore){
                highscore = score;
                displayHighScore(highscore);
            }
        } 
    });

    resetButton.addEventListener('click', function(){
        score = 20;
        randomNumber = Math.trunc(Math.random() * 3);

        displayScore(20);
        changeBackground('#222');
        displayMessage('Panibagong Tanong');
        document.querySelector('.sagot').value = '';
        questionBox.textContent = `"${data.riddle[randomNumber].tanong}"`;
        answer = data.riddle[randomNumber].sagot.toLowerCase();
    })


})




const dynamicYear = document.querySelector('.dynamicYear');
const date = new Date();
const currDate = date.getFullYear();
dynamicYear.textContent = currDate;