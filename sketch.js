var box1;
function setup() {
  createCanvas(800,600);
  box1 = createSprite(400,300,50,50);
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
    box1.position.x += 3
  }
  if (keyIsDown(LEFT_ARROW)){
    box1.position.x += -3
  }
  if (keyIsDown(DOWN_ARROW)){
    box1.position.y += 3
  }
  if (keyIsDown(UP_ARROW)){
    box1.position.y += -3
  }
drawSprites()
}




