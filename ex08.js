function exibirPrimo(limite) {
    for ( let numero = 2; numero <= limite; numero++ ) {
        if ( numeroPrimo(numero) ) {
            console.log('Numero primo: ', numero)
        }
    }

} 

function numeroPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if ( numero % i == 0 ) {
            return false
        }
    }
    return true
}

exibirPrimo(10)
