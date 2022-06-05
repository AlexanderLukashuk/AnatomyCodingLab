const {uri} = require("../../Xconfig");
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
// const controller = require("../controllers/adminController")

let shuffledQuestions, currentQuestionIndex

AddQuestion();

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

const MongoClient = require("mongodb").MongoClient;

// const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(uri);
const questions = [];

// Подключаемся к серверу
mongoClient.connect(function(err, client){

  // обращаемся к базе данных admin
  const db = client.db("test.users");

  // for (let i = 0; i < dbQuestions.length; i++) {
    questions.push(db.);
  // }

  // db.command({ping: 1}, function(err, result){
  //   if(!err){
  //     console.log("Подключение с сервером успешно установлено");
  //     console.log(result);
  //   }
  //   // Закрываем подключение
  //   client.close();
  //   console.log("Подключение закрыто");
  // });
});

// const dbQuestions = [];
//
// // function getQuestions() {
// //   // dbQuestions.push(db.question.find());
// //   dbQuestions.push(controller.getTests);
// // }
//
// getQuestions()

// console.log(questions[1]);

// const questions = [];

// function AddQuestion() {
//   for (let i = 0; i < dbQuestions.length; i++) {
//     questions.push(dbQuestions[i]);
//   }
// }





// const questions = [
//   {
//     question: 'What does not apply to the internal organs of a person?',
//     answers: [
//       { text: 'aorta, the pulmonary venies, an arterioles', correct: true },
//       { text: 'pancreas, intestines, colon, rectum, spleen, kidneys, and appendicitis.', correct: false },
//       { text: 'trachea, esophagus, lungs, heart, stomach, liver, gallbladder', correct: false }
//     ]
//   },
//   {
//     question: 'How many hemispheres does the brain consist of?',
//     answers: [
//       { text: '2', correct: true },
//       { text: '1', correct: false },
//       { text: '4', correct: false }
//     ]
//   },
//   {
//     question: 'How is the brain attached to the skull?',
//     answers: [
//       { text: 'nothing', correct: false },
//       { text: 'nerves and blood vessels', correct: true },
//       { text: 'a special mixture that is produced by the brain', correct: false }
//     ]
//   },
//   {
//     question: 'What is the largest organ in the human body?',
//     answers: [
//       { text: 'lungs', correct: false },
//       { text: 'liver', correct: true },
//       { text: 'brain', correct: false }
//     ]
//   },
//   {
//     question: question.question.text,
//     answers: [
//       { text: question.answer1.text, correct: true },
//       { text: question.answer2.text, correct: false },
//       { text: question.answer3.text, correct: false }
//     ]
//   }
// ]