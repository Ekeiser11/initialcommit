var x=5
var y=5

function setup() {
  createCanvas(1200,600)
  frameRate(25)
}

function draw() {
  background(102, 255, 217)
  fill(0, 77, 77,85)
  noStroke()
  ellipse(x,y,1000,1000)
  x=x+5
  y=y+2
  noStroke()
  fill(179, 255, 102)
  rect(0,0,100,1200)
  fill(179, 255, 102)
  rect(100,200,100,1200)
  fill(179, 255, 102)
  rect(200,400,100,1200)
  
  fill(140, 102, 255,40)
  rect(0,0,1200,500)
  fill(140, 102, 255,40)
  rect(0,0,1200,400)
  fill(179, 255, 102, 50)
  rect(0,0,1200,350)
  fill(179, 255, 102, 50)
  
  ellipse(300,300,150,150)
  ellipse(300,300,200,200)
  ellipse(300,300,300,300)
  ellipse(300,300,500,500)

  fill(23, 23, 130,70)
  rect(800,450,10,300) 
  fill(23, 23, 130,50)
  rect(850,300,20,700)
  fill(23, 23, 130,60)
  rect(900,70,30,900)
  fill(23, 23, 130,70)
  rect(1000,190,30,900)
  fill(23, 23, 130)
  rect(1100,100,100,1250)
  fill(23, 23, 130,90)
  rect(1050,50,80,1200)
  

  
}