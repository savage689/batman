class Drops{

    constructor(x,y,r){
var options={
    restitution:0.4
}

this.r=r;
this.body = Bodies.circle(x,y,this.r,options);
this.color= "blue";
world.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}