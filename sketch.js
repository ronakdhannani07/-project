//namespacing
var thickness,wall;
var bullet,speed,weigth,heigth;
function setup() {
speed = random(223,321);
weigth = random(30,52);  
car = createSprite(50,200,50,50);
 wall = createSprite(1200,200,thickness,heigth/2);
 car.velocityX = speed;
thickness=random(22,83)
}

function draw() {
  createCanvas(1600,400)
  if(wall.x-car.x < (car.weigth+wall.weigth)/2){
    car.velocityX = 0;
    var deformation=0.5 * weigth * speed * speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
      }
if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5 * weigth * speed * speed/(thickness *thickness *thickness);

if(damage>10)
{
  wall.shapeColor=color(255,0,0);

}


if(damage<10){
  wall.shapeColor=color(0,255,0)
}

}

  


  background(255,255,255);  
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
   bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
   if(bulletRightEdge>=wallLeftEdge){

    return true 
   }
   return false;
}




