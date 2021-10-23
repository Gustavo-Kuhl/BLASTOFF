function menorNumero(a, b, c) {

    // Resolução por meio da biblioteca 'Math'
    const menor = Math.min(a, b, c)
    console.log('Menor: ', menor)

    // Resolução mais trabalhada
    if ( a < b && a < c ) {
        console.log('A é o menor número. Valor de A: ', a)
    } else if( b < a && b < c ) {
        console.log('B é o menor número. Valor de B: ', b)
    } else if ( c < b && c < a ) {
        console.log('C é o menor número. Valor de C: ', c)
    } else {
        console.log
    }

}

menorNumero(2, 20, 14)