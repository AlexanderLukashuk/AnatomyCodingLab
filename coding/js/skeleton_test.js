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
    question: 'How is <<skeleton>> translated from Greek?',
    answers: [
      { text: 'dried', correct: true },
      { text: 'white', correct: false },
      { text: 'toughie', correct: false }
    ]
  },
  {
    question: 'How many bones does an adult have?',
    answers: [
      { text: '206-208', correct: true },
      { text: '324-328', correct: false },
      { text: '196-201', correct: false }
    ]
  },
  {
    question: 'What is the trunk skeleton for?',
    answers: [
      { text: 'it protects the brain, sensory organs and serves as a support for the initial sections of the digestive and respiratory system.', correct: false },
      { text: 'it serves as a support for the head and upper limbs, as well as protection for the spinal cord and internal organs, consists of the spinal column (spine), ribs and sternum.', correct: true },
      { text: 'it performs the functions of grasping and moving objects in space', correct: false }
    ]
  },
  {
    question: 'How many bones does the cranial region consist of?',
    answers: [
      { text: '12', correct: false },
      { text: '15', correct: true },
      { text: '24', correct: false }
    ]
  }
]