const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

const Render = Matter.Render;

const Constraint = Matter.Constraint;

var bg, bgImg;

var treeObj, stoneObj, groundObject, slingShot;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;

var world, boy;

var rock;

var slingShot;

function preload(){

  bgImg = loadImage("images/bg.png");

	boy = loadImage("images/boy.png");

  treeObj = loadImage("images/tree.png");

  }

function setup(){

	createCanvas(1300, 600);

	engine = Engine.create();

	world = engine.world;
  
	groundObject = new ground(width / 2, 600, width, 20);

	mango1 = new Mango(1100, 100, 30);

  mango2 = new Mango(1070, 250, 40);

  mango3 = new Mango(1010, 100, 30);

  mango4 = new Mango(1100, 40, 20);

  mango5 = new Mango(1140, 200, 25);

  mango6 = new Mango(950, 150, 35);

  mango7 = new Mango(950, 250, 15);

  mango8 = new Mango(1170, 260, 37);

  mango9 = new Mango(1220, 180, 30);

  mango10 = new Mango(900, 200, 28);

  mango11 = new Mango(1030, 180, 30);

  mango12 = new Mango(1170, 130, 40);

	stoneObj = new Rock(100, 200, 50, 50);

	slingShot = new Slingshot(stoneObj.body, {x : 240, y : 420});
	
	Engine.run(engine);

}

function mouseDragged(){

  Matter.Body.setPosition(stoneObj.body, {x : mouseX, y : mouseY});

}

function mouseReleased(){

  slingShot.rockFly();

}

function draw(){

  background(bgImg);

  console.log(rock);

  image(boy, 200, 340, 200, 300);

  image(treeObj, 800, 0, 500, 550);

  groundObject.display();

  mango1.display();

  mango2.display();

  mango3.display();

  mango4.display();

  mango5.display();

  mango6.display();

  mango7.display();

  mango8.display();

  mango9.display();

  mango10.display();

  mango11.display();

  stoneObj.display();

  mango12.display();

  slingShot.display();

  Collision(stoneObj, mango1);

	Collision(stoneObj, mango2);

	Collision(stoneObj, mango3);

	Collision(stoneObj, mango4);

	Collision(stoneObj, mango5);

	Collision(stoneObj, mango6);

  Collision(stoneObj, mango7);

	Collision(stoneObj, mango8);

	Collision(stoneObj, mango9);

	Collision(stoneObj, mango10);

	Collision(stoneObj, mango11);

	Collision(stoneObj, mango12);

} 

function Collision(lstone, lmango){

	mangoBodyPosition = lmango.body.position;

	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance <=lmango.r + lstone.r){

		Matter.Body.setStatic(lmango.body,false);

	}
  
}

function keyPressed(){

	if(keyCode === 32){

		Matter.Body.setPosition(stoneObj.body, {x : 240, y : 400}, slingShot);

		slingShot.attach(slingShot.body);

	}

}
