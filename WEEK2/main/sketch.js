var r = new Rune({
    container: "#canvas",
    width: 600,
    height: 800
});

var gridBoxW = 12;
var gridBoxH = 16;
var gridSpaceW = r.width / gridBoxW;
var gridSpaceH = r.height / gridBoxH;
var black = 0;
var white = 255;
var faceCenterX = r.width / 2;
var stars = [];
var decrement = .8;
var sunRad = 260;
var thickestStroke = 6;
var faceWidth = 190,
    faceHeight = 80;

for (var g = 0; g < 20; g++) {
    for (var h = 0; h < 20; h++) {
        stars[g] = new star(Rune.random(70, 130) * g, Rune.random(70,130) * h, 10);
    }
}


for (var x = 0; x < gridBoxW + 1; x++) {
    for (var y = 0; y < gridBoxH + 1; y++) {
        var circ = r.rect(0, 0, 2,2)
            .stroke(false);

        // move it a random amount
        circ.move(x * gridSpaceW, y * gridSpaceH).rotate(Rune.random(65), x * gridSpaceW, y * gridSpaceH).fill(255);



    }
}

var sphereGroup = r.group(r.width / 2, r.height / 2)
for (var i = 0; i < 18; i++) {
    var firstDash = Rune.random(100);
    var secondDash = Rune.random(100);
    var b = r.ellipse(0, 0, sunRad + (i * 12), sunRad + (i * 12), sphereGroup).fill(false).stroke(255).strokeWidth(4 + decrement).strokeCap("round").strokeDash(firstDash + "," + secondDash + ",10,10");
    decrement = decrement - .4
    console.log(b.stagepos())
}


///MAIN DUDE BEGIN/////////

//backpack
var backpackwidth = faceWidth * 1.2;
var backpackHeight = faceHeight * 3
    r.rect(r.width / 2 - backpackwidth/2, r.height / 2 - (faceHeight+60), backpackwidth, backpackHeight, eyes).strokeCap("round").strokeJoin("round").fill(black).stroke(white).strokeWidth(thickestStroke);

    r.ellipse(r.width / 2, r.height / 2, faceWidth * 1.2, faceWidth * 1.2).fill(black).stroke(white).strokeWidth(thickestStroke);


// eyes(faceCenterX + 40, 400);
eyes(faceCenterX - 40, 400);



r.draw();


function star(moveX, moveY, length) {
    var stargroup = r.group(moveX, moveY).rotate(Rune.random(90),moveX,moveY)
    r.rect(0, 0, .5, length, stargroup).fill(white).stroke(false).strokeCap("round");
    r.rect(0, 0, .5, length, stargroup).fill(white).stroke(false).rotate(270).strokeCap("round");
    r.rect(0, 0, .5, length, stargroup).fill(white).stroke(false).rotate(90).strokeCap("round");
    r.rect(0, 0, .5, length, stargroup).fill(white).stroke(false).rotate(180).strokeCap("round");

}

function eyes(moveX, moveY) {

    var radWide = 60;
    var radMid = 35;
    
    r.rect(r.width / 2 - (faceWidth*.9 / 2), r.height / 2 - (faceHeight / 2), faceWidth*.9, faceHeight).strokeCap("round").strokeJoin("round").fill(white).stroke(black).strokeWidth(4);

var eyes = r.group(0,0)
    
    //ears
    var ear =r.rect(r.width / 2 - (faceWidth - radWide), r.height / 2 - (faceHeight - 40), 20,70).strokeCap("round").strokeJoin("round").fill(black).stroke(white).strokeWidth(4);

    r.rect(r.width / 2 + (faceWidth - radWide-15), r.height / 2 - (faceHeight - 40), 20, 70).strokeCap("round").strokeJoin("round").fill(black).stroke(white).strokeWidth(4);
//eyes
    r.ellipse(0, 0, radWide, radWide, eyes).fill(white).stroke(black).move(moveX, moveY).strokeWidth(4);
    r.ellipse(0, 0, radMid, radMid, eyes).fill(white).stroke(black).move(moveX, moveY).strokeWidth(4);
    r.ellipse(0, -10, 5, 5, eyes).fill(black).stroke(black).move(moveX, moveY-5);
     r.ellipse(0, 0, radWide, radWide, eyes).fill(white).stroke(black).move(moveX+80, moveY).strokeWidth(4);
    r.ellipse(0, 0, radMid, radMid, eyes).fill(white).stroke(black).move(moveX+80, moveY).strokeWidth(4);
    r.ellipse(0, -10, 5, 5, eyes).fill(black).stroke(black).move(moveX+80, moveY-5);

// eyes.scale(.5)


}


