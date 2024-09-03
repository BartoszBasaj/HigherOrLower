const data = {
    'Item1': 1000,
    'Item2': 1500,
    'Item3': 500,
    'Item4': 2000
};

let score = 0;
let items = Object.keys(data);

const scoreElement = document.getElementById('score');
const resultElement = document.getElementById('result');
const compareAElement = document.getElementById('compare-a');
const compareBElement = document.getElementById('compare-b');
const playAgainButton = document.getElementById('play-again');

function updateScore() {
    scoreElement.textContent = `Current score: ${score}`;
}

function getRandomItems() {
    const [first, second] = items.sort(() => 0.5 - Math.random()).slice(0, 2);
    return { first, second };
}

function displayItems() {
    const { first, second } = getRandomItems();
    compareAElement.textContent = `Compare A: ${first}`;
    compareBElement.textContent = `Against B: ${second}`;
    compareAElement.dataset.item = first;
    compareBElement.dataset.item = second;
}

function checkWinner(choice) {
    const first = compareAElement.dataset.item;
    const second = compareBElement.dataset.item;

    if ((choice === 'A' && data[first] > data[second]) ||
        (choice === 'B' && data[first] < data[second])) {
        resultElement.textContent = "Yes, you are right!";
        score += 1;
    } else {
        resultElement.textContent = `You lose with ${score} point${score !== 1 ? 's' : ''}`;
        score = 0;
    }
    updateScore();
}

document.getElementById('button-a').addEventListener('click', () => {
    checkWinner('A');
    displayItems();
});

document.getElementById('button-b').addEventListener('click', () => {
    checkWinner('B');
    displayItems();
});

playAgainButton.addEventListener('click', () => {
    score = 0;
    updateScore();
    displayItems();
    playAgainButton.style.display = 'none';
    resultElement.textContent = '';
});

// Initial setup
updateScore();
displayItems();
