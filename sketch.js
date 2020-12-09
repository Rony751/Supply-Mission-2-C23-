var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, redz1, redz2, redz3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite = createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(400, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(helicopterSprite.x , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	redz1 = createSprite(width/2, 650, 200, 20);
	redz1.shapeColor = "red";

	redz2 = createSprite(500, 620, 20, 80);
	redz2.shapeColor = "red";

	redz2 = createSprite(300, 620, 20, 80);
	redz2.shapeColor = "red";

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
	keyPressed();
	moveHelicopter();
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y
  drawSprites();

}

function keyPressed() {
 if (keyDown("space")) {
	 Matter.Body.setStatic(packageBody,false);
	}
}

function moveHelicopter() {
	if(keyDown(LEFT_ARROW)) {
		helicopterSprite.x = helicopterSprite.x - 4;
	}

	if(keyDown(RIGHT_ARROW)) {
		helicopterSprite.x = helicopterSprite.x + 4;
	}
}
