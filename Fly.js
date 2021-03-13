class Fly
{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.04,
            length: 10
        
        }
        
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world,this.body);
       
    }
    fly(){
        this.body.bodyA = null;
      }
    display(){
        if(this.body.bodyA){
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        push()
        strokeWeight(0);
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop()
      }
  }  
}
