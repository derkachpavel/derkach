
var chat= function chat_you(){
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

input_chat.addEventListener("click", chat);

 

text1.addEventListener("keydown", function TAKeyDown(event) {  
    event = event || window.event;
    if(event.keyCode != 13) { return; }
    if (event.preventDefault) {   
        event.preventDefault();
    } else {  
         event.returnValue = false;
    }  
} );

/*var datenow = function datenow(){
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

    local_time_now.innerHTML = hours + ":" + minutes + ":" + seconds;
//    online_time.innerHTML = hours + ":" + minutes + ":" + seconds;
	setTimeout("datenow()", 1000);
}

window.addEventListener("load", datenow);
setTimeout("datenow()", 1000);

*/

var count = function count() {
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
text1.addEventListener("input", count);
text1.addEventListener("keyup", count);