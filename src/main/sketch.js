function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  background(estrada);
  mostraGalinha();
  mostraCarros();
  movimentoCarros();
  movimentoAtor();
  loopCarros();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
