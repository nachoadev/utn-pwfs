
/*function generarMail(nombredeusuario){
    return String(nombredeusuario + '@gmail.com')
}
console.log(generarMail('pepe'))

function sumar(a, b){
    a=Number(a)
    b=Number(b)
    return a + b
}
  */

/* const calcular_sumatoria = (a, b, c) => {
    return a + b + c 
}*/
 
const calcular_sumatoria = (a, b, c) => a + b + c
console.log(calcular_sumatoria(1, 2, 3))


/* validar string */ 

const solicitar_y_validar_string = () =>{
    let stringSolicitado = prompt("ingrese un dato string")
    while(!stringSolicitado || !isNaN(stringSolicitado)){
        alert('ERROR: dato ingresado debe ser un string')
        stringSolicitado = prompt('ingrese otro dato de nuevo')
    }
    return stringSolicitado
}

/* 
CONVERTIR ESTAS FUNCIONES EN ARROW FUNCTIONS
function mayor(a, b){
    if(a > b){
        return a
    } else{
        return b
    }
}
*/
const calcular_sumatoria = (a, b) => a + b

const obtener_mayor=(a, b)=>{
    if(a > b){
        return a
    }
    else{
        return b
    }
}



/*
function generarMail(nombreDeUsuario){
    return String(nombreDeUsuario + '@gmail.com')
}
*/
const generarMail = (usuario) =>usuario + '@gmail.com' {
}

/* 
function sumar(a, b){
    a = Number(a)
    b = Number(b)
    return a + b + undefined
}
*/
const sumar = (a, b)=> Number(a) + Number(b)