const htmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const path = require('path')

function createPartials(pathPartial, location) {
  new htmlWebpackPartialsPlugin([
    {
      path: path.join(__dirname, pathPartial),
      location: location,
      template_filename: '*',
      priority: 'replace'
    }
  ])
}

const htmlWebpackPartials = [
  createPartials('../src/partials/footer.html', 'footerPartial')
]
module.exports = htmlWebpackPartials
