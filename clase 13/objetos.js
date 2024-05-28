/* tipos de datos objetos */

let edadUsuario = 19

let nombreUsuario = 'pepe'

let apellidoUsuario = 'suarez'

let usuario = {
    'edad': 19,
    'nombre': 'pepe',
    'apellido': 'suarez',
    m
}
/* 
Crear un objeto llamado producto que tenga las sig propiedades
precio : number
nombre : string
marca : string
id : number
descripcion : string
*/
/*
let precio = 19

let nombre = 'dulce'

let marca = 'sugus'

let id = '33224'

let descripcion = 'ricos'*/

/*  
let caramelos = {
    'precio': 19,
    'nombre': 'dulce',
    'marca': 'sugus',
    'id' : '33224',
    'descripcion' : 'ricos'
}  */
/* usamos string para escribir propiedads en caso de que tengan espacios o tildes o - o ñ */
let caramelos = {
    precio: 19,
    nombre_caramelo: 'dulce',
    marca: 'sugus',
    id : '33224',
    'descripcion del producto' : 'ricos'
}
const user = {
    Name: 'pepe',
    lastname: 'suarez',
    'user preferences': {
        theme: 'dark-mode',
        lang: 'spanish'
    }
}
console.log('el usuario: ' + user['name'] + '' + user['lastname'] +
 'tiene las preferencias en: ' + 
\n + user:['user preferences']['theme']
\n + user:['user preferences']['lang']

/* 
Por consola mostrar un informe del usuario
'El usuario {nombre} {lastname} tiene las preferencias de usuario en:\nModo: {theme} \nLenguaje: {lang}'
*/


const user = {
    name: 'pepe',
    lastname: 'suarez',
    'user preferences': {
        theme: 'dark-mode',
        lang: 'spanish'
    },
    'user info': {
        'created_at': '18/9/2005',
        'adress': 'av siempre viva 742',
        tel: '+22 1323-2122'
    }
}
console.log('el usuario: ' + user['name'] + '' + user['lastname'] +
 'creo su cuenta en: ' + 
 user:['user info']['created_at'] + '' + 'vive en: ' +
 user:['user info']['adress'] + '' + 'y su telefono es: ' +
 user:['user info']['tel']