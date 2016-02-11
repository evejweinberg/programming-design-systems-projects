//ignore this
var r = new Rune({
    container: "#canvas",
    width: 800,
    height: 800,
    debug: true
});

////////////////////////
var black = 0;
var white = 255;
///////////////////////
var raindrops = [];
var number = 0;
var movingX = 0,
    movingY = 0,
    deg = Rune.random(0, 50);
var numberOfpts = 3;
var pointDegree = 360 / numberOfpts; //how much to rotate every time

// number++;
// // movingX = Math.cos(i*Rune.radians(deg))*100;
// // movingY = Math.cos(i*Rune.radians(deg))*100;
// var myPoly = r.polygon(200, 50);
// r.circle(0, 0, 50);
// r.circle(movingX*100,movingY*100,50);

// for (var i = 0; i < numberOfpts; i++) {
//     movingX = Math.cos(Rune.radians(i * pointDegree)) * 100;
//     movingY = Math.cos(Rune.radians(i * pointDegree)) * 100;
//     r.circle(movingX, movingY, 30)
//     myPoly.lineTo(movingX, movingY);
// }


// var it  =r.polygon(0, 0)
//     .lineTo(0, 0)
//     .lineTo(200, 200)
//     .lineTo(-00, -900)
//     .lineTo(0, 0)
//     .fill(255, 0, 0);

// var YellowTri = r.path(0, 100)
//     .lineTo(400, 100)
//     .curveTo(100, 400, 400, 100, 600, 200)
//     .fill(255, 255, 0);

// console.log(it.centroid()); 
for (var i = 0; i < 30; i++) {
    var moveLeft = Rune.random(-1200, 1200)
    var moveDown = Rune.random(30, 300);
    raindrops[i] = new Raindrop(r.width - moveLeft, 0 - moveDown, 100 - moveLeft, r.height - moveDown, Rune.random(1, 8), Rune.random(20, 100), Rune.random(20, 100), Rune.random(2, 5));
}





function Raindrop(lineStartx, lineSarty, lineEndx, LineEndy, lineStroke, dash1, dash2, randomRingAmt) {
    var raindropGroup = r.group(0, 0);
    var splashWidth = 60;
    var ringTime = false;

    var radius = 40;
    var points = 40;

    if (ringTime == true){
        lineStroke=lineStroke-2;
    } else{
        lineStroke = lineStroke;
    }

    var shape = r.polygon(lineEndx, LineEndy, raindropGroup);
    var spacing = 360 / points;

    for (var i = 0; i < randomRingAmt; i++) {
        for (var j = 0; j < 360; j++) {
            ringTime = true;
            var x = Math.cos(Rune.radians(j * spacing)) * i*radius;
            var y = .5*Math.sin(Rune.radians(j * spacing)) * i*radius;
            shape.lineTo(x, y).strokeDash("10,90," + dash1 / 2 + "," + dash2 / 2);
        }
    }

    var ringTime = false;

    var diagnalLine = r.line(lineStartx, lineSarty, lineEndx, LineEndy, raindropGroup).strokeDash(dash1 + "," + dash2);
    //curveTo(control,vontrol,control,control,x,y)
    var splash = r.path(lineEndx, LineEndy, raindropGroup)
        // .curveTo(-100, -100, 0, 0)
        .curveTo(-splashWidth / 2, -100, -splashWidth, -30);

    var puddle = r.polygon(lineEndx, LineEndy, raindropGroup);
    puddle.lineTo
    var shape = r.polygon(r.width / 2, 125 + (i * 200));

    for (var i = 0; i < raindropGroup.children.length; i++) {
        raindropGroup.children[i].strokeWidth(lineStroke).stroke(white).strokeCap("round").fill(false);
    }

}








//ignore, just make sure it's there
r.draw();
