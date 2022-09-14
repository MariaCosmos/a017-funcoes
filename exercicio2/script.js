// Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function somaNumeros (num1, num2){
  const soma = num1 + num2 
  return soma 
}

console.log(somaNumeros(70,32))

// Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.

function maiorUoIgual (num3,num4){
  const resultBollean = (num3 >= num4)
  return resultBollean
}
console.log(maiorUoIgual(6,9))

//Uma função que receba um número e imprima se ele é par ou não

function numeroPar (num5){
  const parOuNao = (num5 % 2) === 0
  return parOuNao
}
console.log(numeroPar(8))

// Uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

function stringFuncao (string){
  const stringMauiuscula = string.toUpperCase()+" - Número de caracteres: "+ string.length 
  return stringMauiuscula

}
console.log(stringFuncao("Abacateiro"))

