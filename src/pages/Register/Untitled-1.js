function renderizaNaTela(string) {
  // aqui vai toda a lógica pra vc renderizar algo da tela
   let div = createElement('div')
  // e como parametro você está recebendo algo que será uma string, nesse caso você vai utilizar a string dentro do createTextNode
   div.createTextNode(string)
  
}

function kata1() {
  //aqui vci vai ter a lógica do kata1
  let arr = 'uma frase qualquer'.split(' ')
  return arr
  // oq essa função é fazer é aplicar um split ou qualquer alteração que vc queira fazer na sua string/array
  // e retornar o arr no final
}


renderizaNaTela(kata1())
// o renderizarNaTela está recebendo o retorno do kata1() que é um array e passando lá pro createTextNode onde vai ser usado