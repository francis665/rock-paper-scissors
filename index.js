const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;

  }else{
    console.log('error!');
  }
}
console.log(getUserChoice('rock'));

const getComputerChoice = () =>{
 const randomNumber = Math.floor(Math.random() * 3);
switch (randomNumber){
  case 0:
  return 'rock';
  case 1:
  return 'paper';
  case 2:
  return 'scissors';
}
};

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'Tie!';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
    return 'The computer wins!'
    } else{
     return 'The user wins!';
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'The computer wins!';
    }else {
      return 'The user wins!';
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'The computer wins!';
    }else {
      return 'The user wins!';
    }
  }
}
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('scissors', 'paper'));
console.log(determineWinner('paper', 'scissors'));

const playGame = () =>{
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
console.log(determineWinner(userChoice, computerChoice));
};
playGame();
