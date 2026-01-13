var sendingAmount = 0;
(function() {emailjs.init("RdlRu_79ekTycPPB_");

const consent = document.getElementById('checkbox-policy');
const errorMessage = document.querySelector('.error-message');
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // предотвращаем перезагрузку
    var timeObject = new Date();
    const templateParams = {
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
      time: timeObject.toLocaleString('ru',options)
    };  
    if(!templateParams.email || !templateParams.message){
      errorMessage.style.color = 'var(--theme-text)';
      errorMessage.textContent = 'Некоторые поля не заполнены!';
    }
    else if(!consent.checked){
      errorMessage.style.color = 'var(--theme-text)';
      errorMessage.textContent = 'Для отправки заявки, обработка персональных данных обязательна!';
    }
    else if(sendingAmount >= 3){
      errorMessage.style.color = 'red';
    errorMessage.textContent = 'Слишком много отправок формы';
    setTimeout(()=>{
      errorMessage.textContent = 'Подождите 2 минту';
    }, 1500);
    setTimeout(()=>{
      errorMessage.style.color = 'var(--theme-text)';
      errorMessage.textContent = 'Вы можете снова отправить форму';
      sendingAmount = 0;
    }, 120000);
  }
    else{
      errorMessage.style.color = 'var(--theme-text)';
      errorMessage.textContent = 'Отправка...';
      if(consent.checked){
        console.log('checked');
        emailjs.send('service_0nl0c2x', 'template_13lnpq8', templateParams)
        .then(function(response) {
           //alert('Сообщение отправлено!');
           errorMessage.textContent = 'Успешная отправка!';
           errorMessage.style.color = 'greenyellow';
          console.log(timeObject);
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          // alert('Ошибка при отправке.');
          errorMessage.textContent = 'Ошибка отправки';
          errorMessage.style.color = 'red';
          console.error('FAILED...', error);
          console.log(templateParams);
        });
      }
      else{
        console.log('not checked');
        
      }
    }
  });
})();

var options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
};