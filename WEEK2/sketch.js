var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 800
});

var gridBoxW = 12;
var gridBoxH = 16;
var gridSpaceW = r.width/gridBoxW;
var gridSpaceH = r.height/gridBoxH;
var black = 0;
var white = 255;
var faceCenterX = r.width/2;
var stars = [];
var decrement = .8;


for (var g=0;g<20;g++){
  stars[g]= new star(g*Rune.random(20),g*Rune.random(20));
  console.log(stars.length)

}
eyes(faceCenterX+40,400);
// var eyes = r.gr oup(200,200)
eyes(faceCenterX-40,400);

for(var x = 0; x < gridBoxW+1; x++)
  {
    for(var y = 0; y < gridBoxH+1; y++)
    {
      var circ = r.rect(0,0, 2,2)
        .stroke(false)
    
        ;

      // move it a random amount
      circ.move(x * gridSpaceW, y * gridSpaceH).rotate(Rune.random(65),x * gridSpaceW, y * gridSpaceH ).fill(255);


    
    }
  }

var sphereGroup = r.group(r.width/2,r.height/2)
for (var i=0;i<18;i++){
	var firstDash = Rune.random(100);
	var secondDash = Rune.random(100);
	r.ellipse(0,0,172+(i*10),172+(i*10),sphereGroup).fill(false).stroke(255).strokeWidth(5+decrement).strokeCap("round").strokeDash(firstDash+","+secondDash+",10,10");
  decrement = decrement-.4
}

r.draw();

function star(moveX,moveY){
  var stargroup = r.group(moveX,moveY)
    r.rect(moveX,moveY,2,20,stargroup).fill(white).stroke(false).strokeCap("round");
   r.rect(moveX,moveY,2,20,stargroup).fill(white).stroke(false).rotate(270).strokeCap("round");
   r.rect(moveX,moveY,2,20,stargroup).fill(white).stroke(false).rotate(90).strokeCap("round");
    r.rect(moveX,moveY,2,20,stargroup).fill(white).stroke(false).rotate(180).strokeCap("round");
  // r.rect(0,0,2,20,stargroup).fill(white).stroke(false).strokeCap("round");
  //  r.rect(0,0,2,20,stargroup).fill(white).stroke(false).rotate(270).strokeCap("round");
  //  r.rect(0,0,2,20,stargroup).fill(white).stroke(false).rotate(90).strokeCap("round");
  //   r.rect(0,0,2,20,stargroup).fill(white).stroke(false).rotate(180).strokeCap("round");

}

function eyes(moveX,moveY){
  var faceWidth =130, faceHeight = 60;
  var radWide = 60;
  var radMid = 40;
    r.rect(r.width/2-(faceWidth/2),r.height/2-(faceHeight/2),faceWidth,faceHeight).strokeCap("round").strokeJoin("round").fill(false).stroke(white).strokeWidth(4);

    r.ellipse(0,0,radWide,radWide, eyes).fill(black).stroke(white).move(moveX,moveY);
     r.ellipse(0,0,radMid,radMid,eyes).fill(black).stroke(white).move(moveX,moveY);
      r.ellipse(0,0,5,5,eyes).fill(white).stroke(white).move(moveX,moveY);

}