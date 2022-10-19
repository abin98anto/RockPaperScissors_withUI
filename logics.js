let cChoice; // computer choice.
let uChoice; // user choice.
let id;
let cWins = 0; // computer wins total.
let uWins = 0; // user wins total.

const paperChoice = document.getElementById('upaper'); // takes paper button.
const scissorChoice = document.getElementById('uscissors'); // takes scissors button.
const rockChoice = document.getElementById('urock'); // takes rock button.
const userScore = document.getElementById('userWins');
const computerScore = document.getElementById('computerWins');
const result_P = document.querySelector(".roundResult >p");
const resultList = document.getElementById('result-list');
const resultdiv = document.getElementById('result');
const result_B = document.querySelector("#result-board >p");
const roundBackground = document.querySelector(".roundResult");

function randomChoice(){ // function to get computer choice.
    let r = Math.floor(Math.random()*3); // picks a random number between 0,1 and 3.
    if(r==0){ // this if statements give appropriate names to 'cChoice' after 'Math.random' generates a random number. 
        cChoice='Rock';
    }else if(r==1){
        cChoice='Paper';
    }else{
        cChoice='Scissors';
    }
    return cChoice; // sends the value of 'cChoice' outside this function.
}
// randomChoice();
// console.log(cChoice);

function theGame(uChoice){ // in this function the entire gameplay happens. The uChoice is brought from the 'buttonChoice' function.
        let T=0;
        cChoice = randomChoice(); // brings in the computer's selection.
        computerSelection(cChoice);
        if (cChoice == 'Rock'){
            if (uChoice == 'Scissors'){
                //scoreCounter_c();
                cWins++;
                result_P.innerHTML="ROCK BEATS SCISSORS.COMPUTER WINS !!!";
            } else if (uChoice == 'Paper') {
                uWins++;
                //scoreCounter_u();
                result_P.innerHTML="PAPER BEATS ROCK.USER WINS !!!";
            }else{
                result_P.innerHTML="BOTH CHOSE ROCK.TIE GAME";
            }
        //scoreBoard(cWins,uWins);
        }
    if (cChoice == 'Paper'){
        if (uChoice == 'Rock'){
            cWins++;
            //scoreCounter_c();
            result_P.innerHTML="PAPER BEATS ROCK.COMPUTER WINS !!!";
        } else if (uChoice == 'Scissors') {
            uWins++;
            //scoreCounter_u();
            result_P.innerHTML="SCISSORS BEATS PAPER.USER WINS !!!";
        }else{
            T=T+1;
            result_P.innerHTML="BOTH CHOSE PAPER.TIE GAME";
        }
        //scoreBoard(cWins,uWins);
    }
    if (cChoice == 'Scissors'){
        if (uChoice == 'Paper'){
            //scoreCounter_c();
            cWins++;
            result_P.innerHTML="SCISSORS BEATS PAPER.COMPUTER WINS !!!";
        } else if (uChoice == 'Rock') {
            uWins++;
            //scoreCounter_u();
            result_P.innerHTML="ROCK BEATS SCISSORS.USER WINS !!!";
        }else{
            T=T+1;
            result_P.innerHTML="BOTH CHOSE SCISSORS.TIE GAME";
        }
        //scoreBoard(cWins,uWins);
    }
    scoreBoard(cWins,uWins);
    }
    //scoreBoard(cWins,uWins);
    //console.log('the user choice: '+uChoice+'   the computer choice: '+cChoice);
    //console.log('Computer:'+cWins+'  User:'+uWins+'  Tied:'+T);

function buttonChoice(){
    
    rockChoice.addEventListener('click', function () {
        rockChoice.style.backgroundColor='green';
        uChoice = 'Rock';
        theGame(uChoice);
        //changeBackground(uChoice);
    });
    paperChoice.addEventListener('click', function () {
        paperChoice.style.backgroundColor='green';
        uChoice = 'Paper';
        theGame(uChoice); 
        //changeBackground(uChoice);
    });
    scissorChoice.addEventListener('click', function () {
        scissorChoice.style.backgroundColor='green';
        uChoice = 'Scissors';
        theGame(uChoice); 
        //changeBackground(uChoice);
    });
}
buttonChoice();

function scoreBoard(cWins,uWins) {
    computerScore.innerHTML = cWins;
    userScore.innerHTML = uWins;
    cWins++;
    uWins++;
    if(cWins==6){
        result_P.innerHTML="THE COMPUTER WINS";
    }else if(uWins==6){
        result_P.innerHTML="THE USER WINS";
        
    }
}

function rock(){
    paperChoice.style.backgroundColor='white';
    scissorChoice.style.backgroundColor='white';
}
function paper(){
    rockChoice.style.backgroundColor='white';
    scissorChoice.style.backgroundColor='white';
}
function scissors(){
    paperChoice.style.backgroundColor='white';
    rockChoice.style.backgroundColor='white';
}

const computerRock = document.getElementById("crock");
const computerPaper = document.getElementById("cpaper");
const computerScissors = document.getElementById("cscissors");

function computerSelection(cChoice){
    if(cChoice=='Rock'){
        computerRock.style.backgroundColor='green';
        computerPaper.style.backgroundColor='white';
        computerScissors.style.backgroundColor='white';
    }else if(cChoice=='Paper'){
        computerRock.style.backgroundColor='white';
        computerPaper.style.backgroundColor='green';
        computerScissors.style.backgroundColor='white';
    }else{
        computerRock.style.backgroundColor='white';
        computerPaper.style.backgroundColor='white';
        computerScissors.style.backgroundColor='green';
    }
}

// function scoreCounter_u(){
//     uWins++;
//     scoreBoard(uWins);
// }
// function scoreCounter_c(){
//     cWins++;
//     scoreBoard(cWins);
// }