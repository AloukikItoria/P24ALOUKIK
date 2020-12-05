//name spacing
const  Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;


var engine,world;
var ground,box;
var ball;
var ground1;
var box1,box2;
var pig1,pig2,pig3,pig4;
var bird1;
var log1,log2;
function setup(){
createCanvas(800,500)
//creating our engine
engine = Engine.create();
//creating our wrld
world = engine.world;


//adding bodies to the world








ball = Bodies.circle(100,100,25)


World.add(world,ball);


//BLUEPRINT OF GROUND
ground1= new Ground(400,480,800,40);

box1 = new Box(400,280,50,50)

box2 = new Box(420,300,50,50)

pig1 = new Pig(200,200)

pig2 = new Pig(300,200)

pig3 = new Pig(100,200)

pig4 = new Pig(50,200)

bird1 = new Bird(380,200)

log1 = new Log(280,100,10,PI/2)

log2 = new Log(180,200,10,-PI)

}



function draw(){
background("black");
rectMode(CENTER)
Engine.update(engine)
fill("white")

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,25,25)
angleMode(RADIANS)

ground1.display();
box1.display();
box2.display();
pig1.display();
pig2.display();
pig3.display();
pig4.display();
bird1.display();
log1.display();
log2.display();
}