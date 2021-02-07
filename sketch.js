
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
var paper1,img1;
var dustbin1
var ground
function preload()
{
	img1=loadImage("paper.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(200,10,40)
	
	dustbin1= new Dustbin(1200,650)
	ground=new Ground(width/2,670,width,20)
	var render=Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
	}
	});
	
	
	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER)
  
  
  
  paper1.display();
  dustbin1.display();
  ground.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}