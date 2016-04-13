//ignore this
var dot1, dot2, dot3, dot4, dot5, dot6, dot7, ran1, ran2, ran3, ran4, parent;
var dots = [];
var rotateMore = 90;
var r = new Rune({
    container: "#canvas",
    width: 1200,
    height: 2200,
    debug: true
});
var lineCol = 190;

var circleGroup = r.group(200, 200)
var stepsAroundCircle = 15;
var colorDegree = 360 / stepsAroundCircle;
var colorVariationSteps = 10;
var circleradius = 10;
var buckArray = [];


var Buckcol1 = { //pink
    'h': "343",
    's': "35",
    'v': "89"
}

var Buckcol2 = { //red
    'h': "15",
    's': "77",
    'v': "82"
}

var Buckcol3 = { //purple
    'h': "209",
    's': "55",
    'v': "85"
}
var Buckcol4 = { //drk blue
    'h': "250",
    's': "51",
    'v': "67"
}
var Buckcol5 = { //yellow
    'h': "47",
    's': "59",
    'v': "94"
}

var Buckcol6 = { //lightblue
    'h': "190",
    's': "21",
    'v': "97"
}

var Buckcol7 = { //black
    'h': "0",
    's': "0",
    'v': "23"
}

buckArray.push(Buckcol1)
buckArray.push(Buckcol2)
buckArray.push(Buckcol3)
buckArray.push(Buckcol4)
buckArray.push(Buckcol5)
buckArray.push(Buckcol6)
buckArray.push(Buckcol7)

/////100 off?

// for (i in buckArray) {
//     var push100 = 0;

//     colors[i].values.hsl[0] = colors[i].values.hsl[0] + push100;
//    console.log( console.log(colors[i].values.hsl[0]))
// // //     // Buckcol1.h = Buckcol1.h + push100;
// // //     // Buckcol2.h = Buckcol2.h + push100;
// // //     // Buckcol3.h = Buckcol3.h + push100;
// // //     // Buckcol4.h = Buckcol4.h + push100;
// // //     // Buckcol5.h = Buckcol5.h + push100;
// // //     // Buckcol6.h = Buckcol6.h + push100;
// }



///////////GROUPS//////////////////////////////////
var Allcircles = r.group(0, 600)
var mainchartgroup1 = r.group(200, 500, Allcircles);
var mainchartgroup2 = r.group(200, 200, Allcircles);
var mainchartgroup3 = r.group(500, 200, Allcircles);
var mainchartgroup4 = r.group(500, 500, Allcircles);
var mainchartgroup5 = r.group(800, 500, Allcircles);
var rectgroup1 = r.group(200, 700)
Circle1(mainchartgroup1);
Circle1(mainchartgroup2);
Circle1(mainchartgroup3);
Circle1(mainchartgroup4);
Circle1(mainchartgroup5);




r.text("1: triadic", 0, -120, mainchartgroup1).textAlign("center")
r.text("2: just saturation", 0, -120, mainchartgroup2).textAlign("center")
r.text("3: H and S", 0, -120, mainchartgroup3).textAlign("center")
r.text("4", 0, -120, mainchartgroup4).textAlign("center")
r.text("5", 0, -120, mainchartgroup5).textAlign("center")
    // r.text("6", 0,-200,mainchartgroup6)
    //////////////GROUPS ENDS/////////////////////
    //////////////////////////////////////////////////
for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 4; i++) {

        TrianglesInSquare(200 + (j * 285), 400, 45 + rotateMore);
        rotateMore = rotateMore + 90
    }

}

for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 24; i++) {
        var squareWidthoptions = [50, 50, 50, 100, 50, 50, 50, 400, 50, 50];
        var chooseOne = Rune.random(squareWidthoptions.length);
        // console.log(chooseOne)

        RowofSquares(50 * i, 50 * j, Rune.random(squareWidthoptions.length), 50);

    }

}

for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 24; i++) {
        var squareWidthoptions = [50, 50, 50, 100, 50, 50, 50, 400, 50, 50];
        var chooseOne = Math.round(Rune.random(9));
        // console.log(squareWidthoptions[chooseOne])


        RowofSquares(squareWidthoptions[chooseOne] * i, 600 + 50 * j, squareWidthoptions[chooseOne], 50);

    }

}





////////////ALL CIRCLE DRAWINGS IN HERE///////////////////
function Circle1(parent, num) {
    var buckchartCircRad = 8;
    var mainCircleRad = 100;


    if (parent == mainchartgroup1 || parent == mainchartgroup2 || parent == mainchartgroup4 || parent == mainchartgroup5) {

        // for (var i = 0; i < 6; i++) {
        //     dots[i] = r.circle(Math.cos(Rune.radians(Buckcol[i].h)) * mainCircleRad, Math.sin(Rune.radians(Buckcol[i].h)) * mainCircleRad, buckchartCircRad, parent).fill('hsv', Buckcol[i].h, Buckcol[i].s, Buckcol[i].v).stroke(false);
        // }

        dot1 = r.circle(Math.cos(Rune.radians(Buckcol1.h)) * mainCircleRad, Math.sin(Rune.radians(Buckcol1.h)) * mainCircleRad, buckchartCircRad, parent).fill('hsv', Buckcol1.h, Buckcol1.s, Buckcol1.v).stroke(false);
        dot2 = r.circle(Math.cos(Rune.radians(Buckcol2.h)) * mainCircleRad, Math.sin(Rune.radians(Buckcol2.h)) * mainCircleRad, buckchartCircRad, parent).fill('hsv', Buckcol2.h, Buckcol2.s, Buckcol2.v).stroke(false);
        dot3 = r.circle(Math.cos(Rune.radians(Buckcol3.h)) * mainCircleRad, Math.sin(Rune.radians(Buckcol3.h)) * mainCircleRad, buckchartCircRad, parent).fill('hsv', Buckcol3.h, Buckcol3.s, Buckcol3.v).stroke(false);
        dot4 = r.circle(Math.cos(Rune.radians(Buckcol4.h)) * mainCircleRad, Math.sin(Rune.radians(Buckcol4.h)) * mainCircleRad, buckchartCircRad, parent).fill('hsv', Buckcol4.h, Buckcol4.s, Buckcol4.v).stroke(false);
        dot5 = r.circle(Math.cos(Rune.radians(Buckcol5.h)) * mainCircleRad, Math.sin(Rune.radians(Buckcol5.h)) * mainCircleRad, buckchartCircRad, parent).fill('hsv', Buckcol5.h, Buckcol5.s, Buckcol5.v).stroke(false);
        dot6 = r.circle(Math.cos(Rune.radians(Buckcol6.h)) * mainCircleRad, Math.sin(Rune.radians(Buckcol6.h)) * mainCircleRad, buckchartCircRad, parent).fill('hsv', Buckcol6.h, Buckcol6.s, Buckcol6.v).stroke(false);

    } else if (parent == mainchartgroup3) { //show them accurately going towards center of circle

        dot1 = r.circle(Math.cos(Rune.radians(Buckcol1.h)) * (mainCircleRad * (Buckcol1.s / 100)), Math.sin(Rune.radians(Buckcol1.h)) * (mainCircleRad * (Buckcol1.s / 100)), buckchartCircRad, parent).fill('hsv', Buckcol1.h, Buckcol1.s, Buckcol1.v).stroke(false);
        dot2 = r.circle(Math.cos(Rune.radians(Buckcol2.h)) * (mainCircleRad * (Buckcol2.s / 100)), Math.sin(Rune.radians(Buckcol2.h)) * (mainCircleRad * (Buckcol2.s / 100)), buckchartCircRad, parent).fill('hsv', Buckcol2.h, Buckcol2.s, Buckcol2.v).stroke(false);
        dot3 = r.circle(Math.cos(Rune.radians(Buckcol3.h)) * (mainCircleRad * (Buckcol3.s / 100)), Math.sin(Rune.radians(Buckcol3.h)) * (mainCircleRad * (Buckcol3.s / 100)), buckchartCircRad, parent).fill('hsv', Buckcol3.h, Buckcol3.s, Buckcol3.v).stroke(false);
        dot4 = r.circle(Math.cos(Rune.radians(Buckcol4.h)) * (mainCircleRad * (Buckcol4.s / 100)), Math.sin(Rune.radians(Buckcol4.h)) * (mainCircleRad * (Buckcol4.s / 100)), buckchartCircRad, parent).fill('hsv', Buckcol4.h, Buckcol4.s, Buckcol4.v).stroke(false);
        dot5 = r.circle(Math.cos(Rune.radians(Buckcol5.h)) * (mainCircleRad * (Buckcol5.s / 100)), Math.sin(Rune.radians(Buckcol5.h)) * (mainCircleRad * (Buckcol5.s / 100)), buckchartCircRad, parent).fill('hsv', Buckcol5.h, Buckcol5.s, Buckcol5.v).stroke(false);
        dot6 = r.circle(Math.cos(Rune.radians(Buckcol6.h)) * (mainCircleRad * (Buckcol6.s / 100)), Math.sin(Rune.radians(Buckcol6.h)) * (mainCircleRad * (Buckcol6.s / 100)), buckchartCircRad, parent).fill('hsv', Buckcol6.h, Buckcol6.s, Buckcol6.v).stroke(false);
        dot7 = r.circle(Math.cos(Rune.radians(Buckcol7.h)) * (mainCircleRad * (Buckcol7.s / 100)), Math.sin(Rune.radians(Buckcol7.h)) * (mainCircleRad * (Buckcol7.s / 100)), buckchartCircRad, parent).fill('hsv', Buckcol7.h, Buckcol7.s, Buckcol7.v).stroke(false);

        // r.line(dot1.vars.x, dot1.vars.y, 0, 0, mainchartgroup3).stroke(lineCol);
        r.circle(0, 0, (mainCircleRad * (Buckcol1.s / 100)), mainchartgroup3).stroke(lineCol).fill(false);
        r.circle(0, 0, (mainCircleRad * (Buckcol2.s / 100)), mainchartgroup3).stroke(lineCol).fill(false);
        r.circle(0, 0, (mainCircleRad * (Buckcol3.s / 100)), mainchartgroup3).stroke(lineCol).fill(false);
        r.circle(0, 0, (mainCircleRad * (Buckcol4.s / 100)), mainchartgroup3).stroke(lineCol).fill(false);
        r.circle(0, 0, (mainCircleRad * (Buckcol5.s / 100)), mainchartgroup3).stroke(lineCol).fill(false);
        r.circle(0, 0, (mainCircleRad * (Buckcol6.s / 100)), mainchartgroup3).stroke(lineCol).fill(false);





        // r.line(dot1.vars.x, dot1.vars.y, dot6.vars.x, dot6.vars.y, mainchartgroup1).stroke(lineCol);
        // r.line(dot2.vars.x, dot2.vars.y, dot6.vars.x, dot6.vars.y, mainchartgroup1).stroke(lineCol);

    }
    var shape = r.polygon(0, 0, parent).fill(false).stroke(lineCol);
    var spacing = 360 / 40;
    for (var i = 0; i < 40; i++) {
        var x = Math.cos(Rune.radians(i * spacing)) * (mainCircleRad + 4);
        var y = Math.sin(Rune.radians(i * spacing)) * (mainCircleRad + 4);
        shape.lineTo(x, y);
    }



    if (parent == mainchartgroup1) {
        r.line(dot1.vars.x, dot1.vars.y, dot2.vars.x, dot2.vars.y, mainchartgroup1).stroke(lineCol);
        r.line(dot1.vars.x, dot1.vars.y, dot6.vars.x, dot6.vars.y, mainchartgroup1).stroke(lineCol);
        r.line(dot2.vars.x, dot2.vars.y, dot6.vars.x, dot6.vars.y, mainchartgroup1).stroke(lineCol);

        r.line(dot5.vars.x, dot5.vars.y, dot3.vars.x, dot3.vars.y, mainchartgroup1).stroke(lineCol);
        r.line(dot5.vars.x, dot5.vars.y, dot4.vars.x, dot4.vars.y, mainchartgroup1).stroke(lineCol);
        r.line(dot3.vars.x, dot3.vars.y, dot4.vars.x, dot4.vars.y, mainchartgroup1).stroke(lineCol);


    }

    if (parent == mainchartgroup4) {

        r.line(dot1.vars.x, dot1.vars.y, dot3.vars.x, dot3.vars.y, mainchartgroup4).stroke(lineCol);
        r.line(dot4.vars.x, dot4.vars.y, dot2.vars.x, dot2.vars.y, mainchartgroup4).stroke(lineCol);

        r.line(dot5.vars.x, dot5.vars.y, dot6.vars.x, dot6.vars.y, mainchartgroup4).stroke(lineCol);


    }


    if (parent == mainchartgroup5) {
        r.line(dot4.vars.x, dot4.vars.y, dot6.vars.x, dot6.vars.y, mainchartgroup5).stroke(lineCol);

        r.line(dot4.vars.x, dot4.vars.y, 0, 0, mainchartgroup5).stroke(lineCol);
        r.line(dot3.vars.x, dot3.vars.y, dot4.vars.x, dot4.vars.y, mainchartgroup5).stroke(lineCol);

        r.line(dot5.vars.x, dot5.vars.y, dot2.vars.x, dot2.vars.y, mainchartgroup5).stroke(lineCol);

        r.line(dot2.vars.x, dot2.vars.y, 0, 0, mainchartgroup5).stroke(lineCol);
        r.line(dot1.vars.x, dot1.vars.y, dot2.vars.x, dot2.vars.y, mainchartgroup5).stroke(lineCol);


    }

}











r.draw();

function RowofSquares(startX, startY, squareWidth, squareHeight) {
    ran1 = Math.round(Rune.random(0, 6));

    parent = r.group(startX, startY)
    r.rect(0, 0, squareWidth, squareHeight, parent).fill('hsv', buckArray[ran1].h, buckArray[ran1].s, buckArray[ran1].v).stroke(false);
}


function TrianglesInSquare(startX, startY, rotate) {
    parent = r.group(startX, startY).rotate(rotate, 0, 0, true);
    var squareWidth = 100
    ran1 = Math.round(Rune.random(0, 6));
    ran2 = Math.round(Rune.random(0, 6));
    ran3 = Math.round(Rune.random(0, 6));
    ran4 = Math.round(Rune.random(0, 6));

    r.rect(0, 0, squareWidth, squareWidth, parent).fill('hsv', buckArray[ran1].h, buckArray[ran1].s, buckArray[ran1].v).stroke(false);
    r.triangle(0, 0, squareWidth, 0, 0, squareWidth, parent).fill('hsv', buckArray[ran2].h, buckArray[ran2].s, buckArray[ran2].v).stroke(false);
    r.triangle(0, 0, squareWidth / 2, 0, 0, squareWidth / 2, parent).fill('hsv', buckArray[ran3].h, buckArray[ran3].s, buckArray[ran3].v).stroke(false);
    r.triangle(squareWidth, squareWidth, squareWidth, squareWidth / 2, squareWidth / 2, squareWidth, parent).fill('hsv', buckArray[ran4].h, buckArray[ran4].s, buckArray[ran4].v).stroke(false);

}
