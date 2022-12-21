//variaveis carros
let xCarros = [550,550,550,550,550,550]
let yCarros = [40,95,151,210,270,318]
let velocidadeCarros = [1.5,2,3.5,5,3.2,1.8]

function mostraCarros() {
  for (let i = 0; i < imagensCarros.length; i++ ) {
      image(imagensCarros[i], xCarros[i], yCarros[i],50,40)
    }
}

function movimentoCarros() {
  for (let i = 0; i < imagensCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
   }
}

function loopCarros() {
  for (let i = 0; i < imagensCarros.length; i++){
    if (xCarros[i] < -50){
      xCarros[i] = 500
   }
  }
}