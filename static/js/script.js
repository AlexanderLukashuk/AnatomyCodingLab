const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is the muscular system responsible for?',
    answers: [
      { text: 'it is responsible for the movement of the human body', correct: true },
      { text: 'it helps digest food', correct: false },
      { text: 'responsible for the strength of the human body', correct: false }
    ]
  },
  {
    question: 'How many muscles are attached to the bones of the skeleton?',
    answers: [
      { text: 'about 700', correct: true },
      { text: 'about 200', correct: false },
      { text: 'about 500', correct: false }
    ]
  },
  {
    question: 'What are muscles made of?',
    answers: [
      { text: 'muscle tissue, blood vessels, tendons and vitamins', correct: false },
      { text: 'muscle tissue, blood vessels, tendons and nerves', correct: true },
      { text: 'air, meat and blood', correct: false }
    ]
  },
  {
    question: 'How many types of muscle tissue are there?',
    answers: [
      { text: '8', correct: false },
      { text: '3', correct: true },
      { text: '4', correct: false }
    ]
  }
]