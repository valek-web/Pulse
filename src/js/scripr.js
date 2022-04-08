const tabs = document.querySelectorAll('.catalog__tab')
const catalogs = document.querySelectorAll('.catalog__content')
const catalog_links = document.querySelectorAll('.start')
const catalog_content = document.querySelectorAll('.catalog-item__content')
const catalog_list = document.querySelectorAll('.catalog-item__list')
const catalog_end = document.querySelectorAll('.end')

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
