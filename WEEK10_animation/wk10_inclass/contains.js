var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 800,
  debug: false 

});

r.rect (0,0,600,800)
.fill ('fcf7f1')

/// Blue cloud /////

var noise = new Rune.Noise().noiseDetail(0.6);
var numPoints = 120;
var pointDegree = 360 / numPoints;
var radius = Rune.random(275,275);
var noiseStep = 0;

for (var j = 0; j < 1; j++){

  var randomSize = Rune.random(110, 180);
  var x = Rune.random(100 + randomSize, r.width - 100 - randomSize);
  var y = Rune.random(100 + randomSize, r.height - 100 - randomSize);


var noiseCircle1 = r.polygon(r.width/2+40, r.height/2-10)

  .fill('fcf7f1')
    .stroke('fcf7f1')
  .strokeWidth(6);


for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 70) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle1.lineTo(x, y);
  noiseStep += 0.23;

  }
}


//// grid ///////

var size = 5;

for(var x = 2; x < 900; x += size+0.5)
{
  for(var y = 2; y < 900; y += size+0.5)
  {
    if (noiseCircle1.contains(x,y)){
      EvePattern(x,y)
   
    }
   }
}

function EvePattern(x,y){
r.rect(x,y,10,Rune.random(10))
// .rotate((Rune.random(90)))
}



function EvePattern2(x,y){
r.line(x,y,x+10,y+10)
r.line(x+10,y,x,y+10)
// .rotate((Rune.random(90)))
}





/// RED cloud /////

var noise = new Rune.Noise().noiseDetail(0.6);
var numPoints = 120;
var pointDegree = 360 / numPoints;
var radius = Rune.random(200,210);
var noiseStep = 0;

for (var j = 0; j < 1; j++){

  var randomSize = Rune.random(110, 180);
  var x = Rune.random(100 + randomSize, r.width - 100 - randomSize);
  var y = Rune.random(100 + randomSize, r.height - 100 - randomSize);


var noiseCircle1 = r.polygon(r.width/2, r.height/2)
  .fill('fcf7f1')
  .stroke('3d3078')
  .strokeWidth(8);


for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 70) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle1.lineTo(x, y);
  noiseStep += 0.23;

  }
}


//// grid ///////

var size = 5;

for(var x = 0; x < 900; x += size)
{
  for(var y = 0; y < 900; y += size)
  {
    if (noiseCircle1.contains(x,y)){
  EvePattern2(x,y)
    }
   }
}

// Y E L L O W  - L A Y E R /////

var numPoints = 44;
var pointDegree = 360 / numPoints;
var myPath = r.path(r.width/2, r.height/2);

var firstX;
var firstY;

for(var i = 0; i < numPoints; i++) {
  var actualDegree = (i * pointDegree) ;
  var radius = Rune.random(170, 190);
  var x = Math.cos(Rune.radians(actualDegree)) * radius;
  var y = Math.sin(Rune.radians(actualDegree)) * radius;
  // console.log("x: ", x ,"y: ", y)
  if(i == 0) {
    var mp = myPath.moveTo(x, y)
    .fill('3d3078')
    .stroke('3d3078')
    .strokeWidth(5);
    firstX = x;
    firstY = y;
  } else {
    if (actualDegree > 90 && actualDegree < 270){
    myPath.curveTo(x+20, y+20, x, y); 
    // console.log('actualDegree > 90 < 270 ') 
  }
   if (actualDegree < 90 || actualDegree > 270){
    myPath.curveTo(x-20, y-20, x, y);  
    // console.log('actualDegree < 90 > 270 ')
  }
  }

  //  if (mp.contains(x,y)){
  // EvePattern2(x,y)
  //   }
}

myPath.curveTo(0, 0, firstX, firstY);
  


// Y E L L O W  - L A Y E R /////

var numPoints = 44;
var pointDegree = 360 / numPoints;
var myPath = r.path(r.width/2, r.height/2);

var firstX;
var firstY;

for(var i = 0; i < numPoints; i++) {
  var actualDegree = (i * pointDegree) ;
  var radius = Rune.random(170, 190);
  var x = Math.cos(Rune.radians(actualDegree)) * radius;
  var y = Math.sin(Rune.radians(actualDegree)) * radius;
  // console.log("x: ", x ,"y: ", y)
  if(i == 0) {
    myPath.moveTo(x, y)
    .fill('f7de3c')
    .stroke('3d3078')
    .strokeWidth(5);
    firstX = x;
    firstY = y;
  } else {
    if (actualDegree > 90 && actualDegree < 270){
    myPath.curveTo(x+20, y+20, x, y); 
    console.log('actualDegree > 90 < 270 ') 
  }
   if (actualDegree < 90 || actualDegree > 270){
    myPath.curveTo(x-20, y-20, x, y);  
    console.log('actualDegree < 90 > 270 ')
  }
  }
}

myPath.curveTo(0, 0, firstX, firstY);

//// W H I T E - L A Y E R /////

var numPoints = 7;
var pointDegree = 360 / numPoints;
var myPath = r.path(r.width/2, r.height/2);

var firstX;
var firstY;

for(var i = 0; i < numPoints; i++) {
  var actualDegree = (i * pointDegree) + Rune.random(10, 15);
  var radius = Rune.random(100, 500);
  var x = Math.cos(Rune.radians(actualDegree)) * radius;
  var y = Math.sin(Rune.radians(actualDegree)) * 1*radius;

  if(i == 0) {
    myPath.moveTo(x, y)
    .fill('fcf7f1')
    .stroke('3d3078')
    .strokeWidth(7);
    firstX = x;
    firstY = y;
  } else {
    myPath.curveTo(0+20, 0+20, x, y);  
  }
}

myPath.curveTo(0, 0, firstX, firstY);

//// R E D - L A Y E R /////

var numPoints = 10;
var pointDegree = 360 / numPoints;
var myPath = r.path(r.width/2, r.height/2);

var firstX;
var firstY;

for(var i = 0; i < numPoints; i++) {
  var actualDegree = (i * pointDegree) + Rune.random(-1, 6);
  var radius = Rune.random(200, 150);
  var x = Math.cos(Rune.radians(actualDegree)) * radius;
  var y = Math.sin(Rune.radians(actualDegree)) * 1.5*radius;

  if(i == 0) {
    myPath.moveTo(x, y)
    .fill('e52b1f')
    .stroke('3d3078')
    .strokeWidth(7);
    firstX = x;
    firstY = y;
  } else {
    myPath.curveTo(0, 0, x, y);  
  }
}

myPath.curveTo(0, 0, firstX, firstY);

/// YELLOW CLOUD /////

var noise = new Rune.Noise().noiseDetail(0.2);
var numPoints = 120;
var pointDegree = 360 / numPoints;
var radius = Rune.random(50,50);
var noiseStep = 0;

for (var j = 0; j < 1; j++){

  var randomSize = Rune.random(90, 20);


var noiseCircle = r.polygon(r.width/2, r.height/2)

  .stroke(false)
  .fill('f7de3c')
  .strokeWidth(2);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 70) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.07;
  }
}

/// WHITE CLOUD /////

var noise = new Rune.Noise().noiseDetail(0.2);
var numPoints = 120;
var pointDegree = 360 / numPoints;
var radius = Rune.random(29,29);
var noiseStep = 0;

for (var j = 0; j < 1; j++){

  var randomSize = Rune.random(90, 20);

var noiseCircle = r.polygon(r.width/2, r.height/2)

  .stroke(false)
  .fill('fcf7f1')
  .strokeWidth(2);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 70) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.07;
  }
}

/// BLUE CLOUD #1 /////

var noise = new Rune.Noise().noiseDetail(0.2);
var numPoints = 120;
var pointDegree = 360 / numPoints;
var radius = Rune.random(1,1);
var noiseStep = 0;

for (var j = 0; j < 1; j++){

  var randomSize = Rune.random(90, 20);

var noiseCircle = r.polygon(r.width/2, r.height/2)

  .stroke(false)
  .fill('3d3078')
  .strokeWidth(2);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 30) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.2;
  }
}




r.draw();