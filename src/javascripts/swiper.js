import '../stylesheets/articles.scss'

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 2000
  },
  effect: 'fade',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
})
