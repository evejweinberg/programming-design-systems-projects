var r = new Rune({
    container: "#canvas",
    width: 600,
    height: 800
});
var randomOn = true;
var gridBoxW = 12;
var gridBoxH = 16;
var gridSpaceW = r.width / gridBoxW;
var gridSpaceH = r.height / gridBoxH;
var black = 0;
var white = 255;
var faceCenterX = r.width / 2;
var stars = [];
var decrement = .8;
var decrementSun = .05
var sunRad = 280;
var sunRad2 = 05;
var sunStrokeWdith = 7;
var thickestStroke = 6;
var faceWidth = 190,
    faceHeight = 80;
var radWide = 60;
var radMid = 35;
var scaleUp = 1;
if (randomOn == true) {
    var pathParent = r.group(Rune.random(r.width), Rune.random(400));
  
} else {
    var pathParent = r.group(r.width / 2, 50).scale(2);

    
}
var planet = r.group(0, 0).rotate(-65).move(Rune.random(400), Rune.random(400))




// Path();
//stars twinkling
for (var g = 0; g < 20; g++) {
    for (var h = 0; h < 20; h++) {
        stars[g] = new star(Rune.random(70, 130) * g, Rune.random(70, 130) * h, 6);
    }
}

//background Grid
for (var x = 0; x < gridBoxW + 1; x++) {
    for (var y = 0; y < gridBoxH + 1; y++) {
        var circ = r.rect(0, 0, 1, 1)
            .stroke(false);

        // move it a random amount
        circ.move(x * gridSpaceW, y * gridSpaceH).rotate(Rune.random(65), x * gridSpaceW, y * gridSpaceH).fill(255);
    }
}




//ORBIT RINGS
for (var k = 0; k < 9; k++) {
    if (k < 2 || k > 3) {
        var Dashwidth = .5;
    } else {
        Dashwidth = 2
    }
    r.circle(0, 0, sunRad - 100 + (k * 60)).stroke(255).scale(scaleUp).strokeWidth(Dashwidth).strokeDash("10").fill(false).addParent(pathParent)

}

//planets orbiting
var rotateRand1 = Rune.random(95)
var rotateRand2 = Rune.random(95)
var planetPadding = 10;
var planetPaddingEarth = 30;
var start = 130;
var spread = 42;
for (var p = 0; p < 9; p++) {
    if (p < 2 || p > 3) {
        r.circle(start + (p * spread), start + (p * spread), Rune.random(9, 33), planet).fill(black).stroke(white).scale(scaleUp).rotate(Rune.random(30, 55)).addParent(pathParent)
    } else if (p == 2) {
        r.circle(start + (p * spread), start + (p * spread), 30, planet).fill(white).stroke(white).rotate(rotateRand2).scale(scaleUp).addParent(pathParent)

        r.rect(start + (p * spread) - planetPaddingEarth, start + (p * spread) + planetPaddingEarth, 6, 100).fill(white).rotate(rotateRand2).addParent(pathParent);
        r.triangle(start + (p * spread) - planetPaddingEarth, start + (p * spread) + planetPaddingEarth, start + (p * spread) - planetPaddingEarth - 10, start + (p * spread) + planetPaddingEarth + 15, start + (p * spread) - planetPaddingEarth + 10, start + (p * spread) + planetPaddingEarth + 15, planet)
            .rotate(rotateRand2)
            .scale(scaleUp)
            .fill(white)
            .stroke(white)
            .strokeWidth(4)
            .addParent(pathParent);
    } else {
        r.circle(start + (p * spread), start + (p * spread), 12, planet).fill(white).stroke(white).rotate(rotateRand2).addParent(pathParent)
        r.rect(start + (p * spread) - planetPadding * 1.5, start + (p * spread) + planetPadding * 1.5, 6, 40).fill(white).rotate(rotateRand2).addParent(pathParent);

        r.triangle(start + (p * spread) - planetPadding, start + (p * spread) + planetPadding, start + (p * spread) - planetPadding - 10, start + (p * spread) + planetPadding + 15, start + (p * spread) - planetPadding + 10, start + (p * spread) + planetPadding + 15, planet)
            .rotate(rotateRand2)
            .fill(white)
            .stroke(white)
            .strokeWidth(4)
            .scale(scaleUp)
            .addParent(pathParent);

    }
}







///MAIN DUDE BEGIN/////////

//backpack
if (randomOn == true) {
    var astronaut = r.group(0, 390).rotate(Rune.random(-45, 45));
} else {
    var astronaut = r.group(0, 390).rotate(0);
}

// var trail1 = r.group(0,0).rotate(-20).move(100,100);
// //spaceshitDust trails
// for (var i = 0; i < 30; i++) {
//     var circdist = 2
//     r.circle(circdist * i * (i * .13), 0, circdist * 6.6,trail1)
//     .fill(white).stroke(black)
//     .strokeWidth(1);
// }
// r.triangle(0,0,60,0,30,40,trail1).fill(white).move(90,0).strokeWidth(10).strokeCap("round");


var backpackwidth = faceWidth * 1.2;
var backpackHeight = faceHeight * 3;
r.rect(r.width / 2 - backpackwidth / 2, r.height / 2 - (faceHeight + 60), backpackwidth, backpackHeight, eyes).strokeCap("round").strokeJoin("round").fill(black)
    .stroke(white)
    .strokeWidth(thickestStroke)
    .strokeDash("100,10,200,20")
    .addParent(astronaut);



// r.ellipse(r.width / 2, r.height / 2+faceWidth*1.4, faceWidth * 1.7, faceWidth * 2.4).fill(black).stroke(white).strokeWidth(thickestStroke);

r.ellipse(r.width / 2, r.height / 2, faceWidth * 1.2, faceWidth * 1.2)
    .fill(black).stroke(white)
    .strokeWidth(thickestStroke)
    .strokeDash("100,10,200,20")
    .addParent(astronaut);
dotRow(r.width / 2 - (backpackwidth / 2) + 10, r.height / 2 - (faceHeight + 60) + 10);

// eyes(faceCenterX + 40, 400);
eyes(faceCenterX - 40, 400);
//headset
var headSet = {
    "intersection": [r.width / 2 - 90, r.height / 2 + faceHeight - 30],
    "starting": [r.width / 2 - (backpackwidth / 2.35), r.height / 2 + (faceHeight - 80)],
    "end": [r.width / 2, r.height / 2 + faceHeight]
};

r.ellipse(headSet.end[0], headSet.end[1], 20, 20).addParent(astronaut).fill(white)
r.ellipse(headSet.starting[0], headSet.starting[1], 20, 20).addParent(astronaut).fill(white)
r.line(headSet.starting[0], headSet.starting[1], headSet.intersection[0], headSet.intersection[1]).addParent(astronaut).stroke(white).strokeWidth(4)
r.line(headSet.intersection[0], headSet.intersection[1], headSet.end[0], headSet.end[1]).addParent(astronaut).stroke(white).strokeWidth(4)




///MAIN DUDE ENDS/////////



r.ellipse(0, 0, sunRad, sunRad).addParent(pathParent).fill(white)
    //SUN Strokes
var dist = 9;
for (var i = 0; i < 36; i++) {
    sunStrokeWdith = Rune.random(2);
    if (decrementSun < 0) {
        decrementSun = 0
    }
    // console.log(sunStrokeWdith)
    var firstDash = Rune.random(100);
    var secondDash = Rune.random(60);
    r.ellipse(0, 0, sunRad2 + (i * (dist)), sunRad2 + (i * (dist))).stroke(black).fill(false).strokeWidth(sunStrokeWdith).strokeCap("round").strokeDash(firstDash + "," + secondDash + ",10,10").addParent(pathParent)
        // sunStrokeWdith = sunStrokeWdith+ decrementSun;
    dist = dist - decrementSun;
}


// console.log(earth)
// var ShuttlePath = {
//     "firstStop" : [earth.vars.x,earth.y],
//     "secondStop" : [],
//     "thirdStop" : [],
//     "fourthStop" : []
// }
// r.line(ShuttlePath.firstStop[0],ShuttlePath.firstStop[1],100,100)






r.draw();


function star(moveX, moveY, length) {
    var stargroup = r.group(moveX, moveY).rotate(Rune.random(90), moveX, moveY)
    r.rect(0, 0, .5, length, stargroup).fill(white).stroke(false).strokeCap("round");
    r.rect(0, 0, .5, length, stargroup).fill(white).stroke(false).rotate(270).strokeCap("round");
    r.rect(0, 0, .5, length, stargroup).fill(white).stroke(false).rotate(90).strokeCap("round");
    r.rect(0, 0, .5, length, stargroup).fill(white).stroke(false).rotate(180).strokeCap("round");

}

function eyes(moveX, moveY) {



    r.rect(r.width / 2 - (faceWidth * .9 / 2), r.height / 2 - (faceHeight / 2), faceWidth * .9, faceHeight).strokeCap("round").strokeJoin("round").fill(white).stroke(black).strokeWidth(4).addParent(astronaut);

    var eyes = r.group(0, 0)

    //ears
    var ear = r.rect(r.width / 2 - (faceWidth - radWide), r.height / 2 - (faceHeight - 40), 20, 70).strokeCap("round").strokeJoin("round").fill(black).stroke(white).strokeWidth(4).addParent(astronaut);

    r.rect(r.width / 2 + (faceWidth - radWide - 15), r.height / 2 - (faceHeight - 40), 20, 70).strokeCap("round").strokeJoin("round").fill(black).stroke(white).strokeWidth(4).addParent(astronaut);
    //eyes
    r.ellipse(0, 0, radWide, radWide, eyes).fill(white).stroke(black).move(moveX, moveY).strokeWidth(4).addParent(astronaut);
    r.ellipse(0, 0, radMid, radMid, eyes).fill(white).stroke(black).move(moveX, moveY).strokeWidth(4).addParent(astronaut);
    r.ellipse(0, -10, 5, 5, eyes).fill(black).stroke(black).move(moveX, moveY - 5).addParent(astronaut);
    r.ellipse(0, 0, radWide, radWide, eyes).fill(white).stroke(black).move(moveX + 80, moveY).strokeWidth(4).addParent(astronaut);
    r.ellipse(0, 0, radMid, radMid, eyes).fill(white).stroke(black).move(moveX + 80, moveY).strokeWidth(4).addParent(astronaut);
    r.ellipse(0, -10, 5, 5, eyes).fill(black).stroke(black).move(moveX + 80, moveY - 5).addParent(astronaut);

    // eyes.scale(.5)


}

function dotRow(moveX, moveY) {
    for (var i = 0; i < 6; i++) {
        r.ellipse(0, 0, radWide / 6 - i, radWide / 6 - i).fill(white).move(moveX + i * 12, moveY).addParent(astronaut);
    }
}


function Path() {
    // pathParent.addParent()
    var decrement = .8;

    for (var g = 2; g < 28; g++) {
        // for (var h = 0; h < 20; h++) {
        var lineLength = Math.abs(260 * Math.sin(.1 * g) + (50 - g))
        r.rect(-180 + g * 12, 20 - (lineLength / 2), 4, lineLength, planet).fill(255).rotate(40).addParent(pathParent)
            // }
    }
}
