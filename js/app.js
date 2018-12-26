// DOM
const buttonOne = document.getElementById('one');
const buttonTwo = document.getElementById('two');
const buttonThree = document.getElementById('three');
const buttonFour = document.getElementById('four');

const questionDisplayed = document.querySelector('.main__question');
const answerDisplayed = document.querySelector('.main__answer');

const main = document.querySelector('.main');
const options = document.querySelector('.main__options');



const gameState = {
    score: 0,
    current: 0,
    isDone: false,
    isWin: false,
    total: quizQuestions.length,
    displayQuestions(current) {
        questionDisplayed.innerHTML = quizQuestions[current].question;
    },
    displayOptions(current) {
        buttonOne.innerHTML = quizQuestions[current].answers.a;
        buttonTwo.innerHTML = quizQuestions[current].answers.b;
        buttonThree.innerHTML = quizQuestions[current].answers.c;
        buttonFour.innerHTML = quizQuestions[current].answers.d;
    },
    displayAnswer(isWin) {
        if (isWin === true) {
            answerDisplayed.innerHTML = "You Are Correct!";
            answerDisplayed.style.color = "#2ECC40";
            this.current++;
            this.score++;
            questionDisplayed.classList.remove("animated", "fadeIn", "fast");
            options.classList.remove("animated", "fadeIn", "fast");
            setTimeout(() => {
                runGame(this.current);
                answerDisplayed.innerHTML = "";

            }, 1000);
        } else if (isWin === false) {
            answerDisplayed.innerHTML = "You Are Incorrect!";
            answerDisplayed.style.color = "#E53A40";
            this.current++;
            questionDisplayed.classList.remove("animated", "fadeIn", "fast");
            options.classList.remove("animated", "fadeIn", "fast");
            setTimeout(() => {
                runGame(this.current);
                answerDisplayed.innerHTML = "";
            }, 1000);
        }
    }
}

function runGame(current) {
    questionDisplayed.classList.add("animated", "fadeIn", "fast");
    options.classList.add("animated", "fadeIn", "fast");
    if (current < gameState.total) {
        gameState.displayOptions(current);
        gameState.displayQuestions(current);
    } else {
        main.innerHTML = `<div>
        <h1 id="game">Game Over</h1>
        <h1 id="score">Score: ${gameState.score} </h1>
        <button id="restart" onclick = "restart()">Restart</button>
        </div>`;
    }
}

runGame(0);


let nowScore = gameState.current;

buttonOne.addEventListener('click', () => {
    if (buttonOne.textContent === quizQuestions[gameState.current].correctAnswer) {
        gameState.displayAnswer(true);

    } else {
        gameState.displayAnswer(false);
    }
});
buttonTwo.addEventListener('click', () => {
    if (buttonTwo.textContent === quizQuestions[gameState.current].correctAnswer) {
        gameState.displayAnswer(true);
    } else {
        gameState.displayAnswer(false);
    }
});
buttonThree.addEventListener('click', () => {
    if (buttonThree.textContent === quizQuestions[gameState.current].correctAnswer) {
        gameState.displayAnswer(true);
    } else {
        gameState.displayAnswer(false);
    }
});
buttonFour.addEventListener('click', () => {
    if (buttonFour.textContent === quizQuestions[gameState.current].correctAnswer) {
        gameState.displayAnswer(true);
    } else {
        gameState.displayAnswer(false);
    }
});


function restart() {
    window.location.reload();
}