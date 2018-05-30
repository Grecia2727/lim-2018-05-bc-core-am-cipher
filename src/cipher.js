window.cipher = {    //"cipher" es el nombre del objeto, si deseo puedo cambiar de nombre al objeto.

  encode: (offset, string) => {
    // console.log(typeof offset);
      let nuevoTexto = '';
      let ingresarTexto = string;
      let key = parseInt(offset);
      // console.log(typeof key);
      for (let i = 0; i < ingresarTexto.length; i++) {
        let convAscii = ingresarTexto.charCodeAt(i);
        
        if (convAscii >= 65 && convAscii <= 90) {
          nuevoTexto += String.fromCharCode((convAscii - 65 + key) % 26 + 65); // Mayus Ascii: 65 - 90
        } else if (convAscii >= 97 && convAscii <= 122) {
          nuevoTexto += String.fromCharCode((convAscii - 97 + key) % 26 + 97); // Minus Ascii: 97 - 122
        }  else {
          nuevoTexto= nuevoTexto + ingresarTexto[i]; }
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
      nuevoTexto += String.fromCharCode((convAscii - 65 - key + 26 * 2) % 26 + 65); // Mayus Ascii: 65 - 90
      } else if (convAscii >= 97 && convAscii <= 122) {
      nuevoTexto += String.fromCharCode((convAscii - 97 - key + 26 * 2) % 26 + 97); // Minus Ascii: 97 - 122
      } else {
      nuevoTexto += String.fromCharCode(nuevoTexto);
      }
    }
     return nuevoTexto;
    //  console.log(nuevoTexto)
   }

};
//console.log(window.cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ') ==='HIJKLMNOPQRSTUVWXYZABCDEFG');







