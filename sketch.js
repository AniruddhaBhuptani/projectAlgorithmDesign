var f,m; 





function setup() {


  createCanvas(800,400);
   
  f=createSprite(200,300,80,100);
  f.shapeColor="red";
  m=createSprite(600,200,50,60);
  m.shapeColor="red";

  m.debug=true
  f.debug=true
}

function draw() {
  background(255,255,255);  

  m.x=World.mouseX;
  m.y=World.mouseY;

console.log(m.x-f.x);
  if (m.x-f.x<m.width/2+f.width/2 && f.x-m.x<m.width/2+f.width/2 
    && m.y-f.y<m.width/2+f.width/2 && f.y-m.y<m.width/2+f.width/2 ){

    f.shapeColor="green";
    m.shapeColor="green";
  }
else
{

  f.shapeColor="red";
  m.shapeColor="red";

}





  drawSprites();
}