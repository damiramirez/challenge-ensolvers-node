# Challenge Ensolvers - BackEnd

Este proyecto es una API de una To-Do List. Para iniciar, se debe crear un usuario y logearse. Al logearse, se le asigna un JWT que tendra que ser pasados en los headers para poder hacer request a la Api. El usuario debe crear una Folder y luego una Task, estas quedarán vinculadas en la base de datos. 

La aplicacion fue deployada en [Heroku](https://todo-api-ensolvers-challenge.herokuapp.com/api/folder), donde puede enviar request desde Postman.

Para ver los Endpoints: https://documenter.getpostman.com/view/16933962/UVktoYTt

## Tecnologías
| Tecnologías |
| --- |
| Node v14.18.0 | 
| MongoDB shell version v5.0.6 | 

## Instalación

```
git clone git@github.com:damiramirez/challenge-ensolvers.git

cd /path/back
```
## Instalación de paquetes de NPM
Dentro ya de la carpeta back/

```
npm install
```
## Editar el archivo .env.example para desarrollo
Ingresar el puerto,  una base de datos de Mongo y la clave secreta para los JWT

```
PORT=

MONGODB_CNN=

SECRETKEY=
```

## Para correr entorno de desarrollo

```
npm start
```

