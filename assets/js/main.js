window.onload = function(){
	alert("Página cargada");
}

var boton = document.getElementById("demo");
boton.addEventListener('click', function(){
	document.getElementById("espacio").innerHTML ="¡HOLA MUNDO!";
});

var cajaInput = document.getElementById('texto')

cajaInput.addEventListener('mouseout', function(){
	alert('No estas sobre mí');
});

cajaInput.addEventListener('mouseover', function(){
	alert('Estás sobre mi');
});