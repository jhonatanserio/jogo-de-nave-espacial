
var planodefundo
var anigador
var jogador
var stars, starsImg, starsGroup
var inimigoNormal
var inimigoRapido
var inimigoReforcado
var angle = 90;
var laserjogador
var laser2jogador
var laserinimigo
var enemy1

var enemyOne1, enemyTwo2, laser1

function preload() {
  anigador = loadAnimation("./assets/SpaceShip/s1 (2).png","./assets/SpaceShip/s2.png","./assets/SpaceShip/s3.png");
 

  starsImg = loadImage("./assets/estrela.png");

  enemyOne1 = loadAnimation(  "./assets/enemys/enemy5.png", "./assets/enemys/enemy6.png",  "./assets/enemys/enemy7.png");
  enemyTwo2 = loadAnimation(  "./assets/enemys/enemy1.png", "./assets/enemys/enemy2.png",  "./assets/enemys/enemy3.png");
  laser1 = loadAnimation("./assets/PNG/Explosion_7/2/Explosion_1_1.png", "./assets/PNG/Explosion_7/2/Explosion_1_2.png", "./assets/PNG/Explosion_7/2/Explosion_1_3.png")
 
  
}
    




function setup() {
  canvas = createCanvas(800, 600);
  starsGroup = new Group();

   
 

  jogador = createSprite(width/2,height/2+200,50,50);
  jogador.addAnimation("animaçãojogador",anigador);
  jogador.frameDelay=10
  

}

function draw(){  

  background("black")
  drawSprites();


  /*if(stars.y > 600){
   stars.y=stars.height/8;
  } */


  if(keyDown(LEFT_ARROW)){
    jogador.x=jogador.x-4
  }
  if(keyDown(RIGHT_ARROW)){
    jogador.x=jogador.x+4
  }

  var ran = Math.round(random(1, 2));

 if( frameCount % 30 == 0 ){
  if(ran == 1){
    enemyOne(velocityX = 2)
  
  } else if(ran == 2){
    enemyOne(velocityX = -2)
  }}
  if(laserjogador.isTouching(enemy1) || laser2jogador.isTouching(enemy1)){
    enemy1.destroy();
  }


  /*for (var j = 0; j < totalUV; j++) {
    if (grupoRaiosUV.get(j) != undefined && grupoRaiosUV.get(j).collide(ozonio)) {
      grupoRaiosUV.get(j).destroy();
      grupoRaiosUV.destroyEach();
    }
  }*/
}

function enemyOne(velocity){
  rotate(angle)
  enemy1 = createSprite(600, 40);

  enemy1.addAnimation("ENEMYONE", enemyOne1);
 //enemyOne1.frameDelay = 5
  enemy1.scale = 0.13;
  enemy1.velocityX = velocity;
  

  enemy1.x = Math.round(random(0, 800));


  laserinimigo = createSprite(enemy1.x, enemy1.y+50);
  laserinimigo.addAnimation("laser", laser1);
  laserinimigo.scale = 0.2;
  laserinimigo.velocityY= +5


}

function stars(){
  stars = createSprite(400, 300);
  stars.addImage("imagemdostars", starsImg);
  stars.scale = 0.15;  
  starsGroup.add(stars);


}
function keyPressed(){
  if(keyCode==DOWN_ARROW){
    laserjogador = createSprite(jogador.x, jogador.y-50);
    laserjogador.addAnimation("laser", laser1);
    laserjogador.scale = 0.2;
    laserjogador.velocityY= -5
    laserjogador.velocityX=3
  
    laser2jogador = createSprite(jogador.x, jogador.y-50);
    laser2jogador.addAnimation("laser", laser1);
    laser2jogador.scale = 0.2;
    laser2jogador.velocityY= -5
    laser2jogador.velocityX=-3
}
if(keyCode==UP_ARROW){
  laserjogador = createSprite(jogador.x, jogador.y-50);
  laserjogador.addAnimation("laser", laser1);
  laserjogador.scale = 0.2;
  laserjogador.velocityY= -5
  }
}