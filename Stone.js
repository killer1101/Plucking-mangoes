class Stone {
    constructor (x,y,r){
        var options = {
           isStatic : true,
           restitution : 0,
           friction : 1,
           density : 1 
        }
     
       this.x = x;
       this.y = y;
       this.r = r;
       this.image = loadImage("stone.png");
       this.body = Bodies.circle(this.x,this.y,(this.r-10)/2,options);
       World.add(world,this.body); 
    }
   display(){
      var pos = this.body.position;

      push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r);
      pop();
   } 
}