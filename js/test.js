//var myHeading = document.querySelector("h1");//querySelector -захват ссылrb
/*myHeading.textContent = "Hello world!";//сохранили ссылку в переменной myHeading
//textContent свойство представляет собой контент заголовка
//Переменные — это контейнеры, внутри которых вы можете хранить значения. 
//Вы начинаете с того, что объявляете переменную с помощью ключевого слова var 
//(не рекомендуется, продолжайте читать, чтобы получить объяснения) или let,
// за которым следует любое имя, которым вы захотите её назвать:
//получение значения через вызов переменной
myHeading;
alert("негры пидорасы");
function multiply(num1, num2){//параметры, то есть ввод переменных в фунцкию и их использование
    var result = num1 + num2;
    return result;//возращаем переменную для дальнейшего использования
}
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
document.querySelector("html").onclick = function () {//захват ссылки(выбор элемента) срабатывает на клик(событие)
    alert("Ouch! Stop poking me!");
  };
  document.querySelector("krug").onclick = function () {//захват ссылки(выбор элемента) срабатывает на клик(событие)
    alert("Ouch! Stop poking me!");//тег можно вставить
  };
  document.querySelector("html").onclick = function () {};//это такое как и 

  var myHTML = document.querySelector("html");//это, но то короче просто 
myHTML.onclick = function () {};*/
var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");//получение атрибута src
  if (mySrc === "image/icons/html.svg") {//если атрибут переменной mySrc равен вот этому пути, то нужно поменять путь 
    myImage.setAttribute("src", "image/icons/css.svg");
  } else {
    myImage.setAttribute("src", "image/icons/html.svg");//если атрибут переменной MySrc не равнен этому пути, то нужно поменять на исходный путь
  }
};

//фунцкия с кнопкой(запоминание имени)
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
    var myName = prompt("Please enter your name.");//Фунцкия prompt() вызывает диалоговое окно, в которое нужно вписать значение и сохраняет это значение
    localStorage.setItem("name", myName);//setItem это функция из api(localStorage), которое сохраняет значение в свойсвто name и
    //устанавливаем это значение в  переменную
    myHeading.textContent = "Mozilla is cool, " + myName;//вписывание в тег h1 текст и переменную myName
  }//фунцкия заканчивается
  if (!localStorage.getItem("name")) {//если в свойстве name нет значения, запускается фунция setUserName()
    setUserName();
  } else {//иначе мы извлекаем из свойства name значение и записуем в другую переменную, которую используем для вывода
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
  }

  
  myButton.onclick = function () {//нажатие кнопки
    setUserName();//вызов фунции(задать имя)
  };

  
