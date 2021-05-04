//dificuldade = Number(window.prompt("Insira a dificuldade, é recomendado de 1 a 9 "))
dificuldade = 5

var corTabuleiro = "#1F8340";
var largura = 600;
var altura = 400;

var xBolinha = 300;
var yBolinha = 200;
var dBolinha = 20;
var corBolinha = 0;
var raioBolinha = dBolinha/2;

var velocidadeXbolinha = dificuldade;
var velocidadeYbolinha = dificuldade;

var p1X = 50
var p1TY = 380/dificuldade;
var p1TX = 10
var p1Y = ((altura/2)-(p1TY))
var p1V = dificuldade*1.5
var p1Pontuacao = 0;

var p2X = 540
var p2TY = 380/dificuldade;
var p2TX = 10
var p2Y = ((altura/2)-(p2TY))
var p2V = dificuldade*1.5
var p2Pontuacao = 0;

function setup() {
  createCanvas(largura, altura);
}

function criarTabuleiro(corTabuleiro){
   background(corTabuleiro);
}

function criarBolinha(){
   circle(xBolinha, yBolinha, dBolinha);
  fill(corBolinha);
}

function movimentarBolinha(){
    xBolinha = xBolinha + velocidadeXbolinha;
  yBolinha = yBolinha + velocidadeYbolinha;
}

function colisao(){

    if(yBolinha>=400-raioBolinha || yBolinha <= raioBolinha){
    velocidadeYbolinha = -velocidadeYbolinha;
  }
}

function criarPlayer1(){
  rect(p1X, p1Y, p1TX, p1TY);
}

function criarPlayer2(){
  rect(p2X, p2Y, p2TX, p2TY);
}

function MovimentarPlayer2(){
  
    if (keyIsDown(UP_ARROW) && (p2Y>0)) {
      p2Y = p2Y-p2V;
}

  if (keyIsDown(DOWN_ARROW) && (p2Y+p2TY<altura)) {
      p2Y = p2Y+p2V;
    }
}
function MovimentarPlayer1(){
    if (keyIsDown(87) && (p1Y>0)) {
      p1Y = p1Y-p2V;
  }

  if (keyIsDown(83) && p1Y+p1TY<altura) {
      p1Y = p1Y+p2V;
  }   
}
function colisaoPlayer(){
   if(xBolinha-raioBolinha>=(p1X-p1TX) && xBolinha-raioBolinha<=p1X) {
   if(yBolinha>=(p1Y) && yBolinha<=p1Y+p1TY) {
     velocidadeXbolinha = -velocidadeXbolinha;
     xBolinha = p1X+p1TX+1+raioBolinha
   }
  }
     if(xBolinha+raioBolinha>=(p2X) && xBolinha+raioBolinha<=p2X+p2TX || xBolinha+raioBolinha>=(p2X) && xBolinha-raioBolinha<=p2X+p2TX ) {
   if(yBolinha>=(p2Y) && yBolinha<=p2Y+p2TY) {
     velocidadeXbolinha = -velocidadeXbolinha;
     xBolinha = p2X-1-raioBolinha
   }
  }
}

function placar(){
  textSize(22)
  text("player 1: "+p1Pontuacao+" | player 2: " + p2Pontuacao,(largura/2)-110,22);
}

function resetarBolinha(){
    if(xBolinha>=(600-(dBolinha/2))) {
     xBolinha = 300;
     yBolinha = 200;
    p1Pontuacao= p1Pontuacao+1
    }
  if(xBolinha<=dBolinha/2){
         xBolinha = 300;
     yBolinha = 200;
    p2Pontuacao= p2Pontuacao+1
  }
}

function draw() {
  criarTabuleiro(corTabuleiro);
  criarBolinha();
  movimentarBolinha();
  colisao();
  
  criarPlayer1();
  criarPlayer2();
  
  MovimentarPlayer1();
  MovimentarPlayer2();
  colisaoPlayer();
  resetarBolinha();  
  placar();
}

