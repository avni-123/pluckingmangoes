class Slingshot{

    constructor(bodyA, pointB){

        var options = {

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.005,
            length: 20
            
        }

        this.pointB = pointB;

        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }

    rockFly(){

        this.slingShot.bodyA = null;

    }


    display(){

        if(this.slingShot.bodyA){

            var A = this.slingShot.bodyA.position;
            var B = this.pointB;
            strokeWeight(4);
            line(A.x, A.y, B.x, B.y);

        }

    }
    
}
