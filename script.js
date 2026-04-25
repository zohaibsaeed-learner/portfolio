let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}
const greetings = [
  "Salam!",
  "Hi!",
  "Jee Aaya Noo!",
  "Pakher Raghle!",
  "Bonjour!",
  "Hola!",
  "Ciao!",
  "Assalamualaikum!",
  "Namaste!",
  "Szia!",
  "Konnichiwa!",
  "Annyeong!",
  "Hello!",
  "Merhaba!",
  "Hallo!"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

const el = document.getElementById("greeting");

function typeEffect() {
  const word = greetings[index];

  // Typing / Deleting
  if (!isDeleting) {
    el.textContent = word.slice(0, ++charIndex);
  } else {
    el.textContent = word.slice(0, --charIndex);
  }

  // Dynamic speed (based on word length + randomness)
  let speed;
  if (!isDeleting) {
    speed = 50 + Math.random() * 40 + word.length * 2;
  } else {
    speed = 30;
  }

  // Fade effect at full word
  if (!isDeleting && charIndex === word.length) {
    el.style.opacity = "0.7";
    speed = 1200;
    isDeleting = true;
  } else {
    el.style.opacity = "1";
  }

  // Move to next word
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % greetings.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();