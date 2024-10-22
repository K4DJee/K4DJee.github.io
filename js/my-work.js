var choice = document.querySelector("button");
var myHeading = document.querySelector("h2");
function setChoice(){
    var myChoice = prompt("Если вы не ответите на этот вопрос, вы клоун! В каком году был создан этот сайт?");
    localStorage.setItem("choice", myChoice);
    if(myChoice === "2024"){
        myChoice = "не клоун";
    }
    else{
        myChoice = "клоун";
    }
    myHeading.textContent = "Вы " + myChoice;
}
    choice.onclick = function () {//нажатие кнопки
    setChoice();//вызов фунции(задать имя)
  };