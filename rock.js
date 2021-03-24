class Rock {

    constructor(x, y, radius, maxSides){

      var options = {

          isStatic : false,
          restitution : 0,
          friction : 0.2,
          density : 1

      }

      this.body = Bodies.circle(x, y, radius, options, maxSides);
      this.radius = radius;
      this.maxSides = maxSides;

      this.image = loadImage("images/stone.png");
      
      World.add(world, this.body);

    }

    display(){

      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(1);
      stroke("black");
      fill("grey");
      image(this.image, 0, 0, this.radius, this.maxSides);
      pop();

    }

  }
  