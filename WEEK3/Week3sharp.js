//before coding anything, tell all code to draw to the DOM element #canvas
var r = new Rune({
    container: "#canvas",
    width: 1200,
    height: 1200,
    debug: true
});

////////color values//////////////////
var black = 0;
var white = 255;
//////////////////////////////////////

var steps = 20;
var numOfSparks = Rune.random(3,24); //anywhere from 3 to 24 sparks
var radiusBase = numOfSparks*27;
var startX = 0,
    startY = 0;
var fillCol = white;
var strokeCol = black;
var dash1 = Rune.random(10, 50),
    dash2 = Rune.random(20, 100);
///////////////////////

//make a polygon at the center of the page
var shape = r.polygon(r.width / 2, 125 + (200));

var spacing = 360 / steps;
var sharpGroup = r.group(200, 200);
var sharp = r.polygon(startX, startY, sharpGroup);


var test = new Rune.Path(0,0);

for (var i = 0; i < numOfSparks; i++) {
    var test = r.polygon(r.width/2,r.height/2)
    if (i % 2 == 0) {
        console.log("even")
        fillCol = white;
        strokeCol = black;
    } else {
        console.log("odd")
        fillCol = black;
        strokeCol = white;
    }
    for (var j = 0; j < steps*2; j++) {
        if (j % 2 == 0) {
            radius = radiusBase + (Rune.random(70, 190)) - (i * 50);
            console.log(radius, i)
        } else {
            radius = radiusBase - (Rune.random(20, 40)) - (i * 50);
        }
        var x = Rune.random(20, 40) + Math.cos(Rune.radians(j * spacing)) * radius;
        var y = Math.sin(Rune.radians(j * spacing)) * radius;
        
        test.lineTo(x, y)
            .fill(fillCol).stroke(strokeCol).strokeWidth(1);
    }

}



//final step: draw it all to the canvas
r.draw();
