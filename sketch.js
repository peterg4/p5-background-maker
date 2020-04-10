let angle  = 0;
let w =35;
let ma;
function setup() {
  createCanvas(700, 700, WEBGL);
  ma = atan(1/sqrt(2));
  maxD = dist(0,0,200,200);
}
function draw() {
  let locX = height / 2;
  let locY = width / 2;
  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);
  
  ortho(-750,750,-750,750,-100,1000);
  translate(20, 10, -100);
  rectMode(CENTER)
  rotateX(-ma);
  rotateY(-QUARTER_PI);
  background(220);
  
  for(let z = w; z < height-w; z+=w){
    for(let x = w; x < width-w; x+=w){
      push()
      let d = dist(x,z,width/2,height/2);
      let offset = map(d,0,maxD, PI,-PI);
      translate(x-width/2,0,z-height/2);
      let h = floor(map(sin(angle+offset),-1,1, 140, 400));
      fill(250, 0, 0);
      box(w, h, w);
      //rect(x,0,10,h); 
      
      pop()
    }
  }
  
  angle += 0.065;
}