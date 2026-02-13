function getComputerChoice(){
  let randomNumber = Math.random();

  if (randomNumber < 1/3){
    return "rock";
  } else if (randomNumber < 2/3){
    return "paper";
  }else{
    return "scissors";
  }
};
let computerChoice = getComputerChoice();
console.log(computerChoice);

function getHumanChoice(){
  let humanChoice = prompt("Please enter: Rock, Paper, or Scissors").toLocaleLowerCase();
  if(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors"){
    return "Please enter a valid option!";
  }else{
    return humanChoice;
  }
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

