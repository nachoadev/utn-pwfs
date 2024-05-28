//arrays
// lista de elementos ordenados

let nombre1 = 'pepe'
let nombre2 = 'juan'
let nombre3 = 'ezequiel'

//posicion/index   0        1        2
const nombres = ['pepe', 'juan', 'ezequiel']


console.log(nombres[1])
console.log('tengo ' + nombres.length + ' nombres')

// metodos de array

// .push() agrega un elemento al final del array y devuelve la nueva longitud

/*nombres.push('maria')  */

// .unshift(): agrega un elemnto al princio del array y devuelve la nueva longitud
/*  
nombres.unshift('maria')
*/
/*  

let nombre = 'pepe'
nombre = nombre.toUpperCase()
*/
/*  
console.log(nombre)
*/

// .pop() elimina el ultimo elemento y lo retorna

/* let ultimo_elemento = nombres.pop()
console.log(ultimo_elemento)  */

// .shift() elimina el primer elemento y lo retorna

// SOLAMENTE FUNCIONA BIEN CON LOS ARRAYS DE STRING
//.indexof() devuelve la posicion de un string en el array

let posicion_de_juan = nombres.indexOf('juan')
console.log('la posicion de juan es ' + posicion_de_juan)


//.splice()
/* array.splice()
1er parametro: desde donde va a posicionarse
2do parametro: contidad de elementos que se quieran borrar
3er parametro: elementos a agregar */

/* nombres.splice(posicion_de_juan, 1) */


/* 
const nombres2 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias']

let posicion_de_ezequiel = nombres2.indexOf('ezequiel')

const lista_de_eliminados = nombres2.splice(posicion_de_ezequiel, 0, 'lucas')

console.log(nombres2)
console.log('la lista de elementos eliminados es: ' + lista_de_eliminados)

const nombres_3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']

let posicion_de_leonel = nombres_3.indexOf('leonel')
const lista_de_eliminado = nombres_3.splice(posicion_de_leonel, 2)

let posicion_de_abril = nombres_3.indexOf('abril')
const agregar = nombres_3.splice(posicion_de_abril, 0, 'sofia')
console.log('la lista de eliminados son: ' + lista_de_eliminado)
console.log(nombres_3)
// eliminar a leonel
// eliminar a el anterior a lucas
// agregar antes de abril a 'sofia' sin eliminar a abril
*/


/* console.log(nombres_3.includes('leonel')) */ 

/* console.log(nombres_3[]) */
const nombres_3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']

/* for(let index = 0; index < nombres_3.length; index = index + 1){
    console.log(nombres_3[index])
} */
/* let suma_caracteres = 0
for(let index = 0; index < nombres_3.length ; index = index + 1){
    console.log(nombres_3[index])
    suma_caracteres = suma_caracteres + nombres_3[index].length
}
console.log('La cantidad de caracteres es ' + suma_caracteres) */

for(let nombre of nombres3){
    console.log(nombre)
}

//Dado el siguiente array crear un segundo array llamado mayusculas que solo contenga las palabras en mayusculas

const array = ['pepe', 'lucas', 'PEDRO', 'JuaN']

//esto debe generar un segundo array con ['PEDRO', 'JuaN']

let nombres = 'pepe'
nombres = nombres.toUpperCase
let nombres = 'lucas'
nombres = nombres.toUpperCase
let nombres = 'juaN'
nombres = nombres.toUpperCase
console.log(nombres)



/*  

let nombre = 'pepe'
nombre = nombre.toUpperCase()
*/