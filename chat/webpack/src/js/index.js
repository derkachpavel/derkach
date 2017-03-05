

//var users = require('./data/users');  // Подключение самостоятельно созданного модуля "users"
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
request.open('GET', 'https://main-workspace-juggerr.c9users.io:8081/user', true);

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


/*var request2 = new XMLHttpRequest();
request2.open('GET', 'http://mockbin.com/bin/a61c099a-74a5-43a4-865b-0f723572a381', true);

request2.onload = function() { //получение сообщений от определенных пользователей
  if (request2.status >= 200 && request2.status < 400) {
    // Обработчик успещного ответа
    var response2 = request2.responseText;
    console.log(response2);
 //  document.getElementById('online_users').innerHTML = response1.split('},').length;
    JSON.parse(response2).forEach(
      function (obj) {
        var msUTC = Date.parse(`${obj.time}`);
        if(`${obj.user}`==1 && msUTC>1487236547000){
        
        alert(msUTC+ new Date());
        var ul = document.getElementById('chat_online_ul');
        ul.innerHTML += `<li class="message_pull_all"><span class="user_pull">${obj.user}</span><span class="message_pull">${obj.message}</span><span class="date_pull">${obj.time}</span></li>`;
       chat_online_ul.scrollIntoView(false);
    }
      }
    )
  } else {
    // Обработчик ответа в случае ошибки
  }
};
request2.onerror = function() {
  // Обработчик ответа в случае неудачного соеденения
};
request2.send();


*/


// Выполняется AJAX запрос к внешнему ресурсу c помощью чистого JavaScript получение сообщений
var request1 = new XMLHttpRequest();
request1.open('GET', 'https://main-workspace-juggerr.c9users.io:8081/messages', true);

request1.onload = function() {
  if (request1.status >= 200 && request1.status < 400) {
    // Обработчик успещного ответа
    var response1 = request1.responseText;
    console.log(response1);
 //  document.getElementById('online_users').innerHTML = response1.split('},').length;
    JSON.parse(response1).forEach(
      function (obj) {
        var d = Date.parse(`${obj.datetime}`);
        
        console.log(d);
        var ul = document.getElementById('chat_online_ul');
        ul.innerHTML += `<li class="message_pull_all"><span class="user_pull">${obj.user_id}</span><span class="message_pull">${obj.message}</span><span class="date_pull">${obj.datetime}</span></li>`;
      chat_online_ul.scrollIntoView(false);
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




 //передача на сервер user
/*var xhr1 = new XMLHttpRequest(); 
xhr1.onreadystatechange = function () { 
   if (this.readyState != 4) return; 
   if (this.status == 200 || this.status == 201) {
      var data = JSON.parse(this.responseText);
      console.log(data);
    } 
 };
 xhr1.open("POST", "https://main-workspace-juggerr.c9users.io:8081/user", true); 
 xhr1.setRequestHeader('Content-Type', 'application/json');
 xhr1.send(JSON.stringify(
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