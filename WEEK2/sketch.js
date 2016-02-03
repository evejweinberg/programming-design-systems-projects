var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 800
});

var gridBoxW = 12;
var gridBoxH = 16;
var gridSpaceW = r.width/gridBoxW;
var gridSpaceH = r.height/gridBoxH;

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
for (var i=0;i<12;i++){
	var firstDash = Rune.random(100);
	var secondDash = Rune.random(100);
	r.ellipse(0,0,112+(i*10),112+(i*10),sphereGroup).fill(false).stroke(255).strokeWidth(5-(i*1.3)).strokeCap("round").strokeDash(firstDash+","+secondDash+",10,10");
}

r.draw();