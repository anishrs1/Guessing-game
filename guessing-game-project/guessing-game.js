//import the readline module into our file
const readline = require('readline');

//create an interface where we can talk w user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

let secretNumber = Math.floor(Math.random() * 101);//random number between 0 and 100

function checkGuess(num) {
    let number = Number(num);

    if (number > secretNumber) {
        console.log("Too high.");
        return false;
    }
    if (number < secretNumber) {
        console.log("Too low.");
        return false;
    }
    if (number === secretNumber) {
        console.log("Correct!");
        return true;
    }
}

function askGuess() {
    
    rl.question('Enter a guess: ', (answer) => {
        let correct = checkGuess(answer); //invokes checkGuess function
        if (!correct) {
            askGuess();
        } else {
            console.log('You win!')
            rl.close(); //closes interface
        }
      });
}

//Test calls for checkGuess
// console.log(checkGuess('42'));
// console.log(checkGuess('10'));
// console.log(checkGuess('5'));

//Testing askGuess/start the game (phase1)
console.log("I'm thinking of a number between 0 and 100...")
askGuess();
