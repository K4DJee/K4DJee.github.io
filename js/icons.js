// Выбираем все элементы <a> на странице
const allLinks = document.querySelectorAll('a');

// Добавляем обработчик события 'click' для каждого элемента <a>
allLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Получаем значение href
    var myHref = link.getAttribute("href");

    // Проверяем, является ли ссылка нерабочей
    if (myHref === "" || myHref === "#!") {
      event.preventDefault(); // Предотвращаем стандартное поведение перехода по ссылке
      alert('Упс, эта ссылка не работает. Возможно её скоро добавят.');
    } else {
      // Перенаправляем на рабочую ссылку
      window.location.href = myHref; 
    }
  });
});