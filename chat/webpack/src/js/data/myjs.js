 

function testuser(){ //как извлечь данные при нажатии?
  var i = 5;
  var last = using_pure_js.getElementsByTagName('a').length;
  var last1 = using_pure_js.getElementsByTagName('a')[i].getAttribute('id');
  var testli = event.target.innerText;
  var testli1 = event.target.getAttribute('id');

  alert(testli);
}

//var myuser = using_pure_js.getElementsByTagName('a').length;
//alert (myuser);
using_pure_js.addEventListener("click", testuser);


/* 


//тест как достать последнюю дату
function add_last_date(){
var request3 = new XMLHttpRequest();
request3.open('GET', 'https://main-workspace-juggerr.c9users.io:8081/messages', true);


request3.onload = function () { //добавление сообщений свежих сообщений 
  if (request3.status >= 200 && request3.status < 400) {
    // Обработчик успещного ответа
    var response3 = request3.responseText;
//    console.log(response2);
    var date_len = response3.split('},').length; // количество сообщений
    alert("Всего сообщений:" + date_len);
    alert (response3);
     
  } else {
    // Обработчик ответа в случае ошибки
  }
};
request3.onerror = function() {
  // Обработчик ответа в случае неудачного соеденения
};
request3.send();
}
pull_server_date.addEventListener("click", add_last_date);
//setInterval(add_last_date, 2000);

//тест как достать последнюю дату*/

