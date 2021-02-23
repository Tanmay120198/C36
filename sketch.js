var database;
var form, player, game;
var gState= 0,pCount;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game= new Game();
  game.getState();
  game.start();

}

function draw(){

}
