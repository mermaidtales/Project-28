
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone, boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,200,30);
	mango3=new mango(1120, 200, 30);
	mango4=new mango(1190, 150, 30);
	mango5=new mango(1000, 100, 30);
	mango6=new mango(1050, 150, 30);
	mango7=new mango(930, 200, 30);
	mango8=new mango(1220, 210, 30);

	stone=new Stone (240, 420, 30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	rope = new Rope (stone.body, {x: 240, y: 420});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stone.display();
  groundObject.display();

  rope.display();
}

function mouseDragged() {
	Matter.Body.setPosition (stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased () {
	rope.fly ();
}

function detecollision () {
	Matter.body.setStatic(mango1, false);
	Matter.body.setStatic(mango2, false);
	Matter.body.setStatic(mango3, false);
	Matter.body.setStatic(mango4, false);
	Matter.body.setStatic(mango5, false);
	Matter.body.setStatic(mango6, false);
	Matter.body.setStatic(mango7, false);
	Matter.body.setStatic(mango8, false);
}