const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var canvas
var ground
var planodefundo
var anigador
var jogador
var fundao
var inimigoNormal
var inimigoRapido
var inimigoReforcado
function preload() {
anigador = loadAnimation("./assets/SpaceShip/s1.png","./assets/SpaceShip/s2.png","./assets/SpaceShip/s3.png",)
planodefundo = loadImage("./assets/bgSpace.gif")
}






function setup() {
  canvas = createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;

  fundao = createSprite(width/2,height/2,1200,600)
  fundao.addImage("imagemdofundao",planodefundo)
  fundao.velocityY=3

  jogador = createSprite(width/2,height/2+200,50,50)
  jogador.addAnimation("animaçãojogador",anigador)
  jogador.frameDelay=10
  

}

function draw(){  
  Engine.update(engine);
  drawSprites();

  if(fundao.y>400){
   fundao.y=fundao.height/2;
  }
  if(keyDown(LEFT_ARROW)){
    jogador.x=jogador.x-4
  }
  if(keyDown(RIGHT_ARROW)){
    jogador.x=jogador.x+4
  }

}

function enemyOne(){


}
function enemyTwo(){


}
function enemythree(){

}