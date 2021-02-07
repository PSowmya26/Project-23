class Dustbin{
    constructor(x, y) {
        this.x=x;
        this.y=y
        this.Dustbinwidth=200
        this.Dustbinheight=100
        this.wallthickness=20
        this.angle=0
        this.bottomBody = Bodies.rectangle(this.x,this.y, this.Dustbinwidth, this.wallthickness, {isStatic:true});
        Matter.Body.setAngle(this.bottomBody,PI/2)
        this.leftBody=Bodies.rectangle(this.x-this.Dustbinwidth/2,this.y-this.Dustbinheight/2, this.wallthickness, this.Dustbinheight, {isStatic:true});
        Matter.Body.setAngle(this.leftBody,this.angle)
        this.rightBody=Bodies.rectangle(this.x+this.Dustbinwidth/2,this.y-this.Dustbinheight/2, this.wallthickness, this.Dustbinheight, {isStatic:true});
        Matter.Body.setAngle(this.rightBody,-1*this.angle)
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
      }
      display(){
        var Bottompos=this.bottomBody.position
        var Leftpos=this.leftBody.position
        var Rightpos=this.rightBody.position
        push();
        translate(Leftpos.x,Leftpos.y)
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("blue")
        stroke("white")
        rotate(this.angle)
        rect(0,0,this.wallthickness,this.Dustbinheight)
        pop();
        push();
        translate(Rightpos.x,Rightpos.y)
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("blue")
        stroke("white")
        rotate(-1*this.angle)
        rect(0,0,this.wallthickness,this.Dustbinheight)
        pop();
        push();
        translate(Bottompos.x,Bottompos.y)
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("blue")
        stroke("white")
        rotate(PI/2)
        rect(0,0,this.wallthickness,this.Dustbinwidth)
        pop();
      }

}