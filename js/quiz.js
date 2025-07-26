const questions = [
  {
    question: "Ein Spieler beleidigt dich im RP – was tust du?",
    answers: [
      "Ich beleidige zurück",
      "Ich ignoriere es",
      "Ich melde den Spieler im Support"
    ],
    correct: 2
  },
  {
    question: "Du wirst grundlos getötet (RDM). Wie reagierst du?",
    answers: [
      "Ich schreibe dem Spieler auf Discord",
      "Ich melde den Vorfall mit Beweisen im Support",
      "Ich hole Freunde und mache Rache"
    ],
    correct: 1
  }
];

let current = 0;
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");

function loadQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.answers.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.onclick = () => checkAnswer(idx);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[current].correct) {
    alert("Richtig!");
  } else {
    alert("Falsch! Versuche es erneut.");
  }
  current = (current + 1) % questions.length;
  loadQuestion();
}

window.onload = loadQuestion;
