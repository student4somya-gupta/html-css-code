const quizData = {
  "pipes and cisterns": [
    {
      question:
        "A pipe can fill a tank in 4 hours. How long will it take to fill half the tank?",
      options: ["1 hours", "2 hours", "3 hours", "4 hours"],
      correct: 1,
    },
    {
      question:
        "Pipe A can fill a tank in 5 hours, while pipe B can empty it in 8 hours. If both pipes are opened, how long will it take to fill the tank?",
      options: ["10 hours", "13.33 hours", "20 hours", "40 hours"],
      correct: 2,
    },
    {
      question:
        "A tank has three pipes. Pipe A can fill it in 12 hours, pipe B in 15 hours, and pipe C can empty it in 20 hours. If all pipes are opened simultaneously, how long will it take to fill the tank?",
      options: ["5 hours", "6 hours", "7 hours", "8 hours"],
      correct: 2,
    },
    {
      question:
        "Two pipes can fill a tank in 10 hours and 12 hours respectively. A third pipe can empty the tank in 15 hours. If all pipes are opened simultaneously, in how many hours will the tank be filled?",
      options: ["5 hours", "6 hours", "7 hours", "8 hours"],
      correct: 1,
    },
    {
      question:
        "A tank is filled in 5 hours by three pipes A, B and C. When opened separately, C is found to take 30 hours more than A and 20 hours more than B to fill the tank. How long does B take to fill the tank?",
      options: ["10 hours", "15 hours", "20 hours", "25 hours"],
      correct: 1,
    },
  ],
  "Problems on age": [
    {
      question:
        "Five years ago, John's age was half of what it will be in 10 years. How old is John now?",
      options: ["10 years", "15 years", "20 years", "25 years"],
      correct: 3,
    },
    {
      question:
        "A father is 30 years older than his son. In 5 years, the father will be three times as old as his son. What is the son's current age?",
      options: ["5 years", "10 years", "15 years", "20 years"],
      correct: 2,
    },
    {
      question:
        "The present age of a mother is three times that of her daughter. After 5 years, the mother will be 2.5 times as old as her daughter. What is the daughter's present age?",
      options: ["5 years", "10 years", "15 years", "20 years"],
      correct: 2,
    },
    {
      question:
        "The sum of the ages of a father and his son is 60 years. Five years ago, the father was three times as old as his son. What is the son's current age?",
      options: ["40 years", "50 years", "35 years", "45 years"],
      correct: 1,
    },
    {
      question:
        "A man is 24 years older than his son. In two years, his age will be twice the age of his son. What is the son's current age?",
      options: ["20 years", "22 years", "24 years", "26 years"],
      correct: 1,
    },
  ],
  Probability: [
    {
      question:
        "What is the probability of getting a head when flipping a coin?",
      options: ["2/3", "1/3", "1/2", "1/4"],
      correct: 3,
    },
    {
      question:
        "What is the probability of getting a 3 when rolling a fair die?",
      options: ["1/2", "1/3", "1/4", "1/6"],
      correct: 4,
    },
    {
      question:
        "What is the probability of drawing a red card from a standard deck of cards?",
      options: ["1/2", "1/3", "1/4", "2/3"],
      correct: 1,
    },
    {
      question:
        "If two dice are rolled, what is the probability of getting a sum of 7?",
      options: ["1/6", "5/36", "1/12", "1/3"],
      correct: 1,
    },
    {
      question:
        "What is the probability of drawing an Ace from a standard deck of cards?",
      options: ["1/13", "1/26", "1/52", "1/4"],
      correct: 1,
    },
  ],
  "profit and loss": [
    {
      question:
        "A trader buys goods for $600 and sells them for $750. What is his profit percentage?",
      options: ["20%", "25%", "30%", "40%"],
      correct: 2,
    },
    {
      question:
        "If a product is sold at a loss of 10%, what is the selling price if the cost price is $500?",
      options: ["$450", "$475", "$500", "$425"],
      correct: 1,
    },
    {
      question:
        "If the cost price of 15 items is equal to the selling price of 12 items, what is the profit percentage?",
      options: ["20%", "25%", "30%", "15%"],
      correct: 2,
    },
    {
      question:
        "A shopkeeper sells a product at 15% profit. If the cost price of the product is $200, what is the selling price?",
      options: ["$215", "$225%", "$230%", "$240%"],
      correct: 3,
    },
    {
      question:
        "If the selling price of a product is $400 and the profit is 20%, what is the cost price?",
      options: ["$320%", "$330%", "$340%", "$350"],
      correct: 0,
    },
  ],
};


// DOM Elements
const userNameInput = document.getElementById("userName");
const submitNameButton = document.getElementById("submit-Name");
const userNameSpan = document.getElementById("userNameSpan");
const categoryButtons = document.querySelectorAll(".category_btn");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-btn-question");


// console.log(questions)
console.log(quizData);


submitNameButton.addEventListener("click", () => {
  const userName = userNameInput.value.trim();
  if (userName) {
    userNameSpan.textContent = `Welcome, ${userName}`;
    document.querySelector(".short-para").style.display = "block";
  } else {
    alert("Please enter your name.");
  }
});
let currentCategory = "";
let currentQuestion = "";
let acceptingAnswers = true;
let index = 0;
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;


categoryButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    currentCategory = e.target.getAttribute("data-category");
    startQuiz();
  });
});
// Start Quiz
function startQuiz() {
  if (!currentCategory) {
    alert("Please select a category to start the quiz.");
    return;
  }
  quizContainer.classList.remove("hidden");
  renderQuestion();
} 
// Render Question
function renderQuestion() {
  const categoryQuestions = quizData [currentCategory];
  if (currentQuestionIndex < categoryQuestions.length) {
    const currentQuestion = categoryQuestions[currentQuestionIndex];
    questionContainer.innerHTML = `<h4>${currentQuestion.question}</h4>`;
    answersContainer.innerHTML = currentQuestion.options
      .map(
        (option, index) =>
          `<button class="option-btn" data-index="${index}">${option}</button>`
      )
      .join("");
    attachOptionListeners(currentQuestion.correct);
    startTimer();
  } else {
    showResults();
  }
}
// Handle Answer Selection
function attachOptionListeners(correctIndex) {
  const optionButtons = document.querySelectorAll(".option-btn");
  optionButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      clearInterval(timerInterval); //Ensure the timer stops
      const selectedOption = parseInt(e.target.getAttribute("data-index"));
      if (selectedOption === correctIndex) {
        score++;
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
      stopTimer();
      currentQuestionIndex++;
      renderQuestion();
    });
  });
}
// Start Timer
function startTimer() {
  let timeLeft = 10;
  const timerElement = document.getElementById("quiz-time-score");
  timerElement.textContent = `Time left: ${timeLeft}s`;
  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time left: ${timeLeft}s`;
    if (timeLeft === 0) {
      alert("Time's up!");
      clearInterval(timerInterval);
      currentQuestionIndex++;
      renderQuestion();
    }
  }, 1000);
}
// Stop Timer
function stopTimer() {
  clearInterval(timerInterval);
}

// Show Results
function showResults() {
  quizContainer.innerHTML = `
    <div class="results">
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} / ${quizData[currentCategory].length}</p>
      <button onclick="restartQuiz()">Restart Quiz</button>
    </div>
  `;
}

// Restart Quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  quizContainer.classList.add("hidden");
}








