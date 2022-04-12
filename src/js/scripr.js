const tabs = document.querySelectorAll('.catalog__tab')
const catalogs = document.querySelectorAll('.catalog__content')
const catalog_links = document.querySelectorAll('.start')
const catalog_content = document.querySelectorAll('.catalog-item__content')
const catalog_list = document.querySelectorAll('.catalog-item__list')
const catalog_end = document.querySelectorAll('.end')
const window_consultation = document.querySelector('.window_consultation')
const window_buy = document.querySelector('.window_buy')
const window_thank = document.querySelector('.thank')
const background = document.querySelector('.background')
const button_call = document.querySelector('.button_call')
const button_consultation = document.querySelector('.button_consultation')
const xmark_consultation = document.querySelector('.xmark_consultation')
const xmark_buy = document.querySelector('.xmark_buy')
const xmark_thank = document.querySelector('.xmark_thank')
const button_buy = document.querySelectorAll('.button_buy')
const button_window_buy = document.querySelector('.button_window_buy')
const button_window_cons = document.querySelector('.button_window_cons')

const window_call = () => {
  background.classList.toggle('background_active')
  window_consultation.classList.toggle('window_consultation_active')
}

button_call.addEventListener('click', () => {
  window_call()
})

button_consultation.addEventListener('click', () => {
  window_call()
})

xmark_consultation.addEventListener('click', () => {
  window_call()
})

xmark_buy.addEventListener('click', () => {
  background.classList.toggle('background_active')
  window_buy.classList.toggle('window_buy_active')
})

button_window_buy.addEventListener('click', () => {
  window_buy.classList.toggle('window_buy_active')
  window_thank.classList.toggle('thank_active')
})

button_window_cons.addEventListener('click', () => {
  window_consultation.classList.toggle('window_consultation_active')
  window_thank.classList.toggle('thank_active')
})

xmark_thank.addEventListener('click', () => {
  window_thank.classList.toggle('thank_active')
  background.classList.toggle('background_active')
})

const slider = tns({
  container: '.carousel__slider',
  items: 1,
  nav: false,
  controls: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
})

document.querySelector('.prev').addEventListener('click', () => {
  slider.goTo('prev')
})

document.querySelector('.next').addEventListener('click', () => {
  slider.goTo('next')
})

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', () => {
    document
      .querySelector('.catalog__tab_active')
      .classList.toggle('catalog__tab_active')
    tabs[i].classList.toggle('catalog__tab_active')
    document
      .querySelector('.catalog__content-active')
      .classList.toggle('catalog__content-active')
    catalogs[i].classList.toggle('catalog__content-active')
  })
}

for (let i = 0; i < catalog_links.length; i++) {
  catalog_links[i].addEventListener('click', () => {
    catalog_content[i].classList.toggle('catalog-item__content-active')
    catalog_list[i].classList.toggle('catalog-item__list-active')
  })
}

for (let i = 0; i < catalog_end.length; i++) {
  catalog_end[i].addEventListener('click', () => {
    catalog_content[i].classList.toggle('catalog-item__content-active')
    catalog_list[i].classList.toggle('catalog-item__list-active')
  })
}

for (let i = 0; i < button_buy.length; i++) {
  button_buy[i].addEventListener('click', () => {
    background.classList.toggle('background_active')
    window_buy.classList.toggle('window_buy_active')
  })
}
