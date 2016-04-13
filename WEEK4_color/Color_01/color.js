/*//////////////
http://printingcode.runemadsen.com/examples/color/scheme_complementary.html
*/ //////////////////


var r = new Rune({
    container: "#canvas",
    width: 600,
    height: 800
});

// ////////////////////////
// var black = 0;
// var white = 255;
// var h = 10;
// var s = 100;
// var v = 100;
// var array = [];
// ///////////////////////



var steps = 25;
var colorDegree = 360 / steps;
var colorVariationSteps = 20;

for (var i = 0; i < steps; i++) {
    var x = Math.cos(Rune.radians(i * colorDegree)) * 100;
    var y = Math.sin(Rune.radians(i * colorDegree)) * 100;
    r.circle(x, y, 10)
        .fill('hsv', i * colorDegree, 100, 100);
}


var movecolor = Rune.random(100);

for (var i = 0; i < steps; i++) {
    r.rect(i * 40, 20, 30, 30)
        .stroke(false)
        //monochrome blue
        //.fill('hsv', 240,Rune.random(100), Rune.random(100));
        //monochrome blue and green
        // .fill('hsv', Rune.random(200,240),Rune.random(100), Rune.random(100));
        //analogous 
        // .fill('hsv', 0+ i*colorVariationSteps,Rune.random(70,100), Rune.random(70,100));
        //primary
        .fill('hsv', i * 90 + movecolor, 100, 100);
}

var a = 20;
var rect1 = r.rect(0, 200, 100, 300).fill('hsv', 100, 100, 100);
var rect2 = r.rect(100, 200, 100, 300).fill('hsv', 280, 100, 100);
r.on('mousemove', function(mouse) {
    var hue = (mouse.x / r.width) * 360;
    rect1.fill('hsv', hue, 100, 100);
    rect2.fill('hsv', hue + 180, 100, 100);
});

for (var i = 0; i < 100; i++) {
    var myrandomColor = new Rune.Color('hsv', Rune.random(10), Rune.random(70, 100), Rune.random(70, 100));
    myrandomColor.rotate(90);
    r.circle(Rune.random(900), Rune.random(900), 30)
        .fill(getRandomColor())
        .stroke(false);
}



function getRandomColor(){
    return new Rune.Color('hsv', Rune.random(20), Rune.random(70, 100), Rune.random(70, 100)).rotate(60);
}




r.play();
// r.draw();
