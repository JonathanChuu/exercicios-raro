function ordenador(arrayNumeros: number[]) {
    let limitador: number = arrayNumeros.length
    while (limitador > 0) {
        for (let i = 0; i < arrayNumeros.length; i++) {
            if (arrayNumeros[i] > arrayNumeros[i + 1]) {
                let reserva: number = arrayNumeros[i]
                arrayNumeros[i] = arrayNumeros[i + 1]
                arrayNumeros[i + 1] = reserva
            }
        }
        limitador--
    }
    return arrayNumeros
}

const listaExemplo: number[] = [9, 4, 7, 546, 234, 123, 6, 86, 12, 34, 61, 46, 178, 64, 124, 1]
console.log(ordenador(listaExemplo))