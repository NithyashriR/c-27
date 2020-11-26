class Slingshot{

    constructor(ba,bb){

        var options = {

            bodyA: ba,
            bodyB: bb,
            length: 100,
            stiffness: 0.1
        }
         this.sling = Matter.Constraint.create(options)
         World.add(world,this.sling)
    }

    display(){

var pointA = this.sling.bodyA.position
var pointB = this.sling.bodyB.position
line(pointA.x,pointA.y,pointB.x,pointB.y)

    }
}