// ainda com o mesmo exemplo dos alunos, implementar agora um método chamado orderBy. Esse método deverá receber um 
// parâmetro do tipo array de objetos, e outro parâmetro, um array de strings. O método deverá retornar um novo array, 
// com os objetos ordenados de acordo com o critério do array de strings. Importante: O array original deve ser mantido intacto.
// Abaixo, segue um exemplo do funcionamento esperado:

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

const funcOrdenador = <T extends Record<string, unknown>>(arr: T[], ...minhasChaves: (keyof T)[]): Record<string, unknown>[] => {

    let novoArray = arr.map((objAtual) => {
        let eleNovo = {}
        minhasChaves.forEach(chave => {
            (eleNovo as T)[chave] = objAtual[chave]
        });
        return eleNovo
    });

    novoArray.sort((a, b) => {
        if ((a as T)[minhasChaves[0]] > (b as T)[minhasChaves[0]]) {
            return 1
        } else if ((a as T)[minhasChaves[0]] < (b as T)[minhasChaves[0]]) {
            return -1
        } else {
            return 0
        }
    })

    return novoArray
}

console.log(funcOrdenador(alunos, 'nota', 'nome'))