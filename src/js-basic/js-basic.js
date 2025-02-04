console.clear()
document.addEventListener('DOMContentLoaded', () => {
  // searchHeader()
  changeTextOnClick()
  //   askUserName()
  showCounter()
  showRandomWord()
})

function searchHeader() {
  const headerTag = document.querySelector('h1')
  const headerClass = document.querySelector('.header')
  const headerID = document.querySelector('#header')

  console.log(headerTag)
  console.log(headerClass)
  console.log(headerID)
}

function changeTextOnClick() {
  const text = document.querySelector('.text')

  text.addEventListener('click', () => {
    if (text.innerHTML == 'Добрый утро!') {
      text.innerHTML = 'Добрый день!'
    } else if (text.innerHTML == 'Добрый день!') {
      text.innerHTML = 'Добрый вечер!'
    } else {
      text.innerHTML = 'Добрый утро!'
    }
  })
}

function askUserName() {
  const userText = document.querySelector('.userText')
  const userName = prompt('Как тебя зовут?', 'Гена')

  if (userName == null || userName == '') {
    userText.innerHTML = `Привет, человек без имени!`
  } else {
    userText.innerHTML = `Привет, ${userName}!`
  }
}

function showCounter() {
  const clickText = document.querySelector('.clickText')
  const clickButton = document.querySelector('.clickButton')
  let cnt = 0

  clickButton.addEventListener('click', () => {
    // cnt += 1
    cnt++
    clickText.innerHTML = `Вы кликнули ${cnt} раз`

    if (cnt % 10 == 0) {
      clickText.classList.add('red')
    } else {
      clickText.classList.remove('red')
    }
  })
}

function showRandomWord() {
  const words = [
    'happy',
    'lonely',
    'sad',
    'exited',
    'tired',
    'loved',
    'hungry',
    'sleepy',
    'fasinated'
  ]

  const randomText = document.querySelector('.randomText')
  const randomButton = document.querySelector('.randomButton')

  randomButton.addEventListener('click', () => {
    let index = Math.floor(words.length * Math.random())
    randomText.innerHTML = `Beautiful day ${words[index]}`
  })
}
