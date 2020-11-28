const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine, world;
var box;

function setup(){
createCanvas(600,600);
engine = Engine.create();
world = engine.world;
box = new box_c23(200,100,30,40);

}

function draw(){
background(220);
box.display();


}
