class Block{
  constructor(x,y,height,angle){
     var options = {
         restitution:0.6,
         friction:1.3,
         density:1.2,
     }
  this.body = Bodies.rectangle(x,y,10,height,options)  
  this.width=10
  this.height=height
  Matter.Body.setAngle(this.body,angle)
  World.add(world,this.body)

 }

display(){
    var pos = this.body.position
    var angle = this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    strokeWeight(4)
    stroke("green")
    fill(255)
    rect(0,0,this.width,this.height)
    pop()

}
}