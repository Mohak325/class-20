var fr,mr,br
function setup() {
  createCanvas(800,800);
 fr =  createSprite(400, 200, 20, 50);
 fr.shapeColor ="green";
 mr = createSprite(200,600,50,20);
 mr.shapeColor = "green";

 br = createSprite(100,50,30,10);
 br.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  mr.x = mouseX;
  mr.y = mouseY;

  if(isTouching(br,mr)){
    br.shapeColor = "red";
    mr.shapeColor = "red";
  }

  else if(isTouching(fr,mr)){
    mr.shapeColor = "blue";
    fr.shapeColor = "blue";
    
  }
  else{
    br.shapeColor = "green";
    fr.shapeColor = "green";
    mr.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(r1,r2){
  
  if(r1.x - r2.x <= r1.width/2+r2.width/2&&
    r2.x - r1.x <= r2.width/2+r1.width/2&&
    r1.y - r2.y <= r1.height/2+r2.height/2&&
    r2.y - r1.y <= r2.height/2+r1.height/2){
      return true;

}
else{
  return false;
}
}
