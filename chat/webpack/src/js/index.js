
// Выполняется AJAX запрос к внешнему ресурсу c помощью чистого JavaScript получение пользователей

var mass_user =""; //объявляем переменную массив пользователей 

var user_you_id = function user_you_id(){ // записываем id пользоватяля
var new_id = "2121020149"; //id user по умолчанию
var new_id = your_id.innerHTML; //записываем id
var user_new =  enter_user.innerHTML;//берем имя  Hello  
//console.log("Выгрузка с дива при записи" + mass_user);

function replaceName(item) {  // для замены имя на id пользователя
  var user_name = item.username;
  if(user_new == user_name){
  new_id =  item.user_id; // задаем id
  your_id.innerHTML = new_id;
//  console.log("new_id " +new_id+" item.username " +item.username);
  }
}
JSON.parse(mass_user).forEach(replaceName);
    return new_id;
};


// !! Получение темы

var requestTopic = new XMLHttpRequest();
 requestTopic.open('GET', 'https://serveryaz-andreyyaz.c9users.io:8081/discussionTopic', true); 
 requestTopic.onload = function() {
   if (requestTopic.status >= 200 && requestTopic.status < 400) {
     // Обработчик успещного ответа
     var responseT = requestTopic.responseText;

     var discussion = JSON.parse(responseT);
     var discussionTopic = "Тема пока не объявлена";
     var discussionTopic = discussion[discussion.length -1].discussionTopic;

     tema_day.innerHTML = "<span>Тема дня: </span>" + discussionTopic  ;
     tema.innerHTML =  discussionTopic  ;
   } else {
     // Обработчик ответа в случае ошибки
   }
 };
 requestTopic.onerror = function() {
   // Обработчик ответа в случае неудачного соеденения
 };
 requestTopic.send();


// сравниваем пользователей

function pull_user_var() { // заносим пользователей в div

var request_var = new XMLHttpRequest();
request_var.open('GET', 'https://serveryaz-andreyyaz.c9users.io:8081/users', true);

request_var.onload = function pull_user() { //загрузка пользователей
  if (request_var.status >= 200 && request_var.status < 400) {
    // Обработчик успешного ответа
    var response_var = request_var.responseText;
    mass_user = response_var; // заносим пользователей в переменную
    JSON.parse(response_var).forEach(
      function (obj) {
        
      }
    )
  } else {
  
    // Обработчик ответа в случае ошибки
  }
};

request_var.onerror = function() {
  // Обработчик ответа в случае неудачного соеденения
};
request_var.send();
};

pull_user_var();
setInterval(pull_user_var, 1000);



//получение пользователей с сервера
var pull_user_new = function pull_user_new() {

var request = new XMLHttpRequest();
request.open('GET', 'https://serveryaz-andreyyaz.c9users.io:8081/users', true);

request.onreadystatechange = function pull_user() { //загрузка пользователей
   if (this.readyState != 4) return;
   if (this.status == 200 || this.status == 201) {
    // Обработчик успешного ответа
    var response = request.responseText;
    online_users.innerHTML = response.split('},').length;
    using_pure_js.innerHTML="";
    JSON.parse(response).forEach(
      function (obj) {

        var ul = document.getElementById('using_pure_js');
        ul.innerHTML += `<li class="user">${obj.username}</li>`;
      }
    )
      
  } else {
  
    // Обработчик ответа в случае ошибки
  }
};

request.onerror = function() {
  alert("Нет соединения с сервером 'https://serveryaz-andreyyaz.c9users.io:8081/users"+ "Стату:" + request.status);
   console.log("Нет соединения с сервером'https://serveryaz-andreyyaz.c9users.io:8081/users' "+"Стату:" + request.status);
  // Обработчик ответа в случае неудачного соеденения
};
request.send();
};
pull_user_new();
setInterval(pull_user_new, 3000);





// Получение сообщений с сервера


var last_date = "0";
var request1 = new XMLHttpRequest();
request1.open('GET', 'https://serveryaz-andreyyaz.c9users.io:8081/messages', true);

request1.onreadystatechange = function pull_message() {
  if (this.readyState != 4) return;
  if (this.status == 200 || this.status == 201) {
    // Обработчик успещного ответа
    var response1 = request1.responseText;
 //   console.log(response1);
    var prevDate = "March 01";
    JSON.parse(response1).forEach(
      function (obj) {
        var d1 = new Date(obj.datetime); // берем время с сервера в нужном формате
        var options = {
            month: 'long',
            day: 'numeric'
          };

        var d_month = d1.getMonth();
        var d_date = d1.getDate();

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
        var dm = d1.toLocaleString("en-US", options);  

        var d_m_d = d_date;
        if(new Date(obj.datetime).toLocaleString("en-US", options) == new Date().toLocaleString("en-US", options)){
          dm = "Today";
        }
        
        last_date = Date.parse(obj.datetime); // время последнего сообщения на сервере 
        var user =  obj.user_id;    

        function Elem1(elem) {  // для замены id на имя пользователя
          var user1 = elem.user_id;
          if(user == user1){
          user =  elem.username; // user переменая
          }
        }
        JSON.parse(mass_user).forEach(Elem1);

        var ul = document.getElementById('chat_online_ul');        
        var nxDate = new Date(obj.datetime).toLocaleString("en-US", options);

       if (nxDate != prevDate){

        ul.innerHTML +=`<div class="day_date">-------------------------  ${dm}  -------------------------</div>`;
      }
        prevDate = new Date(obj.datetime).toLocaleString("en-US", options);

        ul.innerHTML += `<li class="message_pull_all"><span class="user_pull">${user}</span><span class="message_pull">${obj.message}</span><span class="date_pull">${d}</span></li>`;

        nxDate = new Date(obj.datetime).toLocaleString("en-US", options);
        chat_online_ul.scrollIntoView(false);
      }
  
    )

  } else {
    alert( request1.status + ': ' + request1.statusText ); // пример вывода: 404: Not Found
  }
};

request1.onerror = function() {
   alert("Нет соединения с сервером 'https://serveryaz-andreyyaz.c9users.io:8081/messages' "+ "Стату:" + request.status);
   console.log("Нет соединения с сервером'https://serveryaz-andreyyaz.c9users.io:8081/messages' "+"Стату:" + request.status);
 
  // Обработчик ответа в случае неудачного соеденения
};

request1.send();




// добавления сообщений
function add_message(){
var request2 = new XMLHttpRequest();
request2.open('GET', 'https://serveryaz-andreyyaz.c9users.io:8081/messages', true);

request2.onload = function () { //добавление сообщений сообщений от определенных пользователей
  if (request2.status >= 200 && request2.status < 400) {
    // Обработчик успещного ответа
    var response2 = request2.responseText;
    
    JSON.parse(response2).forEach(
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

        var user =  obj.user_id;    

        
        function Elem1(elem) {  // для замены id на имя пользователя
          var user1 = elem.user_id;
          if(user == user1){
          user =  elem.username; // user переменая
          }
        }
        JSON.parse(mass_user).forEach(Elem1);
        var msUTC = Date.parse(obj.datetime); // время сообщения на сервере 


        if(msUTC>last_date){
          var newli = document.createElement('li');      
          newli.className = "message_pull_all"; // присваиваем class
          newli.innerHTML = `<span class="user_pull">${user}</span><span class="message_pull">${obj.message}</span><span class="date_pull">${d}</span>`;
          chat_online_ul.appendChild(newli);
          chat_online_ul.scrollIntoView(false);
          last_date = msUTC;
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
}
setInterval(add_message, 2000);




your_name_reg.addEventListener('keydown', function(event) {
    event = event || window.event;   
    if(event.keyCode != 13) { return; }
    if (event.keyCode == 13) {   // если метод существует
        event.preventDefault(); // то вызвать его   
     }   
 });



function register_close(){ // закрыть модальное окно крестиком
modal_1.style.display = "none";
}


function exit(){
  location.reload(); //перезагрузка страницы
  wrapper.style.display = "none";
  modal_1.style.display = "block";

}
exit_chat.addEventListener("click", exit);



//передача темы на сервер
var send_tema_server = function send_tema_server(){
var xhr = new XMLHttpRequest(); 
var tema = text1.value;
xhr.onreadystatechange = function () { 
   if (this.readyState != 4) return; 
   if (this.status == 200 || this.status == 201) {
      var data = JSON.parse(this.responseText);
 //     console.log(data);
    } 
 };
 xhr.open("POST", "https://serveryaz-andreyyaz.c9users.io:8081/discussionTopic/register", true); 
 xhr.setRequestHeader('Content-Type', 'application/json');
 xhr.send(JSON.stringify(
 { 
    "discussionTopic": tema,
    "user_id":user_you_id()

   }
  ));
 document.getElementById('text1').value = '';  // очищаем после отправки

}
select_tema.addEventListener("click", send_tema_server);



function entry_user(){ // регистрация в модальном окне

  pull_user_var(); // обновляем пользователей
if(your_name_reg.value !=""){
  var user_enter = your_name_reg.value;
  enter_user.innerHTML = your_name_reg.value;

  function checkName(item) {  // для проверки имени пользователя
  var user_name = item.username;
  if(user_enter == user_name){
  enter_user.innerHTML = your_name_reg.value; // записываем юзера в ди
    if (user_enter == 'andreyyaz' || user_enter == 'Derkach Pavel') {
      var pass = prompt("Введите пароль","");
      if(pass!=111){
        alert("Неверный пароль!");
        return;
      }else{
         document.getElementById('select_tema').type = "button";
         document.getElementById('delMess').style.display = "block";
         document.getElementById('delUsers').style.display = "block";
         document.getElementById('delTema').style.display = "block";
         wrapper.style.display = "block";  
        };
      }
  register_close();    
  wrapper.style.display = "block";
  }else{
   err.innerHTML = "Такой пользователь не зарегистрирован!";
   setTimeout(function(){err.innerHTML =""},4000);
  }
  
}

JSON.parse(mass_user).some(checkName);
  user_you_id();
  pull_user_new();
  }else{
    alert("Заполните поле!");
    }
}
input_enter.addEventListener("click", entry_user);


function register_user(){ // регистрация в модальном окне
if(your_name_reg.value !=""){
  enter_user.innerHTML = your_name_reg.value;
  send_nik_server(); //отправка id_user на сервер
  alert("Спасибо за регистрацию!")
  setTimeout(entry_user,1500); 

  }else{
    alert("Заполните поле!");
    }

}
input_reg.addEventListener("click", register_user);



function send_nik_server(){
//передача на сервер user
var xhr = new XMLHttpRequest(); 
var nik = your_name_reg.value;
xhr.onreadystatechange = function () { 
   if (this.readyState != 4) return; 
   if (this.status == 200 || this.status == 201) {
      var data = JSON.parse(this.responseText);
 //     console.log(data);
    } 
 };
 xhr.open("POST", "https://serveryaz-andreyyaz.c9users.io:8081/users/register", true); 
 xhr.setRequestHeader('Content-Type', 'application/json');
 xhr.send(JSON.stringify(
 { 
    "username": nik
   }
  ));
 //передача на сервер 
}




// Очистка сообщений
function delMess(){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {

   if (this.readyState != 4) return;
   if (this.status == 200 || this.status == 201) {
       var data = JSON.parse(this.responseText);
       console.log("!!" +this.responseText);
       
   } else {
     console.log('Ошибка');
   }};
xhr.open("POST", "https://serveryaz-andreyyaz.c9users.io:8081/messages/delete", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
  "user_id":"",
  "message":"",
  "datetime":"" ,
  "chatroom_id":""
  }
  ));
}
document.getElementById('delMess').addEventListener("click", delMess);


// Очистка списка пользователей
function delUsers(){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {

   if (this.readyState != 4) return;  
   if (this.status == 200 || this.status == 201) {
       var data = JSON.parse(this.responseText);
       console.log("!!" +this.responseText);
       
   } else {
     console.log('Ошибка');
   }};
xhr.open("POST", "https://serveryaz-andreyyaz.c9users.io:8081/users/delete", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
  "user_id":"",
  "username": "",
  "status":""
  }
  ));
}
document.getElementById('delUsers').addEventListener("click", delUsers);

function delTema(){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {

   if (this.readyState != 4) return;   
   if (this.status == 200 || this.status == 201) {
       var data = JSON.parse(this.responseText);
       console.log("!!" +this.responseText);
       
   } else {
     console.log('Ошибка');
   }};
xhr.open("POST", "https://serveryaz-andreyyaz.c9users.io:8081/discussionTopic/delete", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
  "discussionTopic":"",
  "user_id": ""
  }
  ));
}
document.getElementById('delTema').addEventListener("click", delTema);


var date_now = function (){
  var now = new Date();
  var hours = now.getHours();
  if (hours < 10){
    hours = "0" + hours;
  } else {
    hours = hours;
  };

  var minutes = now.getMinutes();
  if (minutes < 10){
    minutes = "0" + minutes;
  } else {
    minutes = minutes;
  }

  var seconds = now.getSeconds();
  if (seconds < 10){
    seconds = "0" + seconds;
  } else {
    seconds = seconds;
  } 
  var time_now = hours + ":" + minutes;
  return time_now;
}



function send_massage_server(){
    //передача на сервер
    
    var BodyMess = { // заглушка
        "datetime": "2017-03-30T15:46:48.382Z",
        "message": "test-test",
        "user_id": "2121020149"  // user_you_id()
        
      }

    var text = text1.value; 
    var now = new Date();
    var xhr = new XMLHttpRequest(); 
    xhr.onreadystatechange = function () { 
       if (this.readyState != 4) return; 
       if (this.status == 200 || this.status == 201) {
          var data = JSON.parse(this.responseText);
    //      console.log(data);
        } 
     };
     xhr.open("POST", "https://serveryaz-andreyyaz.c9users.io:8081/messages", true); 
     xhr.setRequestHeader('Content-Type', 'application/json');
     BodyMess.datetime = now.toISOString();// вывод, похожий на '2011-01-26T13:51:50.417Z'
     BodyMess.message = text1.value;//берем данные из textarea
     BodyMess.user_id = user_you_id(); //берем user_id

      var symbol = text1.value.length;  //количество символов
      var reg_space = /\s/g; //проверка пробелов
      if (text1.value.match(reg_space)){  //считаем пробелы
      var reg_space_l = text1.value.match(reg_space).length;
      } else {
      var reg_space_l = 0;
      }
      var space = reg_space_l; //количество пробелов

      if (symbol >= 1 && symbol != space){


     xhr.send(JSON.stringify(BodyMess));
     }

      document.getElementById('text1').value = '';  // очищаем после отправки
     //передача на сервер
};
input_chat.addEventListener("click", send_massage_server);



text1.addEventListener("keydown", function TAKeyDown(event) {  
    event = event || window.event;   
    if(event.keyCode != 13) { return; }
    if (event.keyCode == 13) {   // если метод существует
        event.preventDefault(); // то вызвать его    
  
    }
     send_massage_server(); // оправляем сообщение
     count_reset();  // очищаем подсчет символов
} );

 
function count_reset(){
  symbol.innerHTML = "0";
  letter.innerHTML = "0";
  space.innerHTML = "0";
  punctuation.innerHTML = "0";

}
input_chat.addEventListener("click", count_reset);



function count() {
  symbol.innerHTML = text1.value.length; // подсчет общего количества символов
  
  var reg_letter = /[А-ЯЇЁа-яїёьъA-Za-z]/g;  // проверка букв алфавита
  
  if (text1.value.match(reg_letter)){
    var reg_letter_l = text1.value.match(reg_letter).length;
  } else {
    var reg_letter_l = 0;
  }
  letter.innerHTML = reg_letter_l;
    
  var reg_space = /\s/g;   // проверка пробелов
  if (text1.value.match(reg_space)){
    var reg_space_l = text1.value.match(reg_space).length;
  } else {
    var reg_space_l = 0;
  }
  space.innerHTML = reg_space_l;
  
  
  var reg_punctuation = /[.,;:!?]/g;   // проверка пунктуации
  if (text1.value.match(reg_punctuation)){
    var reg_punctuation_l = text1.value.match(reg_punctuation).length;
  } else {
    var reg_punctuation_l = 0;
  }
  punctuation.innerHTML = reg_punctuation_l;

 }
text1.addEventListener("input", count);


function datenow(){  //текущее время
    local_time_now.innerHTML = date_now(); // берем из функции date_now()
}
setInterval(datenow, 0);


var startday = new Date();
var clockStart = startday.getTime();


function timeonline(){

  var now = new Date(); // текущее время

  var fut = startday; // введенное время надо заменить на время входа в чат

  var delta = now -fut ; // разница во времени ( в миллисекундах)

  var s = delta/1000; // переводим в секунды
  var m = delta/1000/60; // переводим в минуты
  var h = delta/1000/3600; //переводим в часы


  var m_c = Math.floor(m); //целое возвращаем минуты
  var h_c = Math.floor(h);//целое возвращаем часы
  var m_m = m_c%60; //остаток минут

  if (s>3600){  
  var s1 = s-h_c*3600-m_m*60; // отнимаем часы и минуты от секунд
  } else if (s>60){
    var s1 = s-m_m*60; // отнимаем минуты от секунд 
    } else {
      var s1 = s; // выводим секунды
    }

  var s_c = Math.floor(s1); // берем целую часть секунд
  if (s_c<10){
    s_c = "0" + s_c;  // добавляем 0 для красоты
  }else {
    s_c = s_c;
  }

  if (m_m<10){
    m_m = "0" + m_m; // добавляем 0 для красоты
  } else {
    m_m = m_m;
  }

  if (h_c<10){
    h_c = "0" + h_c; // добавляем 0 для красоты
  }else {
    h_c = h_c;
  }

  online_time.innerHTML = h_c + ":" + m_m + ":" + s_c;
}
setInterval(timeonline, 0);


function getSelectionText1() { //такая конструкция работает с textarea
  
var selStart = 0, selEnd = 0;
selStart = text1.selectionStart;
selEnd = text1.selectionEnd;
var textselect = text1.value.substr(selStart, selEnd-selStart);
if (textselect = text1.value.substr(selStart, selEnd-selStart)){ // если есть выделение
  var htmlText = text1.value;
  if(this.getAttribute('Class') == 'format-italics'){// для наклонного стиля
   var newHtmlText = htmlText.replace(textselect, '<i>' + textselect + '</i>');
  }
  if(this.getAttribute('Class') == 'format-fat'){// для жирного
   var newHtmlText = htmlText.replace(textselect, '<b>' + textselect + '</b>');
  }
  if(this.getAttribute('Class') == 'format-underline'){ //для подчеркивания
   var newHtmlText = htmlText.replace(textselect, '<u>' + textselect + '</u>');
  }
  if(this.getAttribute('Class') == 'format-link'){ //для подчеркивания
   var newHtmlText = htmlText.replace(textselect, '<a href="'+ textselect +'">' + textselect + '</a>');
  }

  text1.value = newHtmlText;  //куда записывать
  }
}
select_i.addEventListener("click", getSelectionText1);
select_b.addEventListener("click", getSelectionText1);
select_u.addEventListener("click", getSelectionText1);
select_link.addEventListener("click", getSelectionText1);