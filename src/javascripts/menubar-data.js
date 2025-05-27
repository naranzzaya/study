const homeURL = 'http://localhost:8080/'
// const homeURL = 'http://hseadc.github.io/Spot/'

const menu = [
  {
    text: 'Статьи',
    url: 'articles.html'
  },
  {
    text: 'Настолки',
    url: 'boardgames.html'
  },
  {
    text: 'Поиск',
    url: 'search.html'
  },
  {
    text: 'Стайлгайд',
    url: 'styleguide.html'
  },
  {
    text: 'Функция',
    url: 'functions.html'
  }
]
const props = {
  prerender: true,
  homeURL,
  menu
}

export { props }
