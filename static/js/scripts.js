// Al hacer clic
btn1.onclick = function (){
	alert('Se hizo un clic!');
}

// Al hacer doble clic
btn2.ondblclick = function (){
	alert('Se hizo un doble clic!');
}

// Al pasar el mouse sobre un elemento
btn3.onmouseover = function() {
	var colorHex = "#" + Math.floor(Math.random()*16777215).toString(16);
    btn3.style.backgroundColor = colorHex;
};

// Cuando el mouse deja de estar sobre el elemento
btn4.onmouseout = function() {
	var colorHex = "#" + Math.floor(Math.random()*16777215).toString(16);
    btn4.style.backgroundColor = colorHex;
};

// Cuando se presiona un botón cualquiera del mouse
btn5.onmousedown = function() {
    alert('Se presionó un botón del mouse');
};

// Cuando se presiona y suelta un botón cualquiera del mouse
btn6.onmouseup = function() {
    alert('Se presionó y soltó un botón del mouse');
};

// Cuando el mouse se mueve por un elemento
btn7.onmousemove = function() {
	var colorHex = "#" + Math.floor(Math.random()*16777215).toString(16);
    btn7.style.backgroundColor = colorHex;
};

// Similar al onmouseover pero sin activarse con los elementos secundarios
btn8.onmouseenter = function() {
	var colorHex = "#" + Math.floor(Math.random()*16777215).toString(16);
    btn8.style.backgroundColor = colorHex;
};

// Similar al onmouseout pero sin activarse con los elementos secundarios
btn9.onmouseleave = function() {
	var colorHex = "#" + Math.floor(Math.random()*16777215).toString(16);
    btn9.style.backgroundColor = colorHex;
};

// Se activa al hacer clic derecho sobre el elemento
btn10.oncontextmenu = function() {
    alert('Se hizo clic derecho!');
};

let funcionScroll = true;

// Activa y desactiva los botones de scroll
btn11.onclick = function (){
	let value = window.scrollY;
	if(funcionScroll == true){
		funcionScroll = false;
		btn12.style.display = 'none';
		btn13.style.display = 'none';
	} else if(funcionScroll == false) {
		funcionScroll = true;
		if(value > 50){
			btn13.style.display = 'block';
		} else {
			btn12.style.display = 'block';
		}
	}

}

window.addEventListener('scroll', () => {
    if (funcionScroll) {
        let value = window.scrollY;
        if (value > 50) {
			btn13.style.display = 'block';
			btn12.style.display = 'none';
        } else {
			btn13.style.display = 'none'
			btn12.style.display = 'block'
        }
    }
});

// Hace scroll hacia abajo
btn12.onclick = function (){
	window.scrollBy(0,document.documentElement.scrollHeight);
}

// Hace scroll hacia arriba
btn13.onclick = function (){
	window.scroll(0,0);
}