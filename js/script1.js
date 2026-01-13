const currentLang = localStorage.getItem('lang');
const currentPath = window.location.pathname; // Получаем текущий путь

const ruLang = document.getElementById('ru-lang').addEventListener('click', ()=>{
    localStorage.setItem('lang', 'ru');
    document.location.reload();
} );
const enLang = document.getElementById('en-lang').addEventListener('click', ()=>{
    localStorage.setItem('lang', 'en');
    document.location.reload();
});
if(!currentLang){
    const lang = navigator.language.toLowerCase();
    if(lang.startsWith('ru')){
        console.log('lang ru');
        localStorage.setItem('lang', 'ru');
        window.location.href = '/main_ru.html'; // Редирект на русский сайт
        if (!currentPath.includes('main_ru.html')) {
            window.location.href = '/main_ru.html';
        }
    }
    else if(lang.startsWith('en')){
        console.log('lang en');
        localStorage.setItem('lang', 'en');
        enLang.style.backgroundColor = 'green';
        console.log('green', enLang)
        if (!currentPath.includes('main.html')) {
            window.location.href = '/main.html';
        }
    }
    else {
        console.log("Другой язык:", lang);
        localStorage.setItem('lang', 'en');
        if (!currentPath.includes('main.html')) {
            window.location.href = '/main.html';
        }
    }
}
else{
    if (currentLang === 'ru' && !currentPath.includes('main_ru.html')) {
        window.location.href = '/main_ru.html';
    } else if (currentLang === 'en' && !currentPath.includes('main.html')) {
        window.location.href = '/main.html';
    }
}

function setActiveLanguageColorBtns(currentLang){
    if(currentLang === 'ru'){
        document.getElementById('ru-lang').style.backgroundColor = '#5C5858';
        document.getElementById('en-lang').style.backgroundColor = '';
    }
    else if (currentLang === 'en') {
        document.getElementById('ru-lang').style.backgroundColor = '';
        document.getElementById('en-lang').style.backgroundColor = '#5C5858';
    }
}
document.addEventListener('DOMContentLoaded',()=>{
    setActiveLanguageColorBtns(currentLang);
});


const clickSound = document.getElementById('clickSound');
//Btn sounds
    document.querySelectorAll('.scroll-item-container').forEach(button=>{
    button.addEventListener('click', () =>{
        if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(e => console.log("Ошибка воспроизведения:", e));
    } else {
        console.error("Элемент clickSound не найден");
    }
    });
});

const sideBar = document.querySelector('.sidebar');
var isSideBar = false;
const sideBarBtn = document.querySelector('.sidebar-btn').addEventListener('click', ()=>{
    if(isSideBar === false){
        sideBar.classList.add('active');
        isSideBar = true;
        console.log('sidebar true')
    }
    else if(isSideBar === true){
        sideBar.classList.remove('active');
        isSideBar = false;
        console.log('sidebar false')
    }
});

const clickSideBarSounds = document.getElementById('clickSound');
//Btn sounds
    document.querySelectorAll('.sidebar-s').forEach(button=>{
    button.addEventListener('click', () =>{
        if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(e => console.log("Ошибка воспроизведения:", e));
    } else {
        console.error("Элемент clickSound не найден");
    }
    });
});