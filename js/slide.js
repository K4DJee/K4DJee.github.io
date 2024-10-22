/*const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    }else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    }else {
        index++;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot)=> {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);*/
// Получаем элементы слайдера
const slider = document.querySelector('.slider');//выбор элемента querySelector(slider)
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));//array-массив из элементов slider(захват всех элементов img)
const slideCount = slides.length;
let slideIndex = 0;
// Добавляем автоматическую смену слайдов
let slideInterval = setInterval(showNextSlide, 3000); // Меняем слайд каждые 3 секунды

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();