// script.js

const dict = {
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

const stuff = Object.keys(dict);

let score = 0;
let correctAnswer = "";

function getRandomChoices() {
    const [first, second] = randomSample(stuff, 2);

    document.getElementById("optionA").textContent = first;
    document.getElementById("optionB").textContent = second;

    correctAnswer = dict[first] > dict[second] ? first : second;
}

function randomSample(arr, n) {
    const result = [];
    const taken = new Set();
    while (result.length < n) {
        const index = Math.floor(Math.random() * arr.length);
        if (!taken.has(index)) {
            result.push(arr[index]);
            taken.add(index);
        }
    }
    return result;
}

function checkAnswer(choice) {
    const optionA = document.getElementById("optionA");
    const optionB = document.getElementById("optionB");
    const resultMessage = document.getElementById("result-message");

    optionA.classList.remove("correct-answer", "wrong-answer");
    optionB.classList.remove("correct-answer", "wrong-answer");

    if (choice === correctAnswer) {
        score++;
        document.getElementById("score").textContent = `Current Score: ${score}`;
        resultMessage.textContent = "Correct!";
        resultMessage.style.color = "#28a745"; // Zielony kolor dla poprawnej odpowiedzi
        if (choice === optionA.textContent) {
            optionA.classList.add("correct-answer");
        } else {
            optionB.classList.add("correct-answer");
        }
    } else {
        resultMessage.textContent = "Wrong answer!";
        resultMessage.style.color = "#dc3545"; // Czerwony kolor dla błędnej odpowiedzi
        if (choice === optionA.textContent) {
            optionA.classList.add("wrong-answer");
            if (optionB.textContent === correctAnswer) {
                optionB.classList.add("correct-answer");
            }
        } else {
            optionB.classList.add("wrong-answer");
            if (optionA.textContent === correctAnswer) {
                optionA.classList.add("correct-answer");
            }
        }
    }

    setTimeout(getRandomChoices, 1000); // Zmieniono czas oczekiwania na 1 sekundę
}

document.getElementById("buttonA").addEventListener("click", function() {
    checkAnswer(document.getElementById("optionA").textContent);
});

document.getElementById("buttonB").addEventListener("click", function() {
    checkAnswer(document.getElementById("optionB").textContent);
});

getRandomChoices();
