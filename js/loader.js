const isLoad = sessionStorage.getItem('isLoad');

if(!isLoad){
    window.addEventListener('load', ()=>{
        const loader = document.querySelector('.loader');
        const progressBar = document.querySelector('.scale-load-inner');
        if (!progressBar) {
            console.error('Элемент .scale-load-inner не найден!');
            return;
        }
        console.log(progressBar);
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
              clearInterval(interval);
        
              // Начинаем исчезновение лоадера
              loader.classList.add('fade-out'); 
              loader.style.display = 'none';
              sessionStorage.setItem('isLoad', 'true');
            } else {
              width += 1; // Можешь изменить шаг, чтобы ускорить/замедлить
              progressBar.style.width = width + '%';
            }
          }, 20); // Интервал в миллисекундах (меньше = быстрее)
    });    
}
else{
    const loader = document.querySelector('.loader');
    loader.style.display = 'none'; 
}

