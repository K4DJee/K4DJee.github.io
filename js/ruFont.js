function setFontFamily(font) {
    document.body.style.fontFamily = font;
  
    // Если нужно — можно применить стили к конкретным тегам
    const allElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, div, li, span');
    allElements.forEach(el => {
      el.style.fontFamily = font;
    });
  }

// Вызываем после загрузки DOM
document.addEventListener("DOMContentLoaded", function () {
    setFontFamily("'Segoe UI', sans-serif");
  });