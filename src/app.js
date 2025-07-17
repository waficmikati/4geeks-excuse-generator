import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let excuseElement = document.getElementById('excuse')
  let emojiElement = document.getElementById('emoji')
  let generateButton = document.getElementById('generate')
  let modalElement = document.getElementById('modal')

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed on', 'crushed', 'destroyed'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
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
