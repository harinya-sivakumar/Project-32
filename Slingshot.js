class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 1
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        

        if(this.sling.bodyA != null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
      
        }
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
       this.sling.bodyA = body; 
    }
    
}

//class Slingshot{
    //constructor(body1, point2){
        //var options = {
            //bodyA:body1,
            //pointB:point2,
            //length:10,
            //stiffness:0.04
        //}
        
        
            //this.slingshot = Constraint.create(options);
            //World.add(world,this.slingshot);
    //}

    //display(){
        
      //if(this.slingshot.BodyA !== null){
       // var pointA = this.slingshot.bodyA.position;
        //var pointB = this.slingshot.pointB.position;
        
        //strokeWeight(4);
        //line (pointA.x, pointA.y, pointB.x, pointB.y);  
      //}
      
        
    //}
//
    //fly(){
          //this.slingshot.body1 = null;
      ////}  
//}









