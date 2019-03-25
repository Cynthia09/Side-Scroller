var person;
var sceneNum=0;

function setup() {
  createCanvas(640, 360);
  person = new Person();
  
}

function keyPressed(){
   if (key == ' '){
       var jump = createVector(0,-4);
     person.applyForce(jump);
     person.count();
   } else if (key=='a'){
     sceneNum++;
   }
 }

function draw() {
  
  if(sceneNum===0) {
    background(8,5,6);
    textSize(30);
    fill(244, 247, 246);
    text("2D Side Scroller",  190, 150);
    textSize(20);
    fill(225,0,0);
    text("press a to play", 230, 200);
  
  

 }else if(sceneNum===1){
  background(8,5,6);
  translate(-person.pos.x + 50, 0);
  var gravity = createVector(0,0.1);
  person.applyForce(gravity);
  if(mouseIsPressed) {
    
    var force = createVector(-0.5,0);
  person.applyForce(force);
    
    }

 
   //translate(-person.pos.x,0);a
  person.update();
 person.edges();
  person.display();

//trasnslate(-person.pos.x,0);
 
   fill(247, 192, 27);
  ellipse(800, height-50,70, 70);
   fill(225, 0, 100);
  ellipse(550, height-50,50,50);
    fill(138, 237, 144);
  ellipse(300, height-50,30,30);
    fill(138, 237, 144);
 
  
   
 }else{
    background(50);
    fill(234, 0, 255);
   textSize(50);
    text("GAME OVER!", 160, 180); 
 }
 
}
