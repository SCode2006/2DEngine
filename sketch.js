
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ball1,ground,wall1,wall2,wall3;
var ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12;
var rButton,uButton,lButton,dButton;


function setup() {
  createCanvas(700,700);

  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  };
  
  
  ground = Bodies.rectangle(350,700,1000,30,options);
  World.add(world,ground);
  wall1 = Bodies.rectangle(0,350,30,1000,options);
  World.add(world,wall1);
  wall2 = Bodies.rectangle(700,350,30,1000,options);
  World.add(world,wall2);
  wall3 = Bodies.rectangle(350,0,1000,30,options);
  World.add(world,wall3);
  ball1 = new Ball(100,50);
  ball2 = new Ball(150,50);
  ball3 = new Ball(200,50);
  ball4 = new Ball(250,50);
  ball5 = new Ball(300,50);
  ball6 = new Ball(350,50);
  ball7 = new Ball(400,50);
  ball8 = new Ball(450,50);
  ball9 = new Ball(500,50);
  ball10 = new Ball(550,50);
  ball11 = new Ball(600,50);
  ball12 = new Ball(650,50);
  
  rButton = createImg("rightbluearrow.jpg");
  rButton.position(100,30);
  rButton.size(50,50);
  rButton.mouseClicked(right);

  uButton = createImg("greenup.png");
  uButton.position(150,30);
  uButton.size(50,50);
  uButton.mouseClicked(up);

  lButton = createImg("leftred.png");
  lButton.position(200,30);
  lButton.size(50,50);
  lButton.mouseClicked(left);
  
  dButton = createImg("purpledown.png");
  dButton.position(250,30);
  dButton.size(50,50);
  dButton.mouseClicked(down);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  
  rect(ground.position.x,ground.position.y,400,10);
  rect(wall1.position.x,wall1.position.y,400,10);
  rect(wall2.position.x,wall2.position.y,400,10);
  rect(wall3.position.x,wall3.position.y,400,10);
  ball1.show();
  ball2.show();
  ball3.show();
  ball4.show();
  ball5.show();
  ball6.show();
  ball7.show();
  ball8.show();
  ball9.show();
  ball10.show();
  ball11.show();
  ball12.show();
  
}

function right(){
  Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.05,y:0});
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:0.05,y:0});
  Matter.Body.applyForce(ball3,{x:0,y:0},{x:0.05,y:0});
  Matter.Body.applyForce(ball4,{x:0,y:0},{x:0.05,y:0});
  Matter.Body.applyForce(ball5,{x:0,y:0},{x:0.05,y:0});
  Matter.Body.applyForce(ball6,{x:0,y:0},{x:0.05,y:0});
  Matter.Body.applyForce(ball7,{x:0,y:0},{x:0.05,y:0});
  Matter.Body.applyForce(ball8,{x:0,y:0},{x:0.05,y:0});
  Matter.Body.applyForce(ball9,{x:0,y:0},{x:0.05,y:0});
  Matter.Body.applyForce(ball10,{x:0,y:0},{x:0.05,y:0});
  Matter.Body.applyForce(ball11,{x:0,y:0},{x:0.05,y:0});
  Matter.Body.applyForce(ball12,{x:0,y:0},{x:0.05,y:0});
}
function up(){
  Matter.Body.applyForce(ball1,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball3,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball4,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball5,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball6,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball7,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball8,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball9,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball10,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball11,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball12,{x:0,y:0},{x:0,y:-0.05});
}
function left(){
  Matter.Body.applyForce(ball1,{x:0,y:0},{x:-0.05,y:0});
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:-0.05,y:0});
  Matter.Body.applyForce(ball3,{x:0,y:0},{x:-0.05,y:0});
  Matter.Body.applyForce(ball4,{x:0,y:0},{x:-0.05,y:0});
  Matter.Body.applyForce(ball5,{x:0,y:0},{x:-0.05,y:0});
  Matter.Body.applyForce(ball6,{x:0,y:0},{x:-0.05,y:0});
  Matter.Body.applyForce(ball7,{x:0,y:0},{x:-0.05,y:0});
  Matter.Body.applyForce(ball8,{x:0,y:0},{x:-0.05,y:0});
  Matter.Body.applyForce(ball9,{x:0,y:0},{x:-0.05,y:0});
  Matter.Body.applyForce(ball10,{x:0,y:0},{x:-0.05,y:0});
  Matter.Body.applyForce(ball11,{x:0,y:0},{x:-0.05,y:0});
  Matter.Body.applyForce(ball12,{x:0,y:0},{x:-0.05,y:0});
}
function down(){
  Matter.Body.applyForce(ball1,{x:0,y:0},{x:0,y:0.05});
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:0,y:0.05});
  Matter.Body.applyForce(ball3,{x:0,y:0},{x:0,y:0.05});
  Matter.Body.applyForce(ball4,{x:0,y:0},{x:0,y:0.05});
  Matter.Body.applyForce(ball5,{x:0,y:0},{x:0,y:0.05});
  Matter.Body.applyForce(ball6,{x:0,y:0},{x:0,y:0.05});
  Matter.Body.applyForce(ball7,{x:0,y:0},{x:0,y:0.05});
  Matter.Body.applyForce(ball8,{x:0,y:0},{x:0,y:0.05});
  Matter.Body.applyForce(ball9,{x:0,y:0},{x:0,y:0.05});
  Matter.Body.applyForce(ball10,{x:0,y:0},{x:0,y:0.05});
  Matter.Body.applyForce(ball11,{x:0,y:0},{x:0,y:0.05});
  Matter.Body.applyForce(ball12,{x:0,y:0},{x:0,y:0.05});
}