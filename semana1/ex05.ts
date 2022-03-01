function interseccionador (arrayA: number[], arrayB: number[]){
    let arrayInterseccao: number[] = []
    for (let i = 0; i < arrayA.length; i++){
        for(let j = 0; j < arrayB.length; j++){
            if(arrayA[i] == arrayB[j]){
                arrayInterseccao.push(arrayA[i])
                break
            }
        }
    }
    return arrayInterseccao
}

const arrayA2: number[] = [1, 2, 3, 4, 5, 6]
const arrayB2: number[] = [4, 4, 5, 6, 7, 8]
console.log(interseccionador(arrayA2, arrayB2))