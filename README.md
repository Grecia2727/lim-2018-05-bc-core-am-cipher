# **Cifrado César**

### Diseño del Formulario:

![Formulario](/src/images/formulario.png "Formulario Cifrado Cesar")

Para ingresar al formulario desarrollado, entrar al siguiente enlace: [abrir formulario](https://grecia2727.github.io/lim-2018-05-bc-core-am-cipher/src/).

## **Funcionalidades del Formulario desarrollado**

El formulario que se presenta sirve básicamente para CIFRAR un mensaje utilizando 
el código de la clave que prefieras 😎.
La fórmula utilizada se basa en el "Cifrado Cesar" una forma antigua de convertir 
un MENSAJE en otro, con el fin de que el MENSAJE inicial, sea difícil de entender 
por los demás. Conciste en sustituir una letra del texto original y reemplazarla por otra letra 
que se encuentra ubicada en un número fijo de posiciones señalado.

Por ejemplo, con un desplazamiento de 33, la A sería sustituida por la H (situada 33 lugares a la derecha de la A), la B sería reemplazada por la I, etc)

* Alfabeto sin cifrar: ABCDEFGHIJKLMNOPQRSTUVWXYZ
* Alfabeto cifrado:    HIJKLMNOPQRSTUVWXYZABCDEFG
 
Este método debe su nombre a Julio César, que lo usaba para comunicarse con sus 
generales.

## **Especificaciones del Proceso realizado:**


### Análisis e interpretación del problema
    
    La planificacion del proyecto se realizó con el Squad CodeBreakers.
    A continuación muestro el tablero con las Actividades que se planificaron. Se logró Realizar las actividades planificadas, con el compromiso de terminar de ejecutar el resto de actividades la siguiente semana.

Para visualizar las actividades realizadas, hacer clic en:  [Tablero Trello](https://trello.com/b/VTqbLj2v/reto-cifrado-cesar)
     []()






### Producción
    El código del formulario se basa en 3 archivos:

* `index.html:` Aquí se encuentra la estructura de la página y el formulario en sí.

* `cipher.js:` Aquí se encuentra el método `ENCODE` y `DECODE` con la formula sugerida por Michelle, para el Cifrado Cesar.

* `index.js:` Aquí relaciono las `id` de las cajas de textos y del boton, para relacionarlas con las variables del JavaScript. Es aquí donde señalo que el mensaje Cifrado se imprima en un cuadro de texto específico.

* `style.css:` Centro al formulario, le doy un fondo a la página y personalizo     algunas caracteristicas de la página entera.

* `cipher.spec.js:` Aquí programo los Test Unitarios. 
    * 1er test: cipher Debería ser un objeto.
    * 2do test: cipher.encode debería ser una funcion.
    * 3er test: prueba la funcionalidad de `cipher.encode`  con letras MAYUSCULAS.
    * 4to test: prueba la funcionalidad de `cipher.encode`  con letras MINUSCULAS.
    * 5to test: prueba la funcionalidad de `cipher.encode`  con SIGNOS Y NÚMEROS.


    * 6to test: `cipher.decode` debería ser una funcion.
    * 7mo test: prueba la funcionalidad de `cipher.decode` con letras MAYUSCULAS.
    * 8vo test: prueba la funcionalidad de `cipher.decode` con letras MINUSCULAS.
    * 9no test: prueba la funcionalidad de `cipher.decode` con SIGNOS Y NÚMEROS.

    * 10° test: `cipher.createCipherWithOffset` debería ser una función.
    * 11° test: debería retornar un objeto con dos funciones (encode y decode) con offset fijado.
    * 12° test: probando la funcionalidad de: función encode con offset fijado.
    * 13° test: probando la funcionalidad de: función decode con offset fijado.



### Test Realizados:

![Primer Test Ok](/src/images/test1.png "1er Test Unitario Ok")


### Hacker edition:

![Segundo Test Ok](/src/images/test2.png "2do Test Unitario Ok")





### Tips utilizados:

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)