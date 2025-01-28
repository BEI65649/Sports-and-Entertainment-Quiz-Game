/*-------------------------------- Constants --------------------------------*/
const startingScore = 0;




/*---------------------------- Variables (state) ----------------------------*/
let presentQuestionIndex;
let score 
let quizQuestions
let feedback
let showResults


/*------------------------ Cached Element References ------------------------*/
const questionElement = document.getElementById("question");
const feedbackElement = document.getElementById("feedback")

const trueBtnElement = document.getElementById("true")
const falseBtnElement = document.getElementById("false")
const nextBtnElement = document.getElementById("next-button")

const resultElement = document.getElementById("result")
const scoreElement = document.getElementById("score")

const playAgainBtnElement = document.getElementById("play-again-btn")

// console.log(resultElement, scoreElement, playAgainBtnElement)

// console.log(questionElement, feedbackElement, trueBtnElement, falseBtnElement, nextBtnElement)

/*-------------------------------- Functions --------------------------------*/
const init = () => {
    score = startingScore
    presentQuestionIndex
render()
}

const render = () => {

}

const processAnswer = () => {

}

const nextQuestion = () => {

}

const playCorrectAudio = () => {

}

const playInCorrectAudio = () => {
    
}


const playAgain = () => {
    
}































const showQuestions = () => {
    quizData = [
        { question: "Michael Jordan only wore the #23 jersey for the Chicago Bulls", correctAnswer: false },
        { question: "Peyton Manning has won the most NFL MVP awards", correctAnswer: true },
        { question: "In the 2024 World Series the Dodgers defeated the Yankees 4 games to 1", correctAnswer: true },
        { question: "Bruce Wayne's alter ego is Superman.", correctAnswer: false },
        { question: "In the movie Forest Gump, Forest is played by actor Tom Hanks.", correctAnswer: true },
        { question: "In 2018 Kobe Bryant won an Oscar for Best Animated Short Film.", correctAnswer: true },
        { question: "The Ninja Turles are named Leonardo, DiCaprio, Michelangelo, and Raphael .", correctAnswer: false },
      ];
    }










    
    

init()

/*----------------------------- Event Listeners -----------------------------*/


