var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  speed=random(223,231)
  weight=random(223,321)

 wall=createSprite(1200,200,thickness,height/2);
 bullet=createSprite(200,200,30,10);
 bullet.shapeColor=("#ffffff");
 bullet.velocityX=speed;
}

function draw() {
  background(0,0,0);  
  
hasCollide(bullet,wall);

 if(hasCollide(bullet,wall))
{
  bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10)
{
    wall.shapeColor=color(225,0,0);
}

if(damage<10)
{
  wall.shapeColor=color(0,225,0);
}
}

  drawSprites();
}

  function hasCollide(bullet,wall){

      bulletRightEdge=bullet.x+bullet.width;
      wallLeftEdge=wall.x
      if(bulletRightEdge>wallLeftEdge)
      {
          return true;
      }
      else{
        return false;
      }
  }