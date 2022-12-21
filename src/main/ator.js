//variaveis galinha
let yGalinha = 367
let xGalinha = 100
let colisao = false
let pontos = 0

function mostraGalinha() {
  image(galinha, xGalinha, yGalinha,35,35)
}

function movimentoAtor() {
   if (keyIsDown(UP_ARROW)) {
        yGalinha -= 4;
    }
    if (keyIsDown(DOWN_ARROW)) {
       if(podeSeMover()){
          yGalinha += 4;
       } 
    }
}

function verificaColisao(){
  for (let i = 0; i < imagensCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i],yCarros[i],50,40,xGalinha,yGalinha,10)
    if (colisao){
      voltaInicio();
      colidiu.play();
      if (pontos > 0){
        pontos -= 1;
      }
    }
  }
}

function voltaInicio(){
  yGalinha = 367
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25)
  fill(color(255,255,0))
  text(pontos, 100,28);
}

function marcaPonto (){
  if (yGalinha < 15){
    pontos += 1;
    ponto.play();
    voltaInicio()
  }
}

function podeSeMover(){
    return yGalinha < 367;
}