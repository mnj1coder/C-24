const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    box3 = new Box(200,300,50,50);
    box4 = new Box(240,100,50,100);
    ground = new Ground(400,height,width,20)
    pig1 = new Pig(200,390,60,60);
    bird1 = new Bird(170,100,24,10);
    log1 = new Log(170,100,24,10,120);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird1.display();
    log1.display();
    box3.display();
    box4.display();
}