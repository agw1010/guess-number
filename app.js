const guess = document.getElementById("guess");
const guessedNumber = guess.querySelector("input");

const LEFTCHANSE = 5;

function genRandom() {
    const number = Math.floor(Math.random() * 100);
    return number;
}

function init() {
    const randomNumber = genRandom();
}