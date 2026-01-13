
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
          errorMessage.textContent = 'All fields required!';
        }
        else if(!consent.checked){
            errorMessage.style.color = 'var(--theme-text)';
          errorMessage.textContent = 'Confirm the processing of personal data!';
        }
        else if(sendingAmount >= 3){
            errorMessage.style.color = 'red';
          errorMessage.textContent = 'Too many form submissions';
          setTimeout(()=>{
            errorMessage.textContent = 'Wait 2 minutes';
          }, 1500);
          setTimeout(()=>{
            errorMessage.textContent = 'You can submit the form again.';
            sendingAmount = 0;
          }, 120000);
        }
        else{
            errorMessage.style.color = 'var(--theme-text)';
          errorMessage.textContent = 'Sending...';
          if(consent.checked){
            console.log('checked');
            emailjs.send('service_0nl0c2x', 'template_13lnpq8', templateParams)
            .then(function(response) {
            //   alert('Сообщение отправлено!');
              errorMessage.textContent = 'Sent sucessfull!';
              errorMessage.style.color = 'greenyellow';
              sendingAmount+=1;
              console.log(timeObject);
              console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            //   alert('Error sending!');
              errorMessage.textContent = 'Error sending';
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