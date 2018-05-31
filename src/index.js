
let btnEncode = document.getElementById("botonE");
let btnLimpiar = document.getElementById("botonLimpiar");
let btnDecode = document.getElementById("botonD");
let ingTexto = document.getElementById("ingTextoHtml");
let salTexto = document.getElementById("salTextoHtml");


btnEncode.addEventListener("click", encriptar);
function encriptar() {
	let llave = document.getElementById("keyHtml").value;
	salTexto.value = cipher.encode(llave, ingTexto.value);
}


btnDecode.addEventListener("click", desencriptar);
function desencriptar() {
	let llave = document.getElementById("keyHtml").value;
	salTexto.value = cipher.decode(llave, ingTexto.value);
}


btnLimpiar.addEventListener("click", limpiar);  
function limpiar() {
	document.getElementById("ingTextoHtml").value = "";
	document.getElementById("keyHtml").value = "";
	document.getElementById("salTextoHtml").value = "";
}

// IMPORTANTE: 
// document.getElementById("keyHtml")==> Captura la caja de texto
// .value   ==> captura el valor de la caja de texto.
// salTexto ==> es variable de salida, no tiene un valor para capturar.
// el .value de salTexto ==> es igual al resultado que deseo mostrar. 
// --------------------------------------------------------


