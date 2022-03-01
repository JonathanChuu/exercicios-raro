const ingredientes = [
    '2 hambúrgueres',
    'alface',
    'queijo',
    'molho especial',
    'cebola',
    'picles',
    'pão com gergelim'
];

const fazUmBigMac = (ingredientes: string[]): string => {
    let hambuguer: string = ingredientes.reduce((valorAnterior, valorCorrente) => {
        return valorAnterior + ', ' + valorCorrente
    });

    return hambuguer
};

fazUmBigMac(ingredientes);