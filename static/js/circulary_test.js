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
    question: 'How many liters of blood are transported through the blood vessels?',
    answers: [
      { text: '5', correct: true },
      { text: '8', correct: false },
      { text: '15', correct: false }
    ]
  },
  {
    question: 'What is an aorta?',
    answers: [
      { text: 'the largest artery of the body, originating from the left ventricle of the heart', correct: true },
      { text: 'it carries arterial blood from the lungs to the left atrium.', correct: false },
      { text: 'a blood vessel through which blood moves to the heart.', correct: false }
    ]
  },
  {
    question: 'What is the pulmonary venies?',
    answers: [
      { text: 'small arteries through the blood flow directly to the capillaries.', correct: false },
      { text: 'is a large blood vessel that supplies blood to the area of the lower limb, in particular the thigh.', correct: true },
      { text: 'an organ that provides blood flow through the blood vessels through repeated rhythmic contractions.', correct: false }
    ]
  },
  {
    question: 'What is an arterioles?',
    answers: [
      { text: 'a large vein, I open from the walls of the broshnagkya, the paired organs of the abdominal cavity and the lower part of the body.', correct: false },
      { text: 'small arteries through the blood flow directly to the capillaries.', correct: true },
      { text: 'a blood vessel through which blood moves to the heart. Veins receive blood from postcapillary venules.', correct: false }
    ]
  }
]