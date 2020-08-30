class Log{
    constructor(x, y, width, height,angle) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic': true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        push ()
        translate(pos.x,pos.y);
        angleMode(DEGREES);
        rotate(this.body.angle)

        rect(0,0, this.width, this.height);
        pop ()

      }
}

