import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let excuseElement = document.getElementById('excuse')
  let emojiElement = document.getElementById('emoji')
  let generateButton = document.getElementById('generate')
  let modalElement = document.getElementById('modal')

  let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
  let action = ['se comió', 'orinó sobre', 'aplastó', 'destruyó'];
  let what = ['mi tarea', 'mi teléfono', 'el coche'];
  let when = ['antes de la clase', 'mientras dormía', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras rezaba'];

  let emoji = ['😭', '😨', '🥵', '😵', '🥺', '😓', '😔', '😢', '😶‍🌫️', '😈'];

  function setInnerTexts() {
    excuseElement.innerText = makeExcuse(who, action, what, when) + '!'
    emojiElement.innerText = emoji[randomIndex(emoji)]
  }

  generateButton.onclick = function () {
    setInnerTexts()
    modalElement.style.visibility = 'hidden'
  };

  excuseElement.onclick = function () {
    navigator.clipboard.writeText(excuseElement.innerText)
    modalElement.style.visibility = 'visible'
  }

  setInnerTexts();
};

function randomIndex(array) {
  let index = Math.floor(Math.random() * array.length)
  return index
}

function makeExcuse(who, action, what, when) {
  let excuseArray = []

  excuseArray.push(who[randomIndex(who)])
  excuseArray.push(action[randomIndex(action)])
  excuseArray.push(what[randomIndex(what)])
  excuseArray.push(when[randomIndex(when)])
  console.log(excuseArray)
  return excuseArray.join(' ')
}
