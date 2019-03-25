function Person() {
  this.pos = createVector(50, 250);
  this.vel = createVector(1.5, 0);
  this.acc = createVector(0, 0);
  this.mass = 8;
  this.jump=0;

  this.applyForce = function(force) {
    this.acc.add(force);
  }
  
    this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  this.display = function() {
    
    stroke(255);
    fill(245, 233, 234);
    rect(this.pos.x, this.pos.y+25, this.mass*5, this.mass*10);
    fill(186, 11, 34);
    textSize(30);
    stroke(8,5,6);
    text("Amount of Jumps: "+this.jump,this.pos.x+110,100);
  }
  
  this.edges = function() {
    if (this.pos.y > 250) {
      this.vel.y *= 0;
      this.pos.y = 250;
   
    }
  }
   //This counts how many jumps
  this.count = function(){
    this.jump++;
}
}
