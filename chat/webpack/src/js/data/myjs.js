
/*function testuser(){ //как извлечь данные при нажатии?
	var last = using_pure_js.getElementsByTagName('li').length;
	var last1 = using_pure_js.getElementsByTagName('li')[last-1].innerHTML;
	var testli = this.innerHTML;
	alert(testli);
}

using_pure_js.addEventListener("click", testuser);




function testmess(){
	
	online_1.style.display = "block";
	online_main.style.display = "none";
}
your_name_enter.addEventListener("click", testmess);



function testlast(){
	var last = chat_online_ul.getElementsByClassName('date_pull').length;
	var last1 = chat_online_ul.getElementsByClassName('date_pull')[last-1].innerHTML;
	alert("Время последнего сообщения :" + last1);
}
your_name_enter.addEventListener("click", testlast);


function hello_user(){//записывает имя в приветствие
enter_user.innerHTML = your_name.value;
}
your_name_enter.addEventListener("click", hello_user);


function register_open(){// открытие модального окна
modal_1.style.display = "block";
}
open_reg.addEventListener("click", register_open);  // открыть при редактировании


function register_close(){ // закрыть модальное окно крестиком
modal_1.style.display = "none";
}
close_1.addEventListener("click", register_close);


function register_user(){ // регистрация в модальном окне
if(your_name_reg.value && your_email_reg.value && your_birthday_reg.value){
	enter_user.innerHTML = your_name_reg.value;
	register_close();
	}else{
		alert("Заполните Все поля!");
		}

}
input_reg.addEventListener("click", register_user);



function send_nik_server(){
//передача на сервер user
var xhr = new XMLHttpRequest(); 
var nik = your_name.value;
xhr.onreadystatechange = function () { 
   if (this.readyState != 4) return; 
   if (this.status == 200 || this.status == 201) {
      var data = JSON.parse(this.responseText);
      console.log(data);
    } 
 };
 xhr.open("POST", "https://main-workspace-juggerr.c9users.io:8081/user/register", true); 
 xhr.setRequestHeader('Content-Type', 'application/json');
 xhr.send(JSON.stringify(
 { 
    "username": nik
   }
  ));
 //передача на сервер 
}
your_name_enter.addEventListener("click", send_nik_server);




var date_nowISO = function (){
	var now = new Date();
    var time_ISO = now.toISOString() ; // вывод, похожий на '2011-01-26T13:51:50.417Z'
    return time_ISO;
}

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



var send_massage = function send_massage(){ 

	var text = text1.value; //берем данные из textarea
	var new_li = document.createElement('li');  // создаем li
	var symbol = text1.value.length;  //количество символов
	var reg_space = /\s/g; //проверка пробелов
	if (text1.value.match(reg_space)){  //считаем пробелы
		var reg_space_l = text1.value.match(reg_space).length;
	} else {
		var reg_space_l = 0;
	}
	var space = reg_space_l; //количество пробелов
	
	if (symbol >= 1 && symbol != space) {  //если символов больше или равно 1 и не равно количеству пробелов
		new_li.className = "chat-message-all"; // присваиваем class
			
	    var	date_old = chat_online_ul.getElementsByClassName('date_hidden');// все даты
			
		var li_old = chat_online_ul.getElementsByClassName('chat-message-all'); // НАЛИЧИЕ БЛОКОВ С ИМЕНЕМ  chat-message-all
		
		if (li_old.length ==0){ //проверка на наличие первого элемента
			new_li.innerHTML ="<span class='date_hidden'>"+ +new Date() + "</span><span class='chat_message'>" + text +"</span><span class='date'>" + date_now() + "</span>"; 	
			chat_online_ul.appendChild(new_li); //записываем в конец
	   		chat_online_ul.scrollIntoView(false);

		}else if(+new Date() - date_old[date_old.length-1].innerHTML < 10000){
		var text_old = chat_online_ul.getElementsByClassName('chat_message'); // все сообщения
		var text_last = text_old[text_old.length-1].innerHTML; // тектс последнего сообщения			
		var li_last = li_old[li_old.length-1].innerHTML; // тектс последнего сообщения
		new_li.innerHTML ="<span class='date_hidden'>"+ +new Date() + "</span><span class='chat_message'>" + text_last + "</br>" + text + "</span><span class='date'>" + date_now() + "</span>"; 
		chat_online_ul.appendChild(new_li); //записываем в конец
		chat_online_ul.replaceChild(li_old[li_old.length-1], li_old[li_old.length-2]);  // ЗАМЕНЯЕМ ПОСЛЕДНЮЮ ЗАПИСЬ
		chat_online_ul.scrollIntoView(false);
     	
     	}else{
			new_li.innerHTML ="<span class='date_hidden'>"+ +new Date() + "</span><span class='chat_message'>" + text +"</span><span class='date'>" + date_now() + "</span>"; 	
			chat_online_ul.appendChild(new_li); //записываем в конец
	   		chat_online_ul.scrollIntoView(false);
			}	

	    //передача на сервер
	    
	   // send_massage_server();
	  
		 //передача на сервер
	}

	document.getElementById('text1').value = '';  // очищаем после отправки
}

input_chat.addEventListener("click", send_massage);



function send_massage_server(){
		//передача на сервер
		var text = text1.value; //берем данные из textarea
	    var xhr = new XMLHttpRequest(); 
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
		    "message": text,
		    "user_id":"106440716",
		    "datetime": date_nowISO()
		  }
		  ));
		 //передача на сервер
}


text1.addEventListener("keydown", function TAKeyDown(event) {  
    event = event || window.event;   
    if(event.keyCode != 13) { return; }
    if (event.keyCode == 13) {   // если метод существует
        event.preventDefault(); // то вызвать его    
  
    }
     send_massage(); // оправляем сообщение
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
   var newHtmlText = htmlText.replace(textselect, '<a href="#">' + textselect + '</a>');
  }

	text1.value = newHtmlText;  //куда записывать
	}
}
select_i.addEventListener("click", getSelectionText1);
select_b.addEventListener("click", getSelectionText1);
select_u.addEventListener("click", getSelectionText1);
select_link.addEventListener("click", getSelectionText1);
*/