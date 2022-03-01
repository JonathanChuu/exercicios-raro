// def unico(a, b):
// auxA = a.copy()
// auxB = b.copy()

// for eleA in auxA:
//     aparicoes = auxA.count(eleA)
// for i in range(aparicoes - 1):
//     a.remove(eleA)

// for eleB in auxB:
//     aparicoes = auxB.count(eleB)
// for i in range(aparicoes - 1):
//     a.remove(eleB)

// return a + b


// a = [1, 2, 3, 4, 5, 6]
// b = [4, 4, 5, 6, 7, 8]
// print(unico(a, b))




// function contarRepeticoes(arrayJunto: number[]) {
    
    
//     return repeticao
// }

function unico(arrayA: number[], arrayB: number[]) {

    for (let i = 0; i < arrayB.length; i++){
        arrayA.push(arrayB[i])
    }

    let arrayJunto: number[] = []
    for (let j = 0; j<arrayA.length;j++){
        let contador: number = 0
        for (let k = 0; k < arrayJunto.length; k++){
            if (arrayA[j]==arrayJunto[k]){
                contador++
            }
        }
        if(contador>=1){
            continue
        }
        arrayJunto.push(arrayA[j])
    }

    return arrayJunto
}

let arrayA: number[] = [1, 2, 3, 4, 5, 6]
let arrayB: number[] = [4, 4, 5, 6, 7, 8]
console.log(unico(arrayA, arrayB))

// [1, 2, 3, 4, 5, 6, 4, 4, 5, 6, 7, 8] 


    // let arrayAux: number[] = arrayA.slice()
    // let arrayJunto: number[] = []
    // for (let j = 0; j<arrayA.length;j++){
    //     let contador: number = 0
    //     for (let k = 0; k<arrayA.length;k++){
    //         if(arrayA[j]===arrayAux[k]){
    //             contador++
    //         }
    //     }

    // }
    




//     for (let i = 0; i < a.length; i++) {
//         let aparicoes: number = contarRepeticoes(a, a[i])
//         for (let i = 0; i < a.length-1; i++) {
//             a.splice(a[i],1)
//         }
//     }

//     for (let i = 0; i < b.length; i++) {
//         let aparicoes: number = contarRepeticoes(b, b[i])
//         for (let i = 0; i < b.length-1; i++) {
//             b.splice(a[i],1) 
//         }
//     }

//     return a, b
// }




