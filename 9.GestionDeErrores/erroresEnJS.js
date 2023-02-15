const miFuncion = val => {
    if(typeof val === 'number'){
        return 2 * val
    }
    throw new Error('El valor debe ser de tipo número')
}
//const elDoble = miFuncion('oso') con el throw de arriba saltaría el error del new Error

const numero = oso

try {
    //Código que puede fallar
    console.log('Está ejecutandose de forma correcta')
    const doble = miFuncion(numero)
console.log(doble)
} catch (error) {
    //En caso de fallar, quiero que ejecutes
    console.log('ERROR!!!')
console.log(error)
}finally{
    console.log('Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno')
}


//Errores comunes : InternalError, SytnaxError, TypeError, RangeError y ReferenceError