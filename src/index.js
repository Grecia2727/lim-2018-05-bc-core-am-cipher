

let btnEncode = document.getElementById("botonE");
let ingTexto = document.getElementById("ingTextoHtml");
let salTexto = document.getElementById("salTextoHtml");

btnEncode.addEventListener("click", encriptar);
// addEventListener es una funcion de JS que tiene 2 parametros. 
// Uno de tipo String= clic, y encriptar

	function encriptar(){
	let  llave = document.getElementById("keyHtml").value;
	salTexto.value=cipher.encode(llave, ingTexto.value);
};

// IMPORTANTE: 
// document.getElementById("keyHtml")==> Captura la caja de texto
// .value   ==> captura el valor de la caja de texto.
// salTexto ==> es variable de salida, no tiene un valor para capturar.
// el .value de salTexto ==> es igual al resultado que deseo mostrar. 
// --------------------------------------------------------


