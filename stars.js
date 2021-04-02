x =window.innerWidth;
y = window.innerHeight;
k = 1;
l = square();
function setup() {
   //size(window.innerWidth, window.innerHeight); 
  console.log(x,y);
  createCanvas(x,y);
  noStroke();
  for(i=20;i<x;i+=150){
  for(j=20;j<y;j+=50){
textSize(32);
text("Click Me!", i, j);
  }
}

}

function draw(){
  background(0);

  for(i=20;i<x;i+=25){
  for(j=20;j<y;j+=20){
    fill(color(random(255), random(255),     random(255)));
    r = floor((random(2)));
    //console.log(r);
    if(r == 1){
    circle(random(mouseX), random(mouseY), random(k));
  } 
       // square(i, j, random(20)); 
  }
}

}

function touchStarted(){
  k+=1;
}
