//variaveis das imagens e sons
let estrada
let galinha
let carro1
let carro2
let carro3

let trilha
let ponto
let colidiu

function preload(){
  estrada = loadImage("imagens/estrada.png")
  galinha = loadImage("imagens/ator1.png")
  carro1 = loadImage("imagens/carro3.png")
  carro2 = loadImage("imagens/carro2.png")
  carro3 = loadImage("imagens/carro1.png")
  imagensCarros = [carro1,carro2,carro3,carro3,carro2,carro1]
  
  trilha = loadSound("sons/trilha.mp3")
  ponto = loadSound("sons/pontos.wav")
  colidiu = loadSound("sons/colidiu.mp3")
}