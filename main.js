document.addEventListener('DOMContentLoaded', () => {
    let numberToGuess = Math.floor(Math.random() * 101);
    let lives = 10;

    const messageElement = document.getElementById('message');
    const livesElement = document.getElementById('lives');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const restartButton = document.getElementById('restart-button');

    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess)) {
            messageElement.textContent = 'Please enter a valid number.';
            return;
        }

        if (userGuess > numberToGuess) {
            lives--;
            messageElement.textContent = 'Your guess is above the number!';
        } else if (userGuess < numberToGuess) {
            lives--;
            messageElement.textContent = 'Your guess is below the number!';
        } else {
            messageElement.textContent = 'Nice!! You guessed the number!';
            restartButton.style.display = 'block';
            guessButton.disabled = true;
        }

        livesElement.textContent = 'Lives: ' + lives;

        if (lives === 0) {
            messageElement.textContent = 'Oh you loser!';
            restartButton.style.display = 'block';
            guessButton.disabled = true;
        }
    });

    restartButton.addEventListener('click', () => {
        numberToGuess = Math.floor(Math.random() * 101);
        lives = 10;
        messageElement.textContent = 'I have picked a number between 0 and 100. Can you guess it?';
        livesElement.textContent = 'Lives: ' + lives;
        guessButton.disabled = false;
        restartButton.style.display = 'none';
        guessInput.value = '';
    });
});
