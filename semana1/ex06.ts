function diferencaAB (arrayA: number[], arrayB: number[]){
    let arrayDiferenca: number[] = []
    for (let i = 0; i < arrayA.length; i++){
        let contador: number = 0
        for( let j = 0; j < arrayB.length;j++){
            if (arrayA[i]=== arrayB[j]){
                contador++
            }
        }
        if (contador > 0){
            continue
        }
        arrayDiferenca.push(arrayA[i])
    }
    return arrayDiferenca
}

const arrayA3: number[] = [1, 2, 3, 4, 5, 6]
const arrayB3: number[] = [4, 4, 5, 6, 7, 8]
console.log(diferencaAB(arrayA3, arrayB3))