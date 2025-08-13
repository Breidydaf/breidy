let secretNumber;
let attempts;

function startGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("guess").value = "";
}

document.getElementById("tryBtn").addEventListener("click", function() {
    const guessInput = document.getElementById("guess");
    const guess = Number(guessInput.value);

    if (!guess) {
        alert("Por favor, ingresa un número.");
        return;
    }

    attempts++;

    if (guess < secretNumber) {
        document.getElementById("message").textContent = "El número secreto es mayor.";
    } else if (guess > secretNumber) {
        document.getElementById("message").textContent = "El número secreto es menor.";
    } else {
        document.getElementById("message").textContent = `¡Felicidades! Adivinaste en ${attempts} ${attempts === 1 ? 'intento' : 'intentos'}.`;
    }

    guessInput.value = "";
});

document.getElementById("resetBtn").addEventListener("click", startGame);

startGame();
