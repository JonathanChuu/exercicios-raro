const usuarios = [
    { nome: 'Diego', idade: 23, ativo: true },
    { nome: 'Gabriel', idade: 15, ativo: false },
    { nome: 'Lucas', idade: 30, ativo: false },
  ];
  



  const usuariosAtivos = usuarios.filter((elemento) => {
    if(elemento.ativo){
        return true
    }else{
        return false
    }
  }) 

  const usuariosInativos = usuarios.filter((elemento) => {
    if(elemento.ativo === false){
        return true
    }else{
        return false
    }
  }) 


console.log(usuariosAtivos)
console.log(usuariosInativos)