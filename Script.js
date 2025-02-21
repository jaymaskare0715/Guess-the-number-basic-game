let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let userGuess = document.getElementById("guess").value;
    let message = "";

    if (userGuess == randomNumber) {
        message = "Congratulations! You guessed it right!";
    } else if (userGuess > randomNumber) {
        message = "Too high! Try again.";
    } else {
        message = "Too low! Try again.";
    }

    document.getElementById("message").innerText = message;
}
