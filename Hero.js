class Hero
{
  constructor(x,y,width,height){
    var options = {
     density : 0.5,
     frictionAir : 2
    }
    this.x=x;
    this.y=y;
    this.height=height;
    this.width=width;
    this.image =loadImage("Superhero-01.png")
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    World.add(world,this.body);
}
    

  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0,0,this.width,this.height);
    pop();
  }
}