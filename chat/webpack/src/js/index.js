

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


request.onload = function() { //загрузка пользователей
  if (request.status >= 200 && request.status < 400) {
    // Обработчик успещного ответа
    var response = request.responseText;
 //   console.log(response);
    online_users.innerHTML = response.split('},').length;
    JSON.parse(response).forEach(
      function (obj) {
        var ul = document.getElementById('using_pure_js');
        ul.innerHTML += `<a href="#"><li class="${obj.status}">${obj.username} : ${obj.user_id}</li></a>`;
        using_pure_js.scrollIntoView(false);
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




var q = "внешняя переменная";

// Выполняется AJAX запрос к внешнему ресурсу c помощью чистого JavaScript получение сообщений
var request1 = new XMLHttpRequest();
request1.open('GET', 'https://main-workspace-juggerr.c9users.io:8081/messages', true);


request1.onload = function () {
  if (request1.status >= 200 && request1.status < 400) {
    // Обработчик успещного ответа
    var response1 = request1.responseText;
    console.log(response1);
    var response = request.responseText;
 
/*
    function ww(){
    var ttt ="внутренняя переменная"
    return ttt
    }
    var qq = ww();
    alert(qq);

    
    JSON.parse(response).forEach(
      function (obj1) {
        var l = obj1.username;
        var l2 = obj1.user_id;
  		var ll = l + " :" + l2;
      alert(q);
  //    return ll
      }
    )


*/


    JSON.parse(response1).forEach(
      function (obj) {
        var d1 = new Date(obj.datetime); // берем время с сервера в нужном формате
        var d_hours = d1.getHours();
        if (d_hours < 10){
          d_hours ="0" + d_hours; 
        } else{
           d_hours =d_hours; 
        }
        var d_min = d1.getMinutes(); 
        if (d_min < 10){
          d_min ="0" + d_min; 
        } else{
           d_min =d_min; 
        }
        var d = d_hours + ":" + d_min;  // дата час : минуты

        var ul = document.getElementById('chat_online_ul');
        if(obj.user_id == 106440716){ // user_id отправителя  задаем классы для стилей
    
        ul.innerHTML += `<li class="chat-message-all"><span class="date_hidden">${+new Date()}</span><span class="chat_message">${obj.message}</span><span class="date_pull">${d}</span></li>`;
        chat_online_ul.scrollIntoView(false);
        	}else{ // задаем классы для стилей
        
        ul.innerHTML += `<li class="message_pull_all"><span class="user_pull">${obj.user_id}</span><span class="message_pull">${obj.message}</span><span class="date_pull">${d}</span></li>`;
        chat_online_ul.scrollIntoView(false);
        }
      }
  
    )

  } else {
    alert( request1.status + ': ' + request1.statusText ); // пример вывода: 404: Not Found
  }
};

request1.onerror = function() {
  // Обработчик ответа в случае неудачного соеденения
};

request1.send();

  



/*
var request2 = new XMLHttpRequest();
request2.open('GET', 'https://main-workspace-juggerr.c9users.io:8081/messages', true);

request2.onload = function() { //получение сообщений от определенных пользователей
  if (request2.status >= 200 && request2.status < 400) {
    // Обработчик успещного ответа
    var response2 = request2.responseText;
//    console.log(response2);

    JSON.parse(response2).forEach(
      function (obj) {
        var msUTC = Date.parse(`${obj.datetime}`);
       // console.log(msUTC);
        var msUTC1 = Date.parse(new Date());
        if(msUTC>1488912758108){
        
        console.log(msUTC + ":" +msUTC1);
        var ul1 = document.getElementById('chat_online_ul');
        ul1.innerHTML += `<li class="message_pull_all"><span class="user_pull">${obj.user_id}</span><span class="message_pull">${obj.message}</span><span class="date_pull">${obj.datetime}</span></li>`;
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