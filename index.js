let questions = [
    "¿Quieres ser mi Novia?",
    "¿Te gustaría salir a cenar conmigo?",
    "¿Quieres que sigamos cocinando juntos y ver peliculas?",
    "¿Te gustaría viajar juntos algún día?",
    "¿Me dejaras jugar con mis amigos?",
    "¿Nos casaremos algun dia?",
    "¿Me amaras a pesar de todo?",
];

let currentQuestionIndex = 0;

const contenedor = document.querySelector('.contenedor');
const questionElement = document.querySelector('#question');
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

yesBtn.addEventListener('click', function () {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        questionElement.textContent = questions[currentQuestionIndex];
    } else {
        alert('¡Eres increible y hermosa! Te amo mucho Magdiel <3.');
    }
});

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };