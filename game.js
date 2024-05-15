
//QUESTION ONE
// function declaration

function comparison(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return "There is a tie"
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        return "You win!";
      } else {
        return "Computer wins!";
      }
}

//function expression
const playGame = (userChoice) => {
    const computerChoice = getComputerChoice();
    const result = comparison(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, result);
  };

//function arrow function
const getComputerChoice = () => {
    const randomNum = Math.random();
    if (randomNum < 0.34) return "rock";
    else if (randomNum < 0.67) return "paper";
    else return "scissors";
  };
// anonymous function

const userGameChoice = () => {
    return ("rock, paper, or scissors?");
  };

  const displayResult = (userChoice, computerChoice, result) => {
    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(`Result: ${result}`);
  };
  const userChoice = userGameChoice();
  playGame(userChoice);


  //QUESTION TWO

function sumOfNumbers(numbers){
    if (numbers === ""){
        return 0;        
    }
    const numbersString = numbers.join(",");   

    const numbersArray = numbersString.replace(/\D/g, "");

    const finalNumbersArray = numbersArray.split("");

    let total = 0;

    for(let i= 0; i<finalNumbersArray.length; i++){
        total += parseInt(finalNumbersArray[i])
        
    }
    return total

    }
//     let numbers = [1,2,.56,3,4,5,6,7,8,9,10]   
  

// console.log(sumOfNumbers(numbers));