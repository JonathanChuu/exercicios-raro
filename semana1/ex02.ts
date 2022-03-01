function identificaTriangulos(a: number, b: number, c: number) {
    if (a === b && a === c) {
        return ('O triangulo é equilatero')
    } else if (a === b || a === c || b === c) {
        return 'O triangulo é isosceles'
    } else {
        return 'O triangulo é escaleno'
    }
}

console.log(identificaTriangulos(2, 3, 2))