
function your_nik(){
var your_nik = your_name.value;
return your_nik;
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
    var time_now = hours + ":" + minutes + ":" + seconds;
  	return time_now;
}



var send_massage = function send_massage(){ 
	//var date = new Date().getHours()+":"+new Date().getMinutes();

	var text = text1.value; //берем данные из textarea
	var new_li = document.createElement('li');  // создаем div
	var author = "You";
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
	    new_li.innerHTML = "<span class='chat-message'>" + text + "</span><span class='date'>" + date_now() + "</span>";  // заполняем div
		chat_online_ul.appendChild(new_li); //записываем в конец
		chat_online_ul.scrollIntoView(false);
	    //передача на сервер
	    send_massage_server();
	  
		 //передача на сервер
	}

	document.getElementById('text1').value = '';  // очищаем после отправки
}

input_chat.addEventListener("click", send_massage);



function send_massage_server(){
		//передача на сервер
		var text = text1.value; //берем данные из textarea
		var author = "You";
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
		    "datetime": date_now(), 
		    "message": text,
		    "user_id": your_nik()
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
  
var selRange = 0, selStart = 0, selEnd = 0;
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
   var newHtmlText = htmlText.replace(textselect, '<u>' + textselect + '</u');
  }

	text1.value = newHtmlText;  //куда записывать
	}
}
select_i.addEventListener("click", getSelectionText1);
select_b.addEventListener("click", getSelectionText1);
select_u.addEventListener("click", getSelectionText1);