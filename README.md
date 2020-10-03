# SoftwareAvanzado
Repositorio destinado a las tareas del curso de Software Avanzado, segundo semestre 2020
# Practica 8
## Aplicacion
Aplicación hecha en python, utilizando **Flask** para las peticiones POST/GET y la librería **pymongo** para la conexión con la base de datos.
```
pip install Flask
```
```
pip install pymongo
```

La aplicación contiene 3 métodos.
### Verbd
Petición GET que devuelve todos los elementos de la base de datos.
### Insertdb
Petición POST que se encarga de insertar los elementos del body a la base de datos.
```
{
  autor: 'Nombre del autor de la frase',
  nota: 'Frase dicha por el autor'
}
```
### db
Petición GET que devuelve la cantidad de elementos que hay en la base de datos.

## Base de datos
Base de datos no relacional realizada en **mongodb**, la base de datos se llama **sopes1**, con una colección llamada **objetos**.

## Docker
El Dockerfile se encarga de crear y levantar el contenedor de la aplicación de python.

### docker-compose
El archivo cuenta con 2 imagenes, la creada por el Dockerfile para la aplicación en python y la imagen de mongo para leventar la base de datos.

Para poder guardar los elementos de la base de datos y mantenerlos en ella luego de que se apague el contenedor, se copian los archivos del contenedor mongo en una carpeta llamada mongo en la dirección `/home/ubuntu/mongo`.

Asigna los puertos `80:8080` para la aplicación y el `27017:27017` para la base de datos.
