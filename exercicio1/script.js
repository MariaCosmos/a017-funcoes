// Declare uma função que imprima "Olá, [seu nome]"

function nome (meuNome){
  console.log(`Olá ${meuNome}`)
}
nome("cosmos")

// Declare uma função que imprima a tabuada do 6 

const baseTabuada = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]

function tabuada (arrayTabuada){
  const tabuada6 = []
  for(i in arrayTabuada){
    tabuada6.push(arrayTabuada[i]*6)
  }
  return tabuada6
}
console.log(tabuada(baseTabuada))

// Reescevendo as funções a cima utilizando Arrow Functions

// Nome

const nomeArrow = (meuNomeArrow) =>{
  console.log(`Olá, ${meuNomeArrow}`)
}
nomeArrow("Cosmos") 

// Tabuada do 6 

const tabuadaArrow = (arrayTabuadaArrow) =>{
  const tabuada6Arrow = []
  for(i in arrayTabuadaArrow){
    tabuada6Arrow.push(arrayTabuadaArrow[i]*6)
  }
  return tabuada6Arrow
}
console.log(tabuadaArrow(baseTabuada))