document.addEventListener('DOMContentLoaded', () => {
    const scoreElement = document.getElementById('score');
    const resultMessageElement = document.getElementById('result-message');
    const buttonA = document.getElementById('buttonA');
    const buttonB = document.getElementById('buttonB');

    let score = 0;

    function updateScore(amount) {
        score += amount;
        scoreElement.textContent = `Current Score: ${score}`;
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function setOptions() {
        const valueA = getRandomNumber();
        const valueB = getRandomNumber();
        document.getElementById('optionA').textContent = valueA;
        document.getElementById('optionB').textContent = valueB;

        return { valueA, valueB };
    }

    function handleButtonClick(isButtonA) {
        const { valueA, valueB } = setOptions();
        const chosenValue = isButtonA ? valueA : valueB;
        const otherValue = isButtonA ? valueB : valueA;

        if (chosenValue > otherValue) {
            updateScore(1);
            resultMessageElement.textContent = 'Correct! The number was higher.';
        } else {
            updateScore(-1);
            resultMessageElement.textContent = 'Incorrect! The number was lower.';
        }
    }

    buttonA.addEventListener('click', () => handleButtonClick(true));
    buttonB.addEventListener('click', () => handleButtonClick(false));

    setOptions(); // Initialize with options
});
