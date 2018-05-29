window.cipher = {    //"cipher" es el nombre del objeto, si deseo puedo cambiar de nombre al objeto.

  encode: (offset, string) => {
      let nuevoTexto = '';
      let ingresarTexto = string;
      let key = parseInt(offset);
      for (let i = 0; i < ingresarTexto.length; i++) {
        let convAscii = ingresarTexto.charCodeAt(i);
        
        if (convAscii >= 65 && convAscii <= 90) {
          nuevoTexto += String.fromCharCode((convAscii - 65 + key) % 26 + 65); // Mayus
        } else if (convAscii >= 97 && convAscii <= 122) {
          nuevoTexto += String.fromCharCode((convAscii - 97 + key) % 26 + 97); // Minus 
        } else if (convAscii >= 32 && convAscii <= 64)  {
          nuevoTexto += String.fromCharCode(nuevoTexto); // signos
        }  else {
          nuevoTexto += String.fromCharCode(nuevoTexto);
        }

     }
     return nuevoTexto;
    //  console.log(nuevoTexto)
  },  


  decode: (offset, string) => {
    let nuevoTexto = '';
    let ingresarTexto = string;
    let key = parseInt(offset);
    for (let i = 0; i < ingresarTexto.length; i++) {
      let convAscii = ingresarTexto.charCodeAt(i);
      if (convAscii >= 65 && convAscii <= 90) {
      nuevoTexto += String.fromCharCode((convAscii - 65 - key + 26 * 2) % 26 + 65);
      } else if (convAscii >= 97 && convAscii <= 122) {
      nuevoTexto += String.fromCharCode((convAscii - 97 - key + 26 * 2) % 26 + 97);
      } else {
      nuevoTexto += String.fromCharCode(nuevoTexto);
      }
    }
     return nuevoTexto;
    //  console.log(nuevoTexto)
   }

};
  cipher.encode('3', 'ABC')






