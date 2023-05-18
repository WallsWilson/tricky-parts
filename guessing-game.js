function guessingGame() {
let randomNum = Math.floor(Math.random() * 100);
let guess = prompt('Guess a number between 0 and 100');
let guesses = 0;
let guessed = false;
let guessedNum = 0;
let guessedNums = [];
while (!guessed) {
    if (guess > randomNum) {
        alert('Too high');
        guess = prompt('Guess a number between 0 and 100');
        } else if (guess < randomNum) {
            alert('Too low');
            guess = prompt('Guess a number between 0 and 100');
            } else if (guess == randomNum) {
                alert('You guessed the number ' + randomNum);
                guessed = true;
                guessedNum = guess;
                guessedNums.push(guess);
                break;
                }
                guesses++;
                if (guesses > 9) {
                    alert('You ran out of guesses. The number was ' + randomNum);
                    break;
                }
}
}

module.exports = { guessingGame };
