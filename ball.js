class Ball{

constructor(x,y,radius) {

this.body = Bodies.circle(x,y,radius) 
this.radius = radius
World.add(world,this.body)
}


display() {

fill("red")
ellipseMode(RADIUS)

ellipse(this.body.position.x,this.body.position.y,this.radius)


}





}