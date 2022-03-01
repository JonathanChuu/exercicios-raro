function quadratica(a: number, b: number, c: number) {

    if (a <= 0) {
        return console.log('A equação não é quadratica');
    }

    const delta = Math.pow(b, 2) - 4 * a * c;

    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `X1 = ${x1} e X2 = ${x2}`;
    }
    else {
        return console.log("A equação não possui raizes reais");
    }
}

console.log(quadratica(2, 12, -14));