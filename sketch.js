var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);

  thickness=random(22,83);

  bullet=createSprite(50,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor=color(255);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  

  
 

  if(wall.x-bullet.x< (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      bullet.shapeColor=color(0,255,0);
    }
    }
  
    if(bullet.isTouching(wall)){
      bullet.x=1300;
      bullet.y=200;
    }
  
    if(hasCollided(bullet,wall))
    {
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
      
      if(damage>10)
      {
        wall.shapeColor=color("red");
      }
      if(damage<10)
      {
        wall.shapeColor("green");
      }
    
      }
  drawSprites();
}

function hasCollided(lbullet,lwall)
{

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>wallLeftEdge)
  {
    return true
  }
  return false;
}



