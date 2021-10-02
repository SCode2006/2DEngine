class Ball{
    constructor(x,y){
        this.x = x;
        this.y = y;
        var option = {
            isStatic: false
        };
        this.body = Bodies.circle(x,y,20,option);
        World.add(world,this.body);
        ellipseMode(RADIUS);
    }
    show(){
        var pos = this.body.position
        ellipse(pos.x,pos.y,20);
    }
}