// A lista de meses abaixo está incompleta (e incorreta!). Utilize os métodos do array para adicionar os meses faltantes.
const meses = [
    'jan', 'mar', 'mar', 'abr', 'jun', 'jul', 'set', 'out', 'dez',
];

const corretor = (arrayMeses: string[]): string[] => {
    let arrayNova = arrayMeses

    arrayNova.splice(1,1)
    arrayNova.splice(1,0,'fev')
    arrayNova.splice(4,0,'maio')
    arrayNova.splice(7,0,'ago')
    arrayNova.splice(10,0,'nov')

    return arrayNova
}

console.log(corretor(meses))