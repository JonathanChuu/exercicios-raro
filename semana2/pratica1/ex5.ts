function fila() {
    const fila = [];
  
    const adicionar = (elemento) => {
        fila.push(elemento)
    };
  
    const remover = () => {
        fila.shift()
    };
  
    return { adicionar, remover };
  }
  
  function pilha() {
    const pilha = [];

    const adicionar = (elemento) => {
        pilha.unshift(elemento)
    };
  
    const remover = () => {
        pilha.pop()
    };
  
    return { adicionar, remover };
  }
  
  const fila1 = fila();
  fila1.adicionar(1);
  fila1.adicionar(2);
  fila1.adicionar(3);
  
  console.log('valor esperado: 1; valor recebido: ', fila1.remover());
  console.log('valor esperado: 2; valor recebido: ', fila1.remover());
  console.log('valor esperado: 3; valor recebido: ', fila1.remover());
  
  
  const pilha1 = pilha();
  pilha1.adicionar(1);
  pilha1.adicionar(2);
  pilha1.adicionar(3);
  
  console.log('valor esperado: 3; valor recebido: ', pilha1.remover());
  console.log('valor esperado: 2; valor recebido: ', pilha1.remover());
  console.log('valor esperado: 1; valor recebido: ', pilha1.remover());