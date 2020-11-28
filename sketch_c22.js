const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
var engine, world;
var object;
function setup(){
createCanvas(1500,1000)
    engine = Engine.create();
world = engine.world;
 var options = {
     isStatic:true
 }
object = Bodies.rectangle(200,300,90,80, options);
World.add(world,object);
}

function draw(){
background(220);
Engine.update(engine);
rect(object.position.x,object.position.y,100,100);


}