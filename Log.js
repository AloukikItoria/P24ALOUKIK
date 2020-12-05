class Log{

constructor(x,y,height,angle){


var loption = {

friction:0.1,
restitution:0.1

}

this.body = Bodies.rectangle(x,y,100,height,loption)
this.width = 100
this.height = height
Matter.Body.setAngle(this.body,angle)
World.add(world,this.body)


}


display(){

push();
rectMode(CENTER)
fill("brown")
stroke("red")
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
rect(0,0,this.width,this.height)
pop();


}



























}