# Projects related to DOM

## project link
[Click here]()

# Solution code

## project 1 : Color Changer

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    console.log(e)
    console.log(e.target)
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id
    }
  } )
} )

```

## project 2 : BMI Calculator

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const result = document.querySelector("#results")

  if(height=='' || isNaN(height) || height<0) {
    result.innerHTML = `Please give a valid height ${height}`
  } else if(weight=='' || isNaN(weight) || weight<0) {
    result.innerHTML = `Please give a valid height ${weight}`
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    
    if (bmi<18.6) {
      result.innerHTML = `<span>${bmi} <br> Under Weight</span>`
    } else if (bmi>=18.6 && bmi<=24.9) {
      result.innerHTML = `<span>${bmi} <br> Normal Range</span>`
    } else {
      result.innerHTML = `<span>${bmi} <br> Overweight</span>`
    }
  }
  
} )
```

## project 3 : Digital clock

```javascript
const clock = document.querySelector("#clock")

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```

## project 4 : Guess the number

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber)
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remainingGuess = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []
let guessNum = 1

let playGame = true

if (playGame) {
  submit.addEventListener('click', function(e) {
    e.preventDefault()
    const guess = parseInt(userInput.value)
    // console.log(guess)
    validate(guess)
  })
}

function validate(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number')
  } else if (guess < 1) {
    alert('Please enter a number greater than 1')
  } else if (guess > 100) {
    alert('Please enter a number less than 100')
  } else {
    prevGuess.push(guess)
    if (guessNum === 11) {
      checkGuess(guess)
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You won the game.`)
    endGame()
  } else if (guess < randomNumber) {
    displayMessage(`The number is Tooo LOW`)
  } else if (guess > randomNumber) {
    displayMessage(`The number is Tooo HIGH`)
  }
}

function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  guessNum++
  remainingGuess.innerHTML = `${11 - guessNum}`
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
  const newGameButton = document.querySelector("#newGame")
  newGameButton.addEventListener('click', function(e) {
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    guessNum = 1
    guessSlot.innerHTML = ''
    remainingGuess.innerHTML = `${11 - guessNum}`
    userInput.removeAttribute('disabled', '')
    startOver.removeChild(p)
    playGame = true
  })
  
}
```

## project 5 : Keyboard

```javascript
const insert = document.querySelector('#insert')

window.addEventListener('keydown', (e)=>{
  insert.innerHTML = `
    <div class="color">
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "Space": e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
    </div>
  `
})
```

## project 6 : Unlimited Colors

```javascript
//generate a random color

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = "#"
  for(let i=0; i<6; i++){
    color+= hex[Math.floor(Math.random() * 16)]
  }
  return color;
}
let intervalId;
const startChangingColor = function(){
  if (!intervalId){
    intervalId = setInterval(changeBgColor, 1000)
  }

  
  function changeBgColor(){
    document.body.style.backgroundColor = randomColor()
  }
}

const stopChangingColor = function(){
  clearInterval(intervalId);
  intervalId=null
}

document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector("#stop").addEventListener('click', stopChangingColor)
```