const slider = tns({
  container: '.carousel__slider',
  items: 1,
  nav: false,
  controls: false,
})

document.querySelector('.prev').addEventListener('click', () => {
  slider.goTo('prev')
})

document.querySelector('.next').addEventListener('click', () => {
  slider.goTo('next')
})
