class Chain {
    constructor (bodyA,pointB){

        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 28
        }

       this.chain = Constraint.create(options);
       World.add(world,this.chain);
    }

    attach(body){
      this.chain.bodyA = body
   } 

   fly(){
      this.chain.bodyA = null; 
   } 
  
   display(){
      if(this.chain.bodyA){
         var pointA = this.chain.bodyA.position;
         var pointB = this.chain.pointB;
         strokeWeight(7);
         line(pointA.x,pointA.y,pointB.x,pointB.y);
      } 
   } 
}