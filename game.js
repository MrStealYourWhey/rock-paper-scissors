play();

let computerScore = 0;
let userScore = 0;
let roundCount = 0;
function game (userSelection)
{
    let choices = ["rock", "paper", "scissors"];
    function computerPlay()
    {
        let computerChoice = choices[Math.floor(Math.random()*choices.length)];
        if (computerChoice === choices[0]){
                return "Rock";
        }
        else if (computerChoice === choices[1]){
            return "Paper";
        }
        else{
            return "Scissors";
        }
    }
    let computerSelection = computerPlay()
    function playRound(computerSelection)
    {
        if (computerSelection === userSelection){
            document.getElementById("result").innerHTML = ("Draw")
        }
        else if ((computerSelection === "Rock" && userSelection === "Scissors") || (computerSelection === "Paper" && userSelection === "Rock") || (computerSelection === "Scissors" && userSelection === "Paper")){
            document.getElementById("result").innerHTML = ("You lose! " + computerSelection + " beats " + userSelection + ".")
            computerScore++
        }
        else{
            document.getElementById("result").innerHTML = ("You win! " + userSelection + " beats " + computerSelection + ".")
            userScore++
        }
    roundCount += 1; 
    document.getElementById("uscore").innerHTML = userScore;
    document.getElementById("cscore").innerHTML = computerScore;
    document.getElementById("round").innerHTML = roundCount;    
    }
    playRound(computerSelection)   
}

function play () {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let userSelection = button.innerHTML;
            game(userSelection);
        })
    })
}

rscore.addEventListener('click', reset);

function reset() {
    userScore = 0;
    computerScore = 0;
    roundCount = 0;
    document.getElementById("uscore").innerHTML = userScore;
    document.getElementById("cscore").innerHTML = computerScore; 
    document.getElementById("result").innerHTML = "";
    document.getElementById("round").innerHTML = roundCount;
}


