"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

function underlineText() {
    const element = document.querySelector(".message");
    element.style.textDecoration = "underline";
    element.style.textDecorationColor = "red";
}

function removeUnderline() {
    const element = document.querySelector(".message");
    element.style.textDecoration = "none";
    element.style.textDecorationColor = "initial";
}

const messageElement = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const numberElement = document.querySelector(".number");
const guessElement = document.querySelector(".guess");

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Start guessing...");

    scoreElement.textContent = score;
    numberElement.textContent = "?";
    guessElement.value = "";
    document.querySelector("body").style.backgroundColor = "black";
    numberElement.style.width = "15rem";
    removeUnderline();
});

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    if (guess === secretNumber) {
        document.body.style.background = "green";
    }

    if (!guess) {
        displayMessage("No number ⛔");
    } else if (guess === secretNumber) {
        displayMessage("Bingo! Correct number🎉");
        underlineText();
        numberElement.style.width = "30rem";
        numberElement.textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guess > secretNumber
                    ? "Number is to high📈"
                    : "Number is too low📉"
            );
            score--;
            scoreElement.textContent = score;
        } else {
            displayMessage("💣 You lost the game!");

            scoreElement.textContent = 0;
            document.body.style.background = "red";
        }
    }
});
