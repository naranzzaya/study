import { getPostTeasers } from './search-data'
let content

document.addEventListener('DOMContentLoaded', () => {
  getPostTeasers().then((data) => {
    content = data

    // createCard(content)
  })
})

function initSearch() {
  const O_Search = document.querySelector('.O_Search')
  const A_SearchButton = O_Search.querySelector('.A_SearchButton')
  const A_SearchInput = O_Search.querySelector('.A_SearchInput')

  let requestText = getSearchRequest()

  if (requestText != undefined) {
    A_SearchInput.value = requestText

    if (content) {
      searchContent(requestText)
    }
  } else {
    A_SearchInput.value = ''
  }

  A_SearchInput.addEventListener('input', (e) => {
    requestText = e.target.value
    if (requestText.length >= 3) {
      A_SearchButton.classList.remove('disable')
    } else {
      A_SearchButton.classList.add('disable')
    }
  })

  A_SearchInput.addEventListener('keydown', (e) => {
    requestText = e.target.value

    if (e.key === 'Enter') {
      setSearchRequest(requestText)
      searchContent(requestText)
    }
  })
}

function getSearchRequest() {
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)

  if (searchParams.has('request')) {
    return searchParams.get('request')
  }
}

function createCard(contentData) {
  contentData.forEach((card) => {
    let { id, title, description, url, image, tags } = card

    const contentItem = document.createElement('a')
    contentItem.classList.add('O_ContentItem')
    contentItem.href = url

    const contentItemCover = document.createElement('img')
    contentItemCover.classList.add('A_ContentItemCover')
    contentItemCover.src = image

    const contentItemTitle = document.createElement('h3')
    contentItemTitle.classList.add('O_ContentItemTitle')
    contentItemTitle.innerText = title

    const contentItemDescription = document.createElement('p')
    contentItemDescription.classList.add('O_ContentItemDescription')
    contentItemDescription.innerText = description

    const contentItemTag = document.createElement('div')
    contentItemTag.classList.add('A_ContentItemTag')
    contentItemTag.innerText = tags

    contentItem.appendChild(contentItemCover)
    contentItem.appendChild(contentItemTag)
    contentItem.appendChild(contentItemTitle)
    contentItem.appendChild(contentItemDescription)

    document.querySelector('.S_Content').appendChild(contentItem)
  })
}
