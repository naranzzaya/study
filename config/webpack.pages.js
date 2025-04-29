const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}
const HtmlWebpackPluginPages = [
  createPages('./src/index.html', './index.html', ['index', 'dices']),
  // Страницы разделов
  createPages('./src/articles.html', './articles.html', [
    'index',
    'swiper',
    'filterTags'
  ]),
  createPages('./src/boardgames.html', './boardgames.html', ['index']),
  // Публикации в разделе "Статьи" (articles)
  createPages(
    './src/articles/about-games.html',
    './articles/about-games.html',
    ['index', 'articleContent']
  ),
  createPages('./src/articles/eclipse.html', './articles/eclipse.html', [
    'index',
    'articleContent'
  ]),
  createPages('./src/articles/era-konana.html', './articles/era-konana.html', [
    'index',
    'articleContent'
  ]),
  // Публикации в разделе "Игры" (boardgames)
  createPages(
    './src/boardgames/gloomhaven.html',
    './boardgames/gloomhaven.html',
    ['index']
  ),
  // Pages
  createPages('./src/pages/theory.html', './pages/theory.html', ['theory']),
  // ADC Dictionary
  createPages(
    './src/dictionary/dictionary.html',
    './dictionary/dictionary.html',
    ['dictionary']
  ),
  // Основы js
  createPages('./src/js-basic/js-basic.html', './js-basic/js-basic.html', [
    'jsBasic'
  ]),
  createPages('./src/functions.html', './functions.html', [
    'index',
    'functions'
  ]),
  // Тесты
  createPages('./src/tests/test1.html', './tests/test1.html', ['tests']),
  createPages('./src/search.html', './search.html', ['index', 'searchVanilla']),
  createPages('./src/react-basics.html', './react-basics.html', ['reactBasics'])
]
module.exports = HtmlWebpackPluginPages
