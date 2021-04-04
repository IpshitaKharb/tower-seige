const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;

function preload(){

}

function setup() {
    createCanvas(1600,1000);
    engine=Engine.create();
    world=engine.world;
    hexagon = new Hexagon(100,500,80);
    //second story
    box1 = new Box(950,200,100,150);
    box2 = new Box(800,500,100,150);
    box3 = new Box(900,500,100,150);
    box4 = new Box(1000,500,100,150);
    box5 = new Box(1100,500,100,150);
    //top story
    box6 = new Box(900,350,100,150);
    box7 = new Box(1000,350,100,150);
    //third story
    box8 = new Box(900,650,100,150);
    box9 = new Box(800,650,100,150);
    box10 = new Box(1100,650,100,150);
    box11 = new Box(1000,650,100,150);
    box12 = new Box(1200,650,100,150);
    box13 = new Box(700,650,100,150);
    string = new Chain(hexagon.body, { x : 100 , y : 500});
    ground = new Ground(1000,750,700,10);
    score = 0;
    color = (random(0,255) , random(0,255) , random(0,255));

}

function draw(){
    Engine.update(engine);
    rectMode(CENTER);
    background("white");
    hexagon.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    string.display();

    detectcollision(hexagon.body,box1.body);
    detectcollision(hexagon.body,box4.body);
    detectcollision(hexagon.body,box5.body);
    detectcollision(hexagon.body,box6.body);
    detectcollision(hexagon.body,box7.body);
    detectcollision(hexagon.body,box8.body);
    detectcollision(hexagon.body,box9.body);
    detectcollision(hexagon.body,box10.body);
    detectcollision(hexagon.body,box11.body);
    detectcollision(hexagon.body,box12.body);

    box1.points();
    box2.points();
    box3.points();
    box4.points();
    box4.points();
    box5.points();
    box6.points();
    box7.points();
    box8.points();
    box9.points();
    box10.points();
    box11.points();
    box12.points();
    box13.points();

    textSize(30);
    text("SCORE:"+score,740,40);
    
    

}
function detectcollision(lhexagon,lbox){
   collision = Matter.SAT.collides(lhexagon,lbox);
	if(collision.collided){
	  Body.setStatic(lbox,false);
	}
}

function mouseDragged(){
     Body.setPosition(hexagon.body , {x : mouseX, y : mouseY})
}
function mouseReleased(){
        string.fly();
}

function keyPressed(){
  if (keyCode===32 ){
  string.attach(hexagon.body);
  }
}   

