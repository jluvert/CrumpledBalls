class Paper{
    constructor(x, y, radius){
        var options = {
            isStatic: false,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 2.1
        }
        this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
    }
    display(){
        fill(250,251,18);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}