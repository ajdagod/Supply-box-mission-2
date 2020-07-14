var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxposition,boxy;
var boxbottombody,base,boxleft,boxright;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	boxleft=createSprite(290,610,20,100);
	boxleft.shapeColor=color(255,0,0);

	boxright=createSprite(510,610,20,100);
	boxright.shapeColor=color(255,0,0);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	base=createSprite(boxposition+100,boxy+40,200,20);
	base.shapeColor=color(255,0,0)

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxposition=width/2-100;
	boxy=610
	boxbottombody=Bodies.rectangle(boxposition+100,boxy+45-20,200,20,{isStatic:true});
	World.add(world,boxbottombody);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y; 
  base.y=boxbottombody.position.y+15;
  base.x=boxbottombody.position.x;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}



