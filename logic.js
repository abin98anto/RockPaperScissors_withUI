console.log('Rock Paper Scissors');
let cChoice;
        function randomChoice() // this function makes choice for the computer.
        {
            let r = Math.floor(Math.random()*3);
            
            if (r == 0)
            {
                cChoice = 'Rock';
            }else if (r == 1) {
                cChoice = 'Paper';
            }else {
                cChoice = 'Scissors';
            }
            //return cChoice;
            return console.log(cChoice);
        }
        
        let cWins = 0; // score counter for the computer
        let uWins = 0; // score counter for the user
        let T = 0; // score counter for tie games 
        let uChoice; // to register user choice
        
        document.querySelectorAll('button').forEach(occurence => { // takes any occurence regarding 'button'.
            let id = occurence.getAttribute('id');  //  get the 'id' of the clicked 'button'.
            occurence.addEventListener('click', function () { // listens for 'occurence' that is 'click'.
                //uChoice = id; // moves value of the 'button id' to 'uChoice' global variable.
                if (id == 'urock'){id = 'rock';} // changes uChoice to appropriate input 
                else if (id == 'upaper'){id = 'paper';} // changes uChoice to appropriate input 
                else {id = 'scissors';} // changes uChoice to appropriate input 
                getOut(id); // takes the global variable 'uChoice' outside this eventListner function.
            });
        }); 
        function getOut (u){ // takes the global variable 'uChoice' outside the above eventListner function.
        console.log(u);
        u = uChoice;
        
        return uChoice;
        //console.log(uChoice);
        }
        console.log(uChoice);