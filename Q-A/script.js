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

    resetState();

    let currentQuestionIndex = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

     currentQuestion.answers.forEach(answer => {

        const button  = document.createElement("button");

        button.innerHTML = answer.text;

        button.classList.add("btn");

        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
   
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct == "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
     
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        } 
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}


function handleNextButton(){

    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
});

startQuiz();