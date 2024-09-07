const questions = [
    {
        question: "Which company developed the AI program AlphaGo that defeated a human Go champion?",
        choices: ["Microsoft", "DeepMind (Google)", "IBM", "Amazon"],
        correctAnswer: 2
    },
    
    {
        question: "In AI, which learning paradigm involves an agent learning by interacting with its environment and receiving rewards or penalties?",
        choices: ["Supervised Learning", "Reinforcement Learning", "Unsupervised Learning", "Deep Learning"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is a key challenge in AI development?",
        choices: ["Indian", "Pacific", "Atlantic", "Arctic"],
        correctAnswer: 1
    }
];

// HTML elements
const questionText = document.getElementById('question-box');
const choiceButtons = document.querySelectorAll('.answer-btn');
const nextButton = document.getElementById('next-btn');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score-box');

let currentQuestionIndex = 0;
let score = 0;

// Load the current question and update the buttons with choices
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    choiceButtons.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
    });
}

// Check the user's answer and provide feedback
function checkAnswer(selectedChoice) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedChoice == correctAnswer) {
        score++;
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Wrong! Try Again.";
    }
    scoreDisplay.textContent = `Score: ${score}`;
    nextButton.style.display = 'inline-block'; // Show Next Question button
}

// Event listeners for the answer buttons
choiceButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        checkAnswer(index);
    });
});

// Event listener for the Next Question button
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        feedback.textContent = ""; // Clear feedback
        nextButton.style.display = 'none'; // Hide Next Question button
    } else {
        questionText.textContent = `Quiz finished! Your final score: ${score}`;
        document.getElementById('answers-box').style.display = 'none';
        nextButton.style.display = 'none';
    }
});

// Initial call to load the first question
loadQuestion();