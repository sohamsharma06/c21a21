
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball= Bodies.circle(200,100,20,ball_o);
	World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);

	button1=createImg('right.png');
  button1.position(120,30);
  button1.size(50,50);
  button1.mouseClicked(hForce);



	Engine.run(engine);

	groundObj=new Ground(width/2,670,width,20);
	leftSide=new Ground(500,600,20,120);
	rightSide=new Ground(700,600,20,120)
	right = new Ground(790,390,20,800);
	left = new Ground(10,200,20,1000);
	top_wall = new Ground(200,10,1200,20);

	
	var ball_o={
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20,20);
  groundObj.show();
  leftSide.show();
  rightSide.show();
  right.show();
  left.show();
  top_wall.show();
  drawSprites();
 
}

		function hForce(){
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
		  }
		  


