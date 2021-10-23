function imprimirMatriz(matriz) {

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(matriz[i][j])
        }
    }

}

imprimirMatriz([[2, 4, 6],[1, 3, 5]])