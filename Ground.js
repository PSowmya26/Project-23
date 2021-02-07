class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }
    display(){
        var Groundpos=this.body.position
        push();
        translate(Groundpos.x,Groundpos.y)
        rectMode(CENTER)
        stroke("white")
        strokeWeight(4)
        fill("green")
        rect(0,0,this.w,this.h)
        pop();
    }

}