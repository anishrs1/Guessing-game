//import the readline module into our file
const readline = require('readline');

//create an interface where we can talk w user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

let secretNumber = 10;

function checkGuess(num) {
    let number = Number(num);

    if (number>secretNumber) {
        console.log("Too high.");
        return false;
    }
    if (number<secretNumber) {
        console.log("Too low.");
        return false;
    }
    if (number === secretNumber) {
        console.log("Correct!");
        return true;
    }
}

//Test calls for checkGuess
// console.log(checkGuess('42'));
// console.log(checkGuess('10'));
// console.log(checkGuess('5'));
