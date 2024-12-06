const questions = [
    { question: "¿Cuántas bahías tiene Huatulco?", options: ["7", "9", "5", "8"], answer: "9" },
    { question: "¿Qué bahía es famosa por su playa nudista?", options: ["Santa Cruz", "Cacaluta", "San Agustín", "Zipolite"], answer: "Zipolite" },
    { question: "¿En qué estado se encuentra Huatulco?", options: ["Chiapas", "Oaxaca", "Guerrero", "Veracruz"], answer: "Oaxaca" },
    { question: "¿Cuál es la principal actividad económica de Huatulco?", options: ["Turismo", "Agricultura", "Pesca", "Ganadería"], answer: "Turismo" },
    { question: "¿Qué bebida es típica de la región?", options: ["Mezcal", "Tequila", "Pulque", "Cerveza"], answer: "Mezcal" },
    { question: "¿Qué bahía es conocida por sus arrecifes de coral?", options: ["Conejos", "Tangolunda", "San Agustín", "Cacaluta"], answer: "San Agustín" },
    { question: "¿Cuál es la bahía más desarrollada turísticamente?", options: ["Tangolunda", "Maguey", "Santa Cruz", "Chachacual"], answer: "Tangolunda" },
    { question: "¿Qué significa 'Huatulco'?", options: ["Lugar de árboles", "Lugar de flores", "Lugar de maderas", "Lugar de muchos ríos"], answer: "Lugar de árboles" },
    { question: "¿Qué parque protege la biodiversidad de Huatulco?", options: ["Parque Nacional Huatulco", "Parque Tangolunda", "Reserva Ecológica de Oaxaca", "Parque Santa Cruz"], answer: "Parque Nacional Huatulco" },
    { question: "¿En qué año se estableció Huatulco como desarrollo turístico?", options: ["1984", "1990", "1986", "1989"], answer: "1984" }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const nextButton = document.getElementById("next-btn");

    answersElement.innerHTML = "";
    nextButton.disabled = true;

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.onclick = () => {
            checkAnswer(option, button);
            nextButton.disabled = false;
        };
        answersElement.appendChild(button);
    });
}

function checkAnswer(selectedOption, button) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
        button.style.backgroundColor = "#94d2bd";
    } else {
        button.style.backgroundColor = "#f08080";
    }
    document.querySelectorAll(".option-btn").forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = `Tu puntuación: ${score} / ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

function goToHome() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result").style.display = "none";
});
