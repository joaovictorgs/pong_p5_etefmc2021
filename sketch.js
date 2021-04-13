dificuldade = Number(window.prompt("Insira a dificuldade, é recomendado de 1 a 15 "))

var corTabuleiro = 0;
var xBolinha = 300;
var yBolinha = 200;
var dBolinha = 20;

var velocidadeXbolinha = dificuldade;
var velocidadeYbolinha = dificuldade;

var p1X = 50
var p1Y = 150
var p1TX = 20
var p1TY = 100

var p2X =550
var p2Y = 150
var p2TX = 20
var p2TY = 100

function setup() {
  createCanvas(600, 400);
}

function criarTabuleiro(corTabuleiro){
   background(corTabuleiro);
}

function criarBolinha(){
   circle(xBolinha, yBolinha, dBolinha);
}

function movimentarBolinha(){
    xBolinha = xBolinha + velocidadeXbolinha;
  yBolinha = yBolinha + velocidadeYbolinha;
}

function colisao(){
  
  if(xBolinha>=(600-(dBolinha/2)) || xBolinha<=dBolinha/2){
    velocidadeXbolinha = -velocidadeXbolinha;
  }
  
    if(yBolinha>=400-(dBolinha/2) || yBolinha<=dBolinha/2){
    velocidadeYbolinha = -velocidadeYbolinha;
  }
}

function criarPlayer1(){
  rect(p1X, p1Y, p1TX, p1TY);
}

function criarPlayer2(){
  rect(p2X, p2Y, p2TX, p2TY);
}

function MovimentarPlayer1(){
  
    if (keyIsDown(UP_ARROW)) {
      if(p1Y<=400 && p1Y>0){
      p1Y = p1Y-5;
      }
      else{
            p1Y = p1Y;
      }
  }

  if (keyIsDown(DOWN_ARROW)) {
    if(p1Y>=0 && p1Y<300){
      p1Y = p1Y+5;
    }
    else{
    p1Y = p1Y;
    }
  }
  
}

function MovimentarPlayer2(){
    if (keyIsDown(87)) {
      if(p2Y<=400 && p2Y>0){
      p2Y = p2Y-5;
      }
      else{
            p2Y = p2Y;
      }
  }

  if (keyIsDown(83)) {
    if(p2Y>=0 && p2Y<300){
      p2Y = p2Y+5;
    }
    else{
    p2Y = p2Y;
    }
  }
}

function draw() {
  background(0);
  criarBolinha();
  movimentarBolinha();
  colisao();
  
  criarPlayer1();
  criarPlayer2();
  
  MovimentarPlayer1();
  MovimentarPlayer2();


  
}

