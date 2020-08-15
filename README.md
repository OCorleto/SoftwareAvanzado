# SoftwareAvanzado
Repositorio destinado a las tareas del curso de Software Avanzado, segundo semestre 2020
# Tarea 2 - 201602811
# Parte 1
## Seguridad
Se realizó un POST a la [API](https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal&format=doc) donde en la data iba la información de las credenciales para poder obtener el token.
```
data : {
            grant_type: "client_credentials",
            client_id : id,
            client_secret : secret
        },
```

Y se obtiene el token de la data de ese POST
```
token = data.access_token
```
Luego se realiza la misma acción POST/GET realizados en la tarea 1 [index.js.](https://github.com/OCorleto/SoftwareAvanzado/blob/tarea1/index.js), añadiendo un header con la autorización **Bearer** del nuevo token. Este proceso se repite en ambas funciones.
```
headers:{'Authorization' : 'Bearer '+token},
```
Aplicación realizada en Javascript, utilizando $ajax.
La página web está desarrollada en **html** utilizando una plantilla css y js  (los archivos se encuentran dentro de las carpetas css, fonts y js).
![Screenshot](https://github.com/OCorleto/SoftwareAvanzado/blob/tarea1/img/pageprincipal.PNG)

## Listar Alumnos
![Screenshot](https://github.com/OCorleto/SoftwareAvanzado/blob/tarea1/img/listado.png)
La lista de los alumnos se muestra en un elemento select dentro de la página html. Para llenarlo, al momento de cargar la página web se llama a la función **ListaAlumnos** del archivo index.js\

El método de listar alumnos tiene como parámetros:
- type : GET
- url : url de la [API](https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal&format=doc) designada por el turor académico 
- success : dentro de este parámetro se crea una fucnión que se encarga de obtener los datos y llenar el select.

A la url de la API se le agrega `filter[search]=201602811` para que al momento de buscar los nombres de los alumnos, busque solo los alumnos cuyo noombre contenga *201602811*

## Ingresar Alumnos
![Screenshot](https://github.com/OCorleto/SoftwareAvanzado/blob/tarea1/img/new.png)
En la página web se cuenta con un textbox donde se ingresa el nombre del Alumno que se desea ingresar y un botón que al oprimirlo llama a la función **CrearAlumno** del archivo index.js
El método de listar alumnos tiene como parámetros:
- type : POST
- url : url de la [API](https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal&format=doc) designada por el turor académico 
- datatype : json
- data : envía los datos que se quieren almacenar en formato JSON, en este caso solo se envía el nombre obtenido de la página web.
- success : Confirma que se guardó correctamente el nombre.
> Para poder utilizar el método POST, se debe utilizar un navegador libre de cors.


