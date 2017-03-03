

var users = require('./data/users');  // Подключение самостоятельно созданного модуля "users"
var send_massage = require('./data/myjs');  // Подключение самостоятельно созданного модуля "users"
//var count = require('./data/myjs');  // Подключение самостоятельно созданного модуля "users"
//var datenow = require('./data/myjs');
 

 /*users.data.forEach(
  function (obj) {
    var ul = document.getElementById('from-file');
    ul.innerHTML += `<li>${obj.name} ${obj.status}</li>`;
  }
) */


// Выполняется AJAX запрос к внешнему ресурсу c помощью чистого JavaScript получение пользователей
var request = new XMLHttpRequest();
request.open('GET', 'http://mockbin.com/bin/b23dd106-4ac5-431f-baea-600457e4e834', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Обработчик успещного ответа
    var response = request.responseText;
    console.log(response);
    online_users.innerHTML = response.split('},').length;
    JSON.parse(response).forEach(
      function (obj) {
        var ul = document.getElementById('using-pure-js');
        ul.innerHTML += `<li class="${obj.status}">${obj.username}</li>`;
      }
    )
  } else {
    // Обработчик ответа в случае ошибки
  }
};
request.onerror = function() {
  // Обработчик ответа в случае неудачного соеденения
};
request.send();





/*// Выполняется AJAX запрос к внешнему ресурсу c помощью чистого JavaScript получение сообщений
var request1 = new XMLHttpRequest();
request1.open('GET', 'http://mockbin.com/bin/a61c099a-74a5-43a4-865b-0f723572a381', true);

request1.onload = function() {
  if (request1.status >= 200 && request1.status < 400) {
    // Обработчик успещного ответа
    var response1 = request1.responseText;
    console.log(response1);
    JSON.parse(response1).forEach(
      function (obj) {
        var ul = document.getElementById('chat_online_ul');
        ul.innerHTML += `<li class="message_pull_all"><span class="user_pull">${obj.user}</span><span class="message_pull">${obj.message}</span><span class="date_pull">${obj.time}</span></li>`;
      }
    )
  } else {
    // Обработчик ответа в случае ошибки
  }
};
request1.onerror = function() {
  // Обработчик ответа в случае неудачного соеденения
};
request1.send();
*/





 //передача на сервер
/*var xhr = new XMLHttpRequest(); 
xhr.onreadystatechange = function () { 
   if (this.readyState != 4) return; 
   if (this.status == 200 || this.status == 201) {
      var data = JSON.parse(this.responseText);
      console.log(data);
    } 
 };
 xhr.open("POST", "https://main-workspace-juggerr.c9users.io:8081/messages", true); 
 xhr.setRequestHeader('Content-Type', 'application/json');
 xhr.send(JSON.stringify(
 { 
    "datetime": "2017-02-23T16:21:34.550Z", 
    "message": "Some text",
    "user_id": "Alexxxxxxx"
  }
  ));*/
 //передача на сервер 

/*var $ = require('jquery');  // Подключение установленной библиотеки jQuery

// Выполняется AJAX запрос к внешнему ресурсу c помощью jQuery
$.ajax({
  type: 'GET',
  url: 'http://mockbin.com/bin/35ea6adb-2b94-4c48-93f7-4b02b4849e3e',
  success: function(response) {  // Обработчик успещного ответа
    console.log(response); // Вывод содержимого ответа в консоль

    $.parseJSON(response).forEach(
      function (obj) {
        $("#using-jquery").append(`<li>${obj.name} ${obj.status}</li>`);
      }
    )
  },
  error: function(data, status) {  // Обработчик ответа в случае ошибки
    console.error(data, status);
  }
});*/