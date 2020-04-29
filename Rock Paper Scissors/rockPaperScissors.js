//testing 
//var userInput = 'scissors';

// determine valid input. give error if invalid
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      return 'error';
    }
  }
  
  
  // randomly generate computer choice
  const randomNum = Math.floor(Math.random() * 3);
  const getComputerChoice = () => {
  
    switch (randomNum) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      default:
        return 'error';
    }
  }
  /*Testing
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();
  
  console.log(`Player chose ${userChoice}`);
  console.log(`Computer chose ${computerChoice}`);
  */
  
  // compare answers to find winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'The game explodes! Player wins!';
    } else if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'Computer wins!';
        } else if (computerChoice === 'scissors') {
          return 'Player wins!';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'Computer wins!';
        } else if (computerChoice === 'rock') {
          return 'Player wins!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'Computer wins!';
        } else if (computerChoice === 'paper') {
          return 'Player wins!';
        }
    }
  }
  
  //testing
  // console.log(determineWinner(userChoice, computerChoice));
  
  
  // play game and output results
  function playGame(userChoice, computerChoice) {
    if (userChoice === 'error') {
      console.log('Error: Invalid input.');
    } else {
    console.log(`Player chose ${userChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    
    console.log(determineWinner(userChoice, computerChoice));
    }
  }
  
  // call the functions to process
  playGame(getUserChoice('SCISSORS'),getComputerChoice());