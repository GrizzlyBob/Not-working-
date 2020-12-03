
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,paper1,bin1,bin2,bin3
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

bin1 = createSprite(1000,650,150,20)
bin2 = createSprite(925,590,20,150)
bin3 = createSprite(1070,590,20,150)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new ground(800,670,1600,20)
paper1 = new paper(200,650,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display()
  paper1.display()
  drawSprites();
 
}



