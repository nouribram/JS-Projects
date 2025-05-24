const questions = [
    {
        question: " What planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false},
            { text: "Venus", correct: false},
            { text: "Mars", correct: true},
            { text: "Jupiter", correct: false}
        ]
    },
    {
        question: "2. What gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false},
            { text: "Hydrogen", correct: false},
            { text: "Carbon dioxide", correct: true},
            { text: "Nitrogen", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");

const answerButton = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestionIndex = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

     currentQuestion.answers.forEach(answer => {

        const button  = document.createElement("button");

        button.innerHTML = answer.text;

        button.classList.add("btn");

        answerButton.appendChild(button);
     });
}