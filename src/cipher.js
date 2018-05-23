window.cipher = {    //"cipher" es el nombre del objeto, si deseo puedo cambiar de nombre al objeto.

  encode: (offset, string) => {
      let nuevoTexto = '';
      let ingresarTexto = string;
      let key = parseInt(offset);
      for (i = 0; i < ingresarTexto.length; i++) {
        let convAscii = ingresarTexto.charCodeAt(i);
          nuevoTexto += String.fromCharCode((convAscii - 65 + key) % 26 + 65); 
     }
     return nuevoTexto;
     console.log(nuevoTexto)
  },  


  decode: (offset, string) => {
    let nuevoTexto = '';
    let ingresarTexto = string;
    let key = parseInt(offset);
    for (i = 0; i < ingresarTexto.length; i++) {
      let convAscii = ingresarTexto.charCodeAt(i);
        nuevoTexto += String.fromCharCode((convAscii - 65 + key) % 26 + 65); 
   }
   return nuevoTexto;
   console.log(nuevoTexto)
  }

};
  cipher.encode('3', 'ABC')


