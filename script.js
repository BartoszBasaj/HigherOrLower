const data = {
    "Kim Kardashian": 3000000,
    "Cristiano Ronaldo": 5000000,
    "Taylor Swift": 6000000,
    "Ariana Grande": 3600000,
    "Elon Musk": 2000000,
    "Jeff Bezos": 1200000,
    "PewDiePie": 1500000,
    "MrBeast": 2000000,
    "iPhone": 9000000,
    "Samsung Galaxy": 1800000,
    "PlayStation 5": 1500000,
    "Xbox Series X": 800000,
    "TikTok": 10000000,
    "Instagram": 8000000,
    "ChatGPT": 5000000,
    "Siri": 1200000,
    "Breaking Bad": 1000000,
    "Game of Thrones": 2000000,
    "Avengers: Endgame": 2500000,
    "Titanic": 1500000,
    "Harry Potter": 7000000,
    "Lord of the Rings": 1000000,
    "Friends": 2000000,
    "The Office": 1800000,
    "Nike": 7000000,
    "Adidas": 3500000,
    "Coca-Cola": 2000000,
    "Pepsi": 1000000,
    "McDonald's": 4000000,
    "Burger King": 800000,
    "Tesla": 4000000,
    "BMW": 2500000,
    "NBA": 1000000,
    "NFL": 900000,
    "LeBron James": 2000000,
    "Michael Jordan": 1500000,
    "Lionel Messi": 4000000,
    "Super Bowl": 3000000,
    "World Cup": 5000000,
    "Paris": 6000000,
    "New York": 4000000,
    "Eiffel Tower": 1000000,
    "Statue of Liberty": 800000,
    "Maldives": 1000000,
    "Hawaii": 2000000,
    "Great Wall of China": 1000000,
    "Machu Picchu": 600000,
    "The Beatles": 2000000,
    "Rolling Stones": 1500000,
    "Billie Eilish": 4000000,
    "Post Malone": 2000000,
    "Drake": 6000000,
    "Kanye West": 7000000,
    "Thriller": 2000000,
    "The Dark Side of the Moon": 1000000,
    "Fortnite": 10000000,
    "Minecraft": 12000000,
    "Call of Duty": 3000000,
    "Battlefield": 800000,
    "League of Legends": 5000000,
    "Dota 2": 1200000,
    "Super Mario": 3000000,
    "The Legend of Zelda": 2000000
};

let score = 0;
let nextRound = true;

const optionAElement = document.getElementById('compareA');
const optionBElement = document.getElementById('compareB');
const scoreElementcd  = document.getElementById('score');
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
