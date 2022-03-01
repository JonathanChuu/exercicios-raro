const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

const pick = <T extends Record<string, unknown>>(arr: T[], ...minhasChaves: (keyof T)[]): Record<string, unknown>[] => {

    let novoArray = arr.map((objAtual) => {
        let eleNovo = {}
        minhasChaves.forEach(chave => {
            (eleNovo as T)[chave] = objAtual[chave]
        });
        return eleNovo
    });
    return novoArray
}


console.log(pick(alunos, 'nome', 'nota'));




// let iteraAlunos = alunos.map((objAtual) => {
//     let novoEle = {}
//     objAtual.nota = objAtual.nota + 1
//     return objAtual

// });
// resultado esperado:
// [
//   { nome: 'João', nota: 7.3 },
//   { nome: 'Maria', nota: 9.2 },
//   { nome: 'Pedro', nota: 9.8 },
//   { nome: 'Ana', nota: 8.7 }
// ]

// forma alternativa de implementação
// pick(alunos, 'nome', 'nome')

// se preferir uma assinatura de typescript, segue:
// export const pick = <T extends Record>(record: T, ...args: (keyof T)[]): Record => {
//   return null;
// };


