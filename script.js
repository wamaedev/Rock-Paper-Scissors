function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber < 1/3) {
    return "rock";
  } else if (randomNumber < 2/3) {
    return "paper";
  }else{
    return "scissors";
  }
};


function getHumanChoice() {
  let humanChoice = prompt("Please enter: Rock, Paper, or Scissors").toLowerCase();
  if(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors"){
    return "Please enter a valid option!";
  }else{
    return humanChoice;
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
 
  if (humanChoice === computerChoice) {
    return "That was a tie!";
  };

  if(humanChoice === "rock"){
    if(computerChoice === "paper"){
      computerScore++;
      return "You lose! Paper beats Rock!";
    }else {
      if(computerChoice === "scissors"){
        humanScore++;
        return "You win! Rock beats Scissors!"
      }
    }
  };

  if(humanChoice === "paper"){
    if(computerChoice === "rock"){
      humanScore++;
      return "You win! Paper covers Rock!!"
    }else {
      if(computerChoice === "scissors"){
        computerScore++;
        return "You lose! Scissors cuts Paper!"
      }
    }
  };

  if(humanChoice === "scissors"){
    if(computerChoice === "paper"){
      humanScore++;
      return "You win! Scissors cuts Paper!"
    } else {
      if(computerChoice === "rock"){
        computerScore++;
        return "You lose! Rock beats Scissors!"
      }
    }
  };
}


function playGame(){
  
  for(let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }

  if(humanScore > computerScore ){
    console.log("You win!");
  } else if(computerScore > humanScore){
    console.log("You lose!");
  }else{
    console.log("That was a tie!");
  }

}

playGame();