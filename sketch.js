


const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine
var world
var pin
var holder
var ball

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world
 pin = new Pin(400,300,200,25)
 ball = new Ball(400,500,25)
 holder = new Holder(pin.body,ball.body)
  console.log(pin)
  
}

function draw() {
  background("lime");  
 
Engine.update(engine);
pin.display();
ball.display();
holder.display();

if(keyCode === 32){

ball.body.position.x = mouseX
ball.body.position.y = mouseY

}

else if(keyCode === ENTER) {

ball.body.position.x = 400
ball.body.position.y = 500

}

}