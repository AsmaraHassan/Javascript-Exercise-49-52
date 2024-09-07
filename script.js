// var questions = [
//     {
//         question: "Which company developed the AI program AlphaGo that defeated a human Go champion?",
//         choices: ["Microsoft", "DeepMind (Google)", "IBM", "Amazon"],
//         correctAnswer: 2
//     },
    
//     {
//         question: "In AI, which learning paradigm involves an agent learning by interacting with its environment and receiving rewards or penalties?",
//         choices: ["Supervised Learning", "Reinforcement Learning", "Unsupervised Learning", "Deep Learning"],
//         correctAnswer: 3
//     },
//     {
//         question: "Which of the following is a key challenge in AI development?",
//         choices: ["Data availability and quality", "Computing power", "Ethical concerns", "All of the above"],
//         correctAnswer: 4
//     }
// ];

// // HTML elements
// var questionText = document.getElementById('question-box');
// var choiceButtons = document.querySelectorAll('.answer-btn');
// var nextButton = document.getElementById('next-btn');
// var feedback = document.getElementById('feedback');
// var scoreDisplay = document.getElementById('score-box');

// var currentQuestionIndex = 0;
// var score = 0;

// // Load the current question and update the buttons with choices
// function loadQuestion() {
//     var currentQuestion = questions[currentQuestionIndex];
//     questionText.textContent = currentQuestion.question;
//     choiceButtons.forEach((button, index) => {
//         button.textContent = currentQuestion.choices[index];
//     });
// }

// // Check the user's answer and provide 
// function checkAnswer(selectedChoice) {
//     var correctAnswer = questions[currentQuestionIndex].correctAnswer;
//     if (selectedChoice == correctAnswer) {
//         score++;
//         feedback.textContent = "Correct!";
//     } else {
//         feedback.textContent = "Wrong! Try Again.";
//     }
//     scoreDisplay.textContent = `Score: ${score}`;
//     nextButton.style.display = 'inline-block'; // Show Next Question button
// }

// // Event listeners for the answer buttons
// choiceButtons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         checkAnswer(index);
//     });
// });

var questions = [
    {
        question: "Which company developed the AI program AlphaGo that defeated a human Go champion?",
        choices: ["Microsoft", "DeepMind (Google)", "IBM", "Amazon"],
        correctAnswer: 1 // Corrected to 1 (0-based index)
    },
    
    {
        question: "In AI, which learning paradigm involves an agent learning by interacting with its environment and receiving rewards or penalties?",
        choices: ["Supervised Learning", "Reinforcement Learning", "Unsupervised Learning", "Deep Learning"],
        correctAnswer: 1 // Corrected to 1 (0-based index)
    },
    {
        question: "Which of the following is a key challenge in AI development?",
        choices: ["Data availability and quality", "Computing power", "Ethical concerns", "All of the above"],
        correctAnswer: 3 // Corrected to 3 (0-based index)
    }
];

// HTML elements
var questionText = document.getElementById('question-box');
var choiceButtons = document.querySelectorAll('.answer-btn');
var nextButton = document.getElementById('next-btn');
var feedback = document.getElementById('feedback');
var scoreDisplay = document.getElementById('score-box');

var currentQuestionIndex = 0;
var score = 0;

// Load the current question and update the buttons with choices
function loadQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    choiceButtons.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
    });
    feedback.textContent = ""; // Clear feedback
    nextButton.style.display = 'none'; // Hide Next button initially
}

// Check the user's answer and provide feedback
function checkAnswer(selectedChoice) {
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedChoice == correctAnswer) {
        score++;
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Wrong! Try Again.";
    }
    scoreDisplay.textContent = `Score: ${score}`;
    nextButton.style.display = 'inline-block'; // Show Next Question button
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        feedback.textContent = "Quiz Complete!";
        nextButton.style.display = 'none'; // Hide Next button after last question
    }
}

// Event listeners for the answer buttons
choiceButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        checkAnswer(index);
    });
});

// Event listener for the Next button
nextButton.addEventListener('click', nextQuestion);

// Initialize the quiz
loadQuestion();

