
function datenow(){
	var now = new Date();
    var hours = now.getHours();
    if (hours < 10){
    	hours = "0" + hours;
    } else {
    	hours = hours;
    }

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

    local_time_now.innerHTML = hours + ":" + minutes + ":" + seconds;
//    online_time.innerHTML = hours + ":" + minutes + ":" + seconds;
	setTimeout("datenow()", 1000);
}


startday = new Date();
clockStart = startday.getTime();

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

	setTimeout("timeonline()", 1000);
}


 function count() {
	symbol.innerHTML = text1.value.length;
	
	var reg_letter = /[А-ЯЇЁа-яїёьъA-Za-z]/g;
	
	if (text1.value.match(reg_letter)){
		var reg_letter_l = text1.value.match(reg_letter).length;
	} else {
		var reg_letter_l = 0;
	}
	letter.innerHTML = reg_letter_l;
		
	var reg_space = /\s/g;
	if (text1.value.match(reg_space)){
		var reg_space_l = text1.value.match(reg_space).length;
	} else {
		var reg_space_l = 0;
	}
	space.innerHTML = reg_space_l;
	
	
	var reg_punctuation = /[.,;:!?]/g;
	if (text1.value.match(reg_punctuation)){
		var reg_reg_punctuation_l = text1.value.match(reg_punctuation).length;
	} else {
		var reg_reg_punctuation_l = 0;
	}
	punctuation.innerHTML = reg_reg_punctuation_l;

 }

 function chat_you(){
 	var text = text1.value; //берем данные из textarea
	var new_div = document.createElement('div');  // создаем div
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
	new_div.className = "chat-author"; // присваиваем class
    new_div.innerHTML = "<span class='author'>" + author + ":" + "</span><span class='chat-message'>" + text + "</span>";  // заполняем div
	chat_online_div.appendChild(new_div); //записываем в конец
	}
} 