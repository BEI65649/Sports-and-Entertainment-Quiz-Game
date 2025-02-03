/*-------------------------------- Constants --------------------------------*/
const startingScore = 0;
const jeopardyAudio = new Audio("../assets/Jeopardy-theme-song.mp3");

/*---------------------------- Variables (state) ----------------------------*/
let presentQuestionIndex = 0;
let score = startingScore;
let feedback = "";
let showResults = false;
let finalResultMessage = "";

/*------------------------ Cached Element References ------------------------*/
const startScreenElement = document.getElementById("start-screen")
const startButtonElement = document.getElementById("start-button")

const gameScreenElement = document.getElementById("game-screen")
const quizDiv = document.getElementById("quiz");

const questionElement = document.getElementById("question");
const feedbackElement = document.getElementById("feedback");

const trueBtnElement = document.getElementById("true");
const falseBtnElement = document.getElementById("false");
const nextBtnElement = document.getElementById("next-button");

const resultElement = document.getElementById("resultElement");
const scoreElement = document.getElementById("score");

const playAgainButton = document.getElementById("play-again-btn");
const finalResultMessageElement = document.getElementById(
  "final-result-message"
);


/*-------------------------------- Functions --------------------------------*/

const questions = [
  {
    question:
      "True or False. Michael Jordan only wore the #23 jersey for the Chicago Bulls?",
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
  {
    question: "True or False. Bruce Wayne's alter ego is Superman?",
    correctAnswer: false,
  },
  {
    question:
      "True or False. In the movie Forest Gump, Forest is played by actor Tom Hanks?",
    correctAnswer: true,
  },
  {
    question:
      "True or False. In 2018 Kobe Bryant won an Oscar for Best Animated Short Film?",
    correctAnswer: true,
  },
  {
    question:
      "True or False. The Ninja Turles are named Leonardo, DiCaprio, Michelangelo, and Raphael?",
    correctAnswer: false,
  },
];

const startGame = () => {
    startScreenElement.classList.add("hidden")
    gameScreenElement.classList.remove("hidden")
}

const init = () => {
  jeopardyAudio.play();
  jeopardyAudio.loop = true;
  jeopardyAudio.volume = 0.2;
  presentQuestionIndex = 0;
  score = startingScore;
  feedback = "";
  showResults = false;
  finalResultMessage = "";
  feedbackElement.textContent = ""
  quizDiv.classList.remove("hidden");
  resultElement.classList.add("hidden")
  playAgainButton.classList.add("hidden")
  render();
};

const render = () => {
  if (showResults) {
    gameScreenElement.classList.add("hidden")
    quizDiv.classList.add("hidden");
    resultElement.classList.remove("hidden");
    scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
    finalResultMessageElement.textContent =
      score >= 4 ? "Congratulations, well played!" : "Better luck next time!";
    playAgainButton.classList.remove("hidden");
    trueBtnElement.classList.add("hidden");
    falseBtnElement.classList.add("hidden");
    nextBtnElement.classList.add("hidden");
  
} else {
    quizDiv.classList.remove("hidden");
    resultElement.classList.add("hidden");
    playAgainButton.classList.add("hidden");
    const presentQuestion = questions[presentQuestionIndex];
    questionElement.textContent = presentQuestion.question;
    nextBtnElement.disabled = feedback === "";
    trueBtnElement.classList.remove("hidden");
    falseBtnElement.classList.remove("hidden")
    nextBtnElement.classList.remove("hidden")
  }
};

const processAnswer = (participantAnswer) => {
  const presentQuestion = questions[presentQuestionIndex];
  if (participantAnswer === presentQuestion.correctAnswer) {
    feedback = "Correct!";
    score = score + 1;
  } else {
    feedback = "Incorrect!";
  }

  feedbackElement.textContent = feedback;
  nextBtnElement.disabled = false;
  render();
};

const nextQuestion = () => {
  presentQuestionIndex += 1;
  if (presentQuestionIndex < questions.length) {
    feedback = "";
    feedbackElement.textContent = "";
  } else {
    showResults = true;
  }
  render();
};


const trueButtonClick = () => {
  processAnswer(true);
};

const falseButtonClick = () => {
  processAnswer(false);
};

const playAgain = () => {
    jeopardyAudio.pause();
    document.getElementById("start-screen").classList.remove("hidden");
    document.getElementById("game-screen").classList.add("hidden");
    resultElement.classList.add("hidden");
    playAgainButton.classList.add("hidden"); 
    presentQuestionIndex = 0;
    score = startingScore;
    feedback = "";
    showResults = false;
    finalResultMessage = "";
  init();
};

init();

/*----------------------------- Event Listeners -----------------------------*/
startButtonElement.addEventListener("click", startGame);
trueBtnElement.addEventListener("click", trueButtonClick);
falseBtnElement.addEventListener("click", falseButtonClick);
nextBtnElement.addEventListener("click", nextQuestion);
playAgainButton.addEventListener("click", playAgain);




// /code grave yard
// score = score + 1; // Increase the score by 1
//handle question - this section checks to see if the answer is correct
//if(showResults)- will show the results section
// scoreElement.textContent - display's the participant score
// <!--graveyard
// next button is hidden or not clickable until questions is answered
//const playButon  = () =>
//const imageContainer = document.getElementById("image-container");
//imageContainer.classList.remove("hidden");
//background-image: image
// {/* <div id="image-container" class="hidden"></div> */} cant figure this out. the link for the pic isn't working when i upload it
//trying to upload a pic at the end of the game. two different ones , one for winning and the other for losing 
//if i want to reset the audio i can use this  // jeopardyAudio.currentime = 0