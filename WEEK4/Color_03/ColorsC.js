//to do - eminate from the center
//fix color shift to actually work
//have lines connect to each other randomly but maybe also to the ceter?
//add a tiny bit of noise to the circles so they look organic --maybe can't do that bc they are circle objects

var drawRectDiffWidthGrid = false;
var drawDiamonds = true;
var drawCircles = false;
var drawCircletension = false;
var CircCenterCounter = 0;
var circleMatrix = [];
var pastspacing = 0;
var dot1, dot2, dot3, dot4, dot5, dot6, dot7, ran1, ran2, ran3, ran4, parent;
var dots = [];
var rotateMore = 90;
var r = new Rune({
    container: "#canvas",
    width: 1600,
    height: 2200,
    debug: true
});
var lineCol = 190;

var Huebase1 = 486;
var Huebase2 = 320;
console.log("Huebase1: "+Huebase1+" || "+"Huebase2: "+Huebase2);
var colors = [
    new Rune.Color('hsv', Huebase2, 35, 89), //pink 0
    new Rune.Color('hsv', Huebase1-235, 77, 82), //red  1
    new Rune.Color('hsv', Huebase2-134, 55, 85), //blue  2 
    new Rune.Color('hsv', Huebase1, 51, 67), // purple  3
    new Rune.Color('hsv', Huebase1-203, 59, 94), //yellow  4
    new Rune.Color('hsv', Huebase2-153, 21, 97), //lght blue  5
    new Rune.Color('hsv', 0, 0, 23) //black   6
];

var colorsNew = [];

var circleGroup = r.group(200, 200)
var stepsAroundCircle = 15;
var colorDegree = 360 / stepsAroundCircle;
var colorVariationSteps = 10;
var circleradius = 10;

//make new color palette
for (i in colors) {
    ///////////////////
    //////////////////
    ///////////////////
    var colorShift = 150;
    ///////////////////
    ///////190////////////
    //////////////////
    
    // var i = new Rune.Color('hsv', colors[i].values.hsv[0] + colorShift, colors[i].values.hsv[1], colors[i].values.hsv[2]); //pink 0
    var i = colors[i].copy().rotate(colorShift);
    // } else {
    // var i = new Rune.Color('hsv', 360 - colors[i].values.hsv[0] + colorShift, colors[i].values.hsv[1], colors[i].values.hsv[2]); //pink 0

    // }
    colorsNew.push(i)
}

colors = colorsNew
    ///////////GROUPS//////////////////////////////////
var Allcircles = r.group(0, 900)
var mainchartgroup1 = r.group(200, 500, Allcircles);
var mainchartgroup2 = r.group(200, 200, Allcircles);
var mainchartgroup3 = r.group(500, 200, Allcircles);
var mainchartgroup4 = r.group(500, 500, Allcircles);
var mainchartgroup5 = r.group(800, 500, Allcircles);
var rectBandGroup2 = r.group(0, -200)
var rectBandGroup = r.group(0, 0)
var TrianglesGroup = r.group(170, 170)

if (drawCircles == true) {
    Circle1(mainchartgroup1);
    Circle1(mainchartgroup2);
    Circle1(mainchartgroup3);
    Circle1(mainchartgroup4);
    Circle1(mainchartgroup5);
    r.text("1: Split complements", 0, -120, mainchartgroup1).textAlign("center")
    r.text("2: just saturation", 0, -120, mainchartgroup2).textAlign("center")
    r.text("3: H and S", 0, -120, mainchartgroup3).textAlign("center")
    r.text("4: Analogous  complements", 0, -120, mainchartgroup4).textAlign("center")
    r.text("5:Lines across? ", 0, -120, mainchartgroup5).textAlign("center")
}


////////////////GROUPS ENDS/////////////////////
//     //////////////////////////////////////////////////
if (drawCircletension) { rowsOfCircles(); }
// console.log(circleMatrix)

function rowsOfCircles() {

    for (var j = 0; j < 20; j++) {

        for (var i = 0; i < 8; i++) {
            
            var circleParent1 = r.group(0, 0);
            circleMatrix.push(circleParent1)
            var numCircles = circles(0, 0, 100, circleParent1);

            var spacing = 180;// + pastspacing;

            var Oddpush;

            if (j % 2 == 0) {
                Oddpush = spacing / 2;
            } else {
                Oddpush = 0;
            }

            circleParent1.move(i * spacing + Oddpush - (numCircles * 30), j * spacing);
            CircCenterCounter = CircCenterCounter + 1;
            console.log("CircCenterCounter " + CircCenterCounter)
                //  if (CircCenterCounter>2){

            //  r.line(circleMatrix[CircCenterCounter-2].vars.x,circleMatrix[CircCenterCounter-2].vars.y,circleMatrix[CircCenterCounter-1].vars.x,circleMatrix[CircCenterCounter-1].vars.y).stroke(0)
            // } 
        }


    }

    for (i in circleMatrix) {


        var rand1 = Math.floor(Rune.random(2, circleMatrix.length));
        var rand2 = Math.floor(Rune.random(2, circleMatrix.length));
        if (circleMatrix[CircCenterCounter - rand1].vars.x > 100 && circleMatrix[CircCenterCounter - rand1].vars.x < 500) {
            r.line(circleMatrix[CircCenterCounter - rand1].vars.x, circleMatrix[CircCenterCounter - rand1].vars.y, circleMatrix[CircCenterCounter - rand2].vars.x, circleMatrix[CircCenterCounter - rand2].vars.y).stroke(colors[i % colors.length])
        }
    }
}

if (drawDiamonds == true) {
    for (var k = 0; k < r.height / 200; k++) {
        for (var j = 0; j < 4; j++) {
            //make each square
            for (var i = 0; i < 3; i++) {

                TrianglesInSquare(j * 285, k * 300, 45 + rotateMore, TrianglesGroup);
                rotateMore = rotateMore + 90
            }

        }
    }
}

if (drawRectDiffWidthGrid) {
    for (var j = 0; j < r.height / 20; j++) {
        for (var i = 0; i < 24; i++) {
            var squareWidthoptions = [50, 50, 50, 100, 50, 50, 50, 400, 50, 50];
            var chooseOne = Rune.random(squareWidthoptions.length);
            RowofSquares(50 * i, 50 * j, Rune.random(3*(squareWidthoptions.length)), 50, rectBandGroup);

        }

    }
}

// for (var j = 0; j < 4; j++) {
//     for (var i = 0; i < 24; i++) {
//         var squareWidthoptions = [50, 50, 50, 100, 50, 50, 50, 400, 50, 50];
//         var chooseOne = Math.round(Rune.random(9));
//         RowofSquares(squareWidthoptions[chooseOne] * i, 600 + 50 * j, squareWidthoptions[chooseOne], 50,rectBandGroup2);
// }
// }





////////////ALL CIRCLE DRAWINGS IN HERE///////////////////
function Circle1(parent, num) {
    var buckchartCircRad = 8;
    var mainCircleRad = 100;


    if (parent == mainchartgroup1 || parent == mainchartgroup2 || parent == mainchartgroup4 || parent == mainchartgroup5) {

        for (i in colors) {
            dots[i] = r.circle(Math.cos(Rune.radians(colors[i].values.hsv[0])) * mainCircleRad, Math.sin(Rune.radians(colors[i].values.hsv[0])) * mainCircleRad, buckchartCircRad, parent).fill(colors[i]).stroke(false);
        }

        //show them accurately going towards center of circle
    } else if (parent == mainchartgroup3) {
        for (i in colors) {
            dots[i] = r.circle(Math.cos(Rune.radians(colors[i].values.hsv[0])) * (mainCircleRad * (colors[i].values.hsv[1] / 100)), Math.sin(Rune.radians(colors[i].values.hsv[0])) * (mainCircleRad * (colors[i].values.hsv[1] / 100)), buckchartCircRad, parent).fill(colors[i]).stroke(false);
        }


        for (i in colors) {
            r.circle(0, 0, (mainCircleRad * (colors[i].values.hsv[1] / 100)), mainchartgroup3).stroke(lineCol).fill(false);
        }




    }
    var shape = r.polygon(0, 0, parent).fill(false).stroke(lineCol);
    var spacing = 360 / 40;
    for (var i = 0; i < 40; i++) {
        var x = Math.cos(Rune.radians(i * spacing)) * (mainCircleRad + 4);
        var y = Math.sin(Rune.radians(i * spacing)) * (mainCircleRad + 4);
        shape.lineTo(x, y);
    }



    if (parent == mainchartgroup1) {

        r.line(dots[1].vars.x, dots[1].vars.y, dots[3].vars.x, dots[3].vars.y, mainchartgroup1).stroke(lineCol);
        r.line(dots[4].vars.x, dots[4].vars.y, dots[1].vars.x, dots[1].vars.y, mainchartgroup1).stroke(lineCol);
        r.line(dots[4].vars.x, dots[4].vars.y, dots[3].vars.x, dots[3].vars.y, mainchartgroup1).stroke(lineCol);

        r.line(dots[5].vars.x, dots[5].vars.y, dots[2].vars.x, dots[2].vars.y, mainchartgroup1).stroke(lineCol);
        r.line(dots[2].vars.x, dots[2].vars.y, dots[0].vars.x, dots[0].vars.y, mainchartgroup1).stroke(lineCol);
        r.line(dots[5].vars.x, dots[5].vars.y, dots[0].vars.x, dots[0].vars.y, mainchartgroup1).stroke(lineCol);


    }

    if (parent == mainchartgroup4) {

        r.line(dots[2].vars.x, dots[2].vars.y, dots[3].vars.x, dots[3].vars.y, mainchartgroup4).stroke(lineCol);

        r.line(dots[2].vars.x, dots[2].vars.y, dots[5].vars.x, dots[5].vars.y, mainchartgroup4).stroke(lineCol);

        r.line(dots[2].vars.x, dots[2].vars.y, 0, 0, mainchartgroup4).stroke(lineCol);
        r.line(dots[1].vars.x, dots[1].vars.y, dots[4].vars.x, dots[4].vars.y, mainchartgroup4).stroke(lineCol);

        r.line(dots[1].vars.x, dots[1].vars.y, dots[0].vars.x, dots[0].vars.y, mainchartgroup4).stroke(lineCol);

        r.line(dots[1].vars.x, dots[1].vars.y, 0, 0, mainchartgroup4).stroke(lineCol);

    }


    if (parent == mainchartgroup5) {
        r.line(dots[2].vars.x, dots[2].vars.y, dots[1].vars.x, dots[1].vars.y, mainchartgroup5).stroke(lineCol);

        r.line(dots[3].vars.x, dots[3].vars.y, dots[0].vars.x, dots[0].vars.y, mainchartgroup5).stroke(lineCol);

        r.line(dots[5].vars.x, dots[5].vars.y, dots[4].vars.x, dots[4].vars.y, mainchartgroup5).stroke(lineCol);



    }

}











r.draw();

function RowofSquares(startX, startY, squareWidth, squareHeight, parentTwo) {
    ran1 = Math.round(Rune.random(0, 6));

    parent = r.group(startX, startY, parentTwo)
    r.rect(0, 0, squareWidth, squareHeight, parent).fill(colors[ran1]).stroke(false);
}


function TrianglesInSquare(startX, startY, rotate, parentTwo) {
    parent = r.group(startX, startY, parentTwo).rotate(rotate, startX, startY);
    var squareWidth = 100
    ran1 = Math.round(Rune.random(0, 6));
    ran2 = Math.round(Rune.random(0, 6));
    ran3 = Math.round(Rune.random(0, 6));
    ran4 = Math.round(Rune.random(0, 6));

    r.rect(0, 0, squareWidth, squareWidth, parent).fill(colors[ran1]).stroke(false);
    r.triangle(0, 0, squareWidth, 0, 0, squareWidth, parent).fill(colors[ran2]).stroke(false);
    r.triangle(0, 0, squareWidth / 2, 0, 0, squareWidth / 2, parent).fill(colors[ran3]).stroke(false);
    r.triangle(squareWidth, squareWidth, squareWidth, squareWidth / 2, squareWidth / 2, squareWidth, parent).fill(colors[ran4]).stroke(false);

}

function circles(x, y, radius, parent) {
    r.circle(x, y, radius, parent).fill(false).stroke(false);

    randomCircnum = Math.round(Rune.random(1, 4));
    for (var i = 0; i < randomCircnum; i++) {
        if (randomCircnum == 1) {
            radius = radius / 3;
        } else if (randomCircnum == 2) {
            radius = radius / 2.5;
        } else if (randomCircnum == 3) {
            radius = radius / 1.5;
        } else {
            radius = radius
        }
        if (radius < 40) {
            radius = 50
        }
        r.circle(x, y, radius - (i * 24), parent).fill(colors[Math.round(Rune.random(6))]).stroke(false);
    }
    return randomCircnum;
}
