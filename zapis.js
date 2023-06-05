document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Получаем значения полей формы
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
  
    // Ваш код обработки отправки формы
    // Например, можно отправить данные на сервер с помощью AJAX или другого метода
    
    // Очищаем значения полей формы
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('date').value = '';
  });
  