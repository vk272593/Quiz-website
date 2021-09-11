//Question sample of Quiz App
const quizQuestion = [
  {
    question: "Which is the most clean city in India in 2020",
    a: "pune",
    b: "Patna",
    c: "Indore",
    d: "Surat",
    correct: "c",
  },
  {
    question: "Which is the most used programming language in 2021",
    a: "java",
    b: "python",
    c: "javascript",
    d: "c#",
    correct: "b",
  },
  {
    question: " Who is the winner of the US Open 2019 Men 's title? ",
    a: "Roger Federer",
    b: "Rafael Nadal ",
    c: "Daniil Medvedev ",
    d: "Novak Djokovic",
    correct: "b",
  },
  {
    question:
      " Which of the following region has won the Ranji Trophy tournament 2019?",
    a: "Saurashtra",
    b: "Mumbai",
    c: "Vidarbha",
    d: "Rajasthan",
    correct: "c",
  },
  {
    question: "Which type of JavaScript language is ___",
    a: "Object-Oriented",
    b: "Objected-Based",
    c: "Assembly-language",
    d: "High-level",
    correct: "b",
  },
  {
    question: "What is the other name of Salt Lake Stadium ?",
    a: "Yuba Bharti Stadium",
    b: "Bharat Bharti Stadium",
    c: "Eden Gardens",
    d: "Kolkata Stadium",
    correct: "a",
  },
];
//Element selected
const questionE1 = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;
loadQuiz();
// function to load data on Quiz App
function loadQuiz() {
  deselectAnswer();
  const currentQuiz = quizQuestion[currentQuestion];
  questionE1.innerHTML = currentQuiz.question;
  a_text.innerHTML = currentQuiz.a;
  b_text.innerHTML = currentQuiz.b;
  c_text.innerHTML = currentQuiz.c;
  d_text.innerHTML = currentQuiz.d;
}
//function to select answer in question
function getSelected() {
  let answer = 0;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
//function for next  question without selecting previous option
function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
//event listener
submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizQuestion[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizQuestion.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = ` <h2>Your Score is ${score} 
            out of ${quizQuestion.length} </h2> <button onClick="location.reload()">Reload</button>`;
    }
  }
});
