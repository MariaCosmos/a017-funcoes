// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

function operacaoSoma (num1,num2){
  const soma = num1 + num2
  return soma
}


function operacaoSubtracao (num3,num4){
  const subtracao = num3 - num4
  return subtracao
}


function operacaoMultiplicacao (num5,num6){
  const multiplicacao = num5 * num6
  return multiplicacao
}


function operacaoDivisao (num7,num8){
  const divisao = num7 / num8
  return divisao
}

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

const numUsuario1 = Number(prompt("insira um numero"))
const numUsuario2 = Number(prompt("insira outro numero"))

console.log(`${numUsuario1} + ${numUsuario2} = ${operacaoSoma(numUsuario1,numUsuario2)}`)
console.log(`${numUsuario1} - ${numUsuario2} = ${operacaoSubtracao(numUsuario1,numUsuario2)}`)
console.log(`${numUsuario1} x ${numUsuario2} = ${operacaoMultiplicacao(numUsuario1,numUsuario2)}`)
console.log(`${numUsuario1} % ${numUsuario2} = ${operacaoDivisao(numUsuario1,numUsuario2)}`)
