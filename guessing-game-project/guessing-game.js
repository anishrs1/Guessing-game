

let secretNumber = 10;

function checkGuess(num){
    if(num>secretNumber){
        console.log("Too high.");
        return false;
    }
    if(num<secretNumber){
        console.log("Too low.");
        return false;
    }
    if(num === secretNumber){
        console.log("Correct!");
        return true;
    }
}

console.log(checkGuess(42));
console.log(checkGuess(10));
console.log(checkGuess(5));