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
var steps = 40;
var radius = 50;
var startX = 0,
    startY = 0;
///////////////////////


var sharpGroup = r.group(0, 0);
var sharp = r.polygon(startX, startY, sharpGroup)

// var shape = r.polygon(lineEndx, LineEndy, raindropGroup);


for (var i = 0; i < (360 / steps); i++) {
    var x = Math.cos(Rune.radians(j * spacing)) * i * radius;
    var y = .5 * Math.sin(Rune.radians(j * spacing)) * i * radius;
    sharp.lineTo(x, y)
        .fill(255, 0, 0);
}

for (var j = 0; j < 360; j++) {
    ringTime = true;
    var x = Math.cos(Rune.radians(j * spacing)) * i * radius;
    var y = .5 * Math.sin(Rune.radians(j * spacing)) * i * radius;
    shape.lineTo(x, y).strokeDash("10,90," + dash1 / 2 + "," + dash2 / 2);
}



//ignore, just make sure it's there
r.draw();
