function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    return(choice[Math.floor(Math.random() * 3)]);
}

function getHumanChoice(){
    while(1)
    {
        let HumanInput = String(prompt("this is the Rock Paper Scissors game You are playing against me\n enter ur choice...")).toLowerCase();
        switch(HumanInput){
            case "rock":
            case "paper":
            case "scissors":
                return(HumanInput);
            default:
                alert("enter a valid choice");
            
        }
    }
}




const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));

function playGame(){
    var computerScore = 0;
    var humanScore = 0;
    function playRound(humanChoice, computerChoice){
        if(humanChoice == computerChoice)
            return(`its egality you both chose ${humanChoice}...`);
        switch(true){
            case(humanChoice == "rock" && computerChoice == "scissors"):
            case(humanChoice == "scissors" && computerChoice == "paper"):
            case(humanChoice == "paper" && computerChoice == "rock"):
            {
                humanScore++;
                return(`you won... ${humanChoice} beats ${computerChoice}`);
            }
            case(computerChoice == "rock" && humanChoice == "scissors"):
            case(computerChoice == "scissors" && humanChoice == "paper"):
            case(computerChoice == "paper" && humanChoice == "rock"):
            {
                computerScore++
                return(`you lost... ${computerChoice} beats ${humanChoice}.  your score = ${humanScore} computer score = ${computerScore}`);   
            }
        }
    }
}

// console.log(getHumanChoice());