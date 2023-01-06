
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const resultButton = document.getElementById('results-btn')
const scoreboardButton = document.getElementById('score-btn')
const submitButton = document.getElementById('submit-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement =document.getElementById('question')
const answerBtnElement = document.getElementById('answers-btn')
var score = 0;
const staringMinutes = 4;
let time = staringMinutes * 60;
const countdownEl = document.getElementById('countdown');
let timeInterval = 0;
var nameInput = document.querySelector('#fist-name')

let shuffledQuestions, currentQuestionIndex

scoreboardButton.addEventListener('click', showScore)
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})





function startGame(){
    startButton.classList.add('hide')
    var submitScore = document.getElementById('submission')
    submitScore.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

function setTime () {
    timeInterval = setInterval(function () {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        score = time;
        console.log('score', score)
        countdownEl.innerHTML = `${minutes}: ${seconds}`;
            time--;
            if (time === 0) {
                clearInterval(timeInterval);
            }
        }, 1000);
        localStorage.setItem('score', score)
}
setTime();
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('btn')
        if (answers.correct) {
        button.dataset.correct = answers.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnElement.appendChild(button)
        
    });
}

function resetState(){
    nextButton.classList.add('hide')
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild
        (answerBtnElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
        resultButton.classList.remove('hide')
    }
   
}
resultButton.addEventListener('click', showScore)
function showScore () {
  var submitScore = document.getElementById('submission')
  submitScore.classList.remove('hide');
  startButton.classList.add('start-btn-2')
  questionContainerElement.classList.add('hide')
  answerBtnElement.classList.add('hide')
  resultButton.classList.add('hide')
  clearInterval(timeInterval);
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
        
    } else {
        element.classList.add('wrong')
       time -= 2;
    }
}

function clearStatusClass (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

submitButton.addEventListener('click', function submitResults (event) {
    event.preventDefault ();
    var submissionInfo = {
        fistName: nameInput.score,
    };
    localStorage.setItem('submissionInfo', JSON.stringify(submissionInfo));
    localStorage.getItem('submissionInfo');
    });




const questions = [
    {
        question: 'What is an Array?',
        answers: [
            {text: 'A pseudo class', correct: false},
            {text: 'A css tool', correct: false},
            {text: 'A object that can store multiple values', correct: true},
            {text: 'A type of variable', correct: false},
        ]
    },
    {
        question: 'Which of these are an example of a boolean variable?',
        answers: [
            {text: '24', correct: false},
            {text: 'Yes or no', correct: true},
            {text: 'undifined', correct: false},
            {text: '"Black pepper"', correct: false},
        ]
    },
    {
        question: 'Which of these are NOT arithmetic operators?',
        answers: [
            {text: 'var++;', correct: true},
            {text: 'console.log(a · b);', correct: false},
            {text: 'console.log(a>=b)', correct: false},
            {text: 'console.log(expression1 \\ expression2);', correct: false},
        ]
    },
    {
        question: 'Which language is used to give style to the page?',
        answers: [
            {text: 'HyperText Markup Language', correct: false},
            {text: 'C++', correct: false},
            {text: 'JavaScript', correct: false},
            {text: 'Cascading Style Sheet', correct: true},
        ]
    },
    {
        question: 'What type of class is this example: button: hover',
        answers: [
            {text: 'Pseudo', correct: true},
            {text: 'nav bar', correct: false},
            {text: 'div', correct: false},
            {text: 'header', correct: false},
        ]
    },
    {
        question: 'Which is the best coding language?',
        answers: [
            {text: 'HTML', correct: true},
            {text: 'CSS', correct: true},
            {text: 'JavaScript', correct: true},
        ]
    }, 

]