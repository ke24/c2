function setup(){
  createCanvas(400,400)
 
  angleMode(DEGREES)
}

function draw(){
  background("purple")
  translate(200,200)
  
  hr = hour();
  mn=minute();
  sc=second();
  
  
  textSize(10)
  
  rotate(-90)
  
  
  fill("pink");
  strokeWeight(40)
  stroke("black")
  ellipse(0,0,300,300)
  fill("black")
  textSize(44)
  strokeWeight(8)
  
  
  strokeWeight(4)
  stroke("yellow")
  noFill()
  
  let end1 = map(sc,0,60,0,360)
  arc(0,0,300,300,0,end1)
  push();
  rotate(end1)
  line(0,0,100,0)
  pop();
  
  
  strokeWeight(4)
  stroke("orange")
  noFill()
  
  let end2 = map(mn,0,60,0,360)
  arc(0,0,280,280,0,end2)
  push();
  rotate(end2)
  line(0,0,90,0)
  pop();
  
  
  strokeWeight(4)
  stroke(150,255,255)
  noFill()
  
  let end3 = map(hr%12,0,12,0,360)
  arc(0,0,260,260,0,end3)
  push();
  rotate(end3)
  line(0,0,50,0)
  pop();
  
  translate(0,0)
  rotate(90);
  textSize(25)
  strokeWeight(8)
  stroke("red")
  fill("black")
  text(hr+':'+mn+':'+sc,-50,60)
  drawSprites();
  
  
  
}