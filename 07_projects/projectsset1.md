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
