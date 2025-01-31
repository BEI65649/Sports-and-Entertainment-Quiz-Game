/*-------------------------------- Constants --------------------------------*/
const startingScore = 0;


/*---------------------------- Variables (state) ----------------------------*/
let presentQuestionIndex = 0;
let score = startingScore;
let feedback = "";
let showResults = false;
let finalResultMessage = "";


/*------------------------ Cached Element References ------------------------*/
const quizDiv = document.getElementById("quiz");

const questionElement = document.getElementById("question");
const feedbackElement = document.getElementById("feedback");

const trueBtnElement = document.getElementById("true");
const falseBtnElement = document.getElementById("false");
const nextBtnElement = document.getElementById("next-button");

const resultElement = document.getElementById("resultElement");
const scoreElement = document.getElementById("score");

const playButtonElement = document.getElementById("play-btn");

const finalResultMessageElement = document.getElementById(
  "final-result-message"
);


const jeopardyAudio = new Audio("../assets/Jeopardy-theme-song.mp3")
/*-------------------------------- Functions --------------------------------*/

const questions = [
  {
    question: "True or False. Michael Jordan only wore the #23 jersey for the Chicago Bulls?",
    correctAnswer: false,
  },
  {
    question: "True or False. Peyton Manning has won the most NFL MVP awards?",
    correctAnswer: true,
  },
  {
    question:
      "True or False. In the 2024 World Series the Dodgers defeated the Yankees 4 games to 1?",
    correctAnswer: true,
  },
  { question: "True or False. Bruce Wayne's alter ego is Superman?", correctAnswer: false },
  {
    question: "True or False. In the movie Forest Gump, Forest is played by actor Tom Hanks?.",
    correctAnswer: true,
  },
  {
    question: "True or False. In 2018 Kobe Bryant won an Oscar for Best Animated Short Film?",
    correctAnswer: true,
  },
  {
    question:
      "True or False. The Ninja Turles are named Leonardo, DiCaprio, Michelangelo, and Raphael?",
    correctAnswer: false,
  },
];

const init = () => {
    jeopardyAudio.play()
    jeopardyAudio.loop = true
  presentQuestionIndex = 0;
  score = startingScore;
  feedback = "";
  showResults = false;
  finalResultMessage = "";
  quizDiv.classList.remove("hidden")
  render();
};



const render = () => {
  const quizDiv = document.getElementById("quiz");

  if (showResults) {
    quizDiv.classList.add("hidden");
    resultElement.classList.remove("hidden");
    scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
    finalResultMessageElement.textContent =
      score >= 7 ? "You won the game!" : "You lost the game!";
    playAgainButton.classList.remove("hidden");
  } else {
    quizDiv.classList.remove("hidden")
    resultElement.classList.add("hidden")
    playAgainButton.classList.add("hidden")
    const presentQuestion = questions[presentQuestionIndex]
    questionElement.textContent = presentQuestion.question
    nextButton = feedback === ""
  }
};

const processAnswer = (participantAnswer) => {
  const presentQuestion = questions[presentQuestionIndex];
  if (participantAnswer === presentQuestion.correctAnswer) {
    console.log(typeof(participantAnswer), typeof(presentQuestion.correctAnswer))
    feedback = "Correct!";
    score = score + 1;
    
  } else {
    feedback = "Incorrect!";
  }
  render();
};

const nextQuestion = () => {
  presentQuestionIndex += 1;
  if (presentQuestionIndex < questions.length) {
    feedback = "";
  } else {
    showResults = true;
  }
  render();
};

const trueButtonClick = () => {
    processAnswer(true)
}

const falseButtonClick = () => {
    processAnswer(false)
}



const playAgain = () => {
    init()
};

init();

/*----------------------------- Event Listeners -----------------------------*/
trueBtnElement.addEventListener("click", trueButtonClick)
falseBtnElement.addEventListener("click", falseButtonClick)
nextBtnElement.addEventListener("click", nextQuestion)
playAgainButton.addEventListener("click", playAgain)



//code grave yard   
// score = score + 1; // Increase the score by 1
//handle question - this section checks to see if the answer is correct
//if(showResults)- will show the results section
// scoreElement.textContent - display's the participant score
