class Bird{



constructor(x,y){

var birdoption = {

restitution:0.2


}

this.body = Bodies.rectangle(x,y,20,20,birdoption)
this.width = 20;
this.height = 20;
World.add(world,this.body) 


}


display(){
this.body.position.x = mouseX
this.body.position.y = mouseY
push();
rectMode(CENTER)
fill("yellow")
stroke("white")
strokeWeight("3")
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
rect(0,0,20,20)
pop();




}









}