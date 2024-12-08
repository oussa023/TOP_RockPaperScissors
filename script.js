const buttonOne = document.getElementsByClassName("buttonOne");
const score = document.createElement("div");
const body = document.querySelector("body");

for(let i = 0;i < buttonOne.length; i++){
    buttonOne[i].addEventListener("click", (e) => {
        console.log(playRound(e.target.id, getComputerChoice()));
    });
    
}
if(humanScore === 5)
{
    score.textContent = `You WON....!`;
}
else if (computerScore === 5)
{
    score.textContent = "the computer WON..... !";
}
console.log("khdam");

function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    return(choice[Math.floor(Math.random() * 3)]);
}

// function getHumanChoice(){
//     while(1)
//     {
//         let HumanInput = String(prompt("this is the Rock Paper Scissors game You are playing against me\n enter ur choice...")).toLowerCase();
//         switch(HumanInput){
//             case "rock":
//             case "paper":
//             case "scissors":
//                 return(HumanInput);
//             default:
//                 alert("enter a valid choice");
            
//         }
//     }
// }


// function playGame(){
    var computerScore = 0;
    var humanScore = 0;
   
    function playRound(humanChoice, computerChoice){
        if(humanChoice == computerChoice)
        {
            score.textContent = `its egality you both chose ${humanChoice}...`;
            body.append(score);
        }
        switch(true){
            case(humanChoice == "rock" && computerChoice == "scissors"):
            case(humanChoice == "scissors" && computerChoice == "paper"):
            case(humanChoice == "paper" && computerChoice == "rock"):
            {
                humanScore += 1;
                score.textContent = `you won... ${humanChoice} beats ${computerChoice}.  your score = ${humanScore} computer score = ${computerScore}`;
                body.append(score);
                break;
                // return(`you won... ${humanChoice} beats ${computerChoice}.  your score = ${humanScore} computer score = ${computerScore}`);
            }
            case(computerChoice == "rock" && humanChoice == "scissors"):
            case(computerChoice == "scissors" && humanChoice == "paper"):
            case(computerChoice == "paper" && humanChoice == "rock"):
            {
                computerScore += 1;
                score.textContent = `you lost... ${computerChoice} beats ${humanChoice}.  your score = ${humanScore} computer score = ${computerScore}`;
                body.append(score);
                break;
                // return(`you lost... ${computerChoice} beats ${humanChoice}.  your score = ${humanScore} computer score = ${computerScore}`);   
            }
        }
        if (humanScore === 5) {
            score.textContent = `You won the game! Final score: ${humanScore} - ${computerScore}`;
            disableGame();
        } else if (computerScore === 5) {
            score.textContent = `You lost the game! Final score: ${humanScore} - ${computerScore}`;
            disableGame();
        }
    }
    
    function disableGame(){
        // setTimeout(4000);
        humanScore = 0;
        computerScore = 0;
        setTimeout(() => {
            score.textContent = "Lets start again buddyyyy.......!";
          }, 5000);
    }
//     for(let i = 0; i < 5; i++)
//     {
        
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(humanSelection, computerSelection));
//     }
// }

// playGame();