class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':0.1,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, 70, 70, options);
      this.width = 70;
      this.height = 70;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      pos.y = mouseY;
      pos.x = mouseX;

      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke(0,0,200);
  
      fill(200,0,0);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };