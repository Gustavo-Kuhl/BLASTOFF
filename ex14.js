function polindromo(palavra) {
    const letras = palavra.split('')
    const palavraReversa = [...letras].reverse().join('')

    console.log(palavra.toLowerCase() === palavraReversa.toLocaleLowerCase())
}

polindromo('exe')