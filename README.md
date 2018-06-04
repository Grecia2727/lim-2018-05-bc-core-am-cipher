# **Cifrado César**

### Diseño del Formulario:


![Formulario](http://subirimagen.me/uploads/20180604084324.PNG "Formulario")



Para ingresar al formulario desarrollado, entrar al siguiente enlace: [abrir formulario](https://grecia2727.github.io/lim-2018-05-bc-core-am-cipher/src/).


## **Funcionalidades del Formulario desarrollado**

El formulario que se presenta sirve básicamente para CIFRAR y DESCIFRAR un mensaje utilizando 
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
   Se logró Realizar las actividades planificadas, con el compromiso de terminar de ejecutar todas las actividades dentro de los 2 sprints.
 


Sprint 1:
![Sprint 1: Tablero en Trello](http://subirimagen.me/uploads/20180604084203.JPG "1er Tablero en Trello")

Sprint 2:
![Sprint 2: Tablero en Trello](http://subirimagen.me/uploads/20180604084241.JPG "2do Tablero en Trello")


### Experiencia de Usario: UX

El diseño del formulario fue realizado basandome en pequeñas entrevistas realizadas a algunos usuarios. En las entrevistas los usuarios indicaron que deseaban un producto:

* Sencillo, fácil de utilizar
* Con un diseño agradable
* Que el formulario sea pequeño y no demasiado grande.
* Con funcionalidad intuitiva, donde no requieran de un manual, para poder utilizarlo.
* Ordenado.

Siguiendo las sugerencias de los usuarios entrevistados se diseñó diferentes modelos de diseños:

1er Diseño: fue descartado, porque tenía muchos labels, lo cual hacía que el diseño se vea muy cargado.

2do Diseño: Se realizó un segundo diseño con un sólo BOTON que Cifraba y Descifraba al mismo tiempo. Los usuarios informaron que un mensaje que se va a a cifrar, no necesariamente se tenía que descifrar al mismo tiempo. Por este motivo también se descartó este diseño.

3er Diseño: fue simple, pequeño, se utilizó 2 BOTONES, uno para cifrar, y el otro para descifrar. A los usuarios les encantó el diseño, por este motivo el Proyecto final se muestra con este ultimo diseño aprobado. 


### Flujo Grama:

![Flujograma ](http://subirimagen.me/uploads/20180604084357.jpg "Flujograma")

### Funcionalidad del Formulario:

Objetivo: Cifrar y descifrar un mensaje.

Cómo utilizarlo: 
1) Escribe un texto en la primera casilla.
2) Ingresa un Número positivo o clave de posiciones.
3) Hacer clic en el boton "Cifrar" para encriptar el mensaje; o hacer clic en "Descifrar" para desencriptar el mensaje.


### Producción
    El código del formulario se basa principalmente en 5 archivos, los cuales se ha codificado:

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
![Primer Test Ok](http://subirimagen.me/uploads/20180604084029.PNG "1er Test Unitario Ok")


### Hacker edition:

Se realizó la actividad del Hacker Edition, logrando pasar los test con 100%.

![Segundo Test Ok](http://subirimagen.me/uploads/20180604084127.PNG "2do Test Unitario Ok")



### Tips utilizados:

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)