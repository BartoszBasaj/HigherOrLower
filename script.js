const data = {
    "Kim Kardashian": 3000000,
    "Cristiano Ronaldo": 5000000,
    "Taylor Swift": 6000000,
    "Ariana Grande": 3600000,
    "Elon Musk": 2000000,
    "Jeff Bezos": 1200000,
    // ... reszta danych
};

let score = 0;
let nextRound = true;

document.addEventListener("DOMContentLoaded", function () {
    const optionAElement = document.getElementById('compareA');
    const optionBElement = document.getElementById('compareB');
    const scoreElement = document.getElementById('score');
    const restartContainer = document.getElementById('restart-container');
    const restartButton = document.getElementById('restart');

    function startGame() {
        score = 0;
        nextRound = true;
        restartContainer.classList.add('hidden');
        updateScore();
        generateRound();
    }

    function generateRound() {
        const items = Object.keys(data);
        const [first, second] = randomSample(items, 2);
        optionAElement.innerText = `Compare A: ${first}`;
        optionBElement.innerText = `Against B: ${second}`;

        document.getElementById('chooseA').onclick = () => checkWinner('A', first, second);
        document.getElementById('chooseB').onclick = () => checkWinner('B', first, second);
    }

    function checkWinner(choice, first, second) {
        if ((choice === 'A' && data[first] > data[second]) || (choice === 'B' && data[first] < data[second])) {
            score++;
            updateScore();
            generateRound();
        } else {
            gameOver();
        }
    }

    function updateScore() {
        scoreElement.innerText = `Score: ${score}`;
    }

    function gameOver() {
        nextRound = false;
        alert(`You lost! Your final score is ${score}`);
        restartContainer.classList.remove('hidden');
    }

    function randomSample(arr, num) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    restartButton.onclick = startGame;

    // Start the game initially
    startGame();
});
