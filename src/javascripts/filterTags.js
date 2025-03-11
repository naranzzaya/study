console.clear()
console.log('filterTags')
document.addEventListener('DOMContentLoaded', () => {
  initFilter()
})

function initFilter() {
  const tags = document.querySelectorAll('.A_FilterTag')
  const a = document.querySelector('.all')

  tags.forEach((tag) => {
    tag.addEventListener('click', () => {
      if (tag != a) {
        a.classList.remove('active')
        tag.classList.toggle('active')

        console.log('здесь будет функция фильтрации по ')
      }
    })
  })
}
