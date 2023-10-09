"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

let highscore = 0;

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

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing...";

    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".number").style.width = "15rem";
    removeUnderline();
});

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    if (guess === secretNumber) {
        document.body.style.background = "green";
    }

    if (!guess) {
        document.querySelector(".message").textContent = "No number ⛔";
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent =
            "Bingo! Correct number🎉";
        underlineText();
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent =
                guess > secretNumber
                    ? "Number is to high📈"
                    : "Number is too low📉";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "💣 You lost the game!";

            document.querySelector(".score").textContent = 0;
            document.body.style.background = "red";
        }
    }
});
