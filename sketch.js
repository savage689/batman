const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var maxDrops = 100;
var drops=[];
var unlimitedDrops;

var engine,world;


function preload(){
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    var canvas = createCanvas(400,600);
    unlimitedDrops = new Drops();
    
    
   
    
}

function draw(){
    background("black");
    Engine.update(engine);
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400), random(0,400)));
    }
    
    drawSprites();
    
}   

