function multiplos(n1, n2) {

    const resultado = n1 * n2

    if (Number.isInteger(resultado)) {

        console.log('É multiplo, resultado: ', resultado)

    } else {
        console.log('Não é multiplo!')
    }

}

multiplos(2, 5)