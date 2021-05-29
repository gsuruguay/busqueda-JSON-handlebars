# Web app: Busqueda de discos

## Objetivo

**Desarrollar una app para poder consultar los discos por título, año o artista. Considerando las coincidencias parciales, usando plantilla express-handlebars y  JSON.**

### index.html

* Muestra 3 inputs con los 3 datos para filtar y un botón para disparar la consulta desde un script usando "window.location" un request GET a la ruta /discos y pasando por query string los filtros (uno o varios) con las claves "titulo", "artista" o "lanzamiento". Por ejemplo /disco?lanzamiento=1968&artista=beatles
* Esa url va armandose concatenando los datos de los filtros ingresados.
* Cuando se obtiene la respuesta, se muestra los resultados como "tarjetas", con los datos de artista, título y año de lanzamiento y la imagen de la tapa.

### Server

Contiene solo 2 endpoints

* GET /: entrega la página inicial, usando una plantilla de handlebars 
* GET /disco: consulta de discos, recibe por query string los filtros. Busca en los datos que estén en el archivo discos.json y renderiza los resultados de los discos coincidentes.

## Instalación
* Clonar el proyecto con *git clone https://github.com/gsuruguay/busqueda-JSON-handlebars.git*
* Ejecutar por consola desde la carpeta raiz del proyecto *npm install para instalar las dependencias express y express-handlebars *
* Se accede por *http://localhost:3456/*