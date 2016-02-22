var rw = $(window).width();
var rh = $(window).height();
var acrossAmt;
var drawRectDiffWidthGrid = false;
var drawDiamonds = false;
var drawCircles = false;
var drawCircletension = true;
var CircCenterCounter = 0;
var circleMatrix = [];
var pastspacing = 0;
var dot1, dot2, dot3, dot4, dot5, dot6, dot7, ran1, ran2, ran3, ran4, parent;
var dots = [];
var rotateMore = 90;
var r = new Rune({
    container: "#canvas",
    width: rw,
    height: rh,
    debug: true
});

var lineCol = 190;
var Huebase1 = 705;
var Huebase2 = 705;
console.log("Huebase1: " + Huebase1 + " || " + "Huebase2: " + Huebase2);
var colors = [
    new Rune.Color('hsv', 343, 35, 89), //pink 0
    new Rune.Color('hsv', 305, 77, 82), //red  1
    new Rune.Color('hsv', 309, 55, 85), //blue  2 
    new Rune.Color('hsv', 310, 51, 67), // purple  3
    new Rune.Color('hsv', 347, 59, 94), //yellow  4
    new Rune.Color('hsv', 340, 21, 90), //lght blue  5
    new Rune.Color('hsv', 300, 50, 23) //black   6
];
var colorsNew = [];
var circleGroup = r.group(200, 200)
var stepsAroundCircle = 15;
var colorDegree = 360 / stepsAroundCircle;
var colorVariationSteps = 10;
var circleradius = 10;

//make new color palette
for (i in colors) {
    var colorShift = 20;
    var i = colors[i].copy().rotate(colorShift);

    colorsNew.push(i)
}
colors = colorsNew;
///////////GROUPS//////////////////////////////////
var Allcircles = r.group(0, 900, wholething)
var mainchartgroup1 = r.group(200, 500, Allcircles);
var mainchartgroup2 = r.group(200, 200, Allcircles);
var mainchartgroup3 = r.group(500, 200, Allcircles);
var mainchartgroup4 = r.group(500, 500, Allcircles);
var mainchartgroup5 = r.group(800, 500, Allcircles);
var rectBandGroup2 = r.group(0, -200, wholething)
var rectBandGroup = r.group(0, 0, wholething)
var TrianglesGroup = r.group(170, 170, wholething)
var linesparent = r.group(r.width / 2, r.height / 2, wholething)
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
var centerCircleTension = r.group(0, 0, wholething).scale(.5)
var wholething = r.group(0, 0).scale(3)

////////////////GROUPS ENDS/////////////////////
if (drawCircletension) { rowsOfCircles2(centerCircleTension); }
LinesAroundACircle(linesparent);
Sparkles();
CenterLineBall(linesparent);


function rowsOfCircles2(parent) {
    var movingUp = true;
    acrossAmt = 2;
    //down
    for (var j = 0; j < (r.height / 60); j++) {
        //across

        for (var i = 0; i < 12; i++) {

            var circleParent1 = r.group(0, 0, parent);
            circleMatrix.push(circleParent1)
            var numCircles = circles(0, 0, 100, circleParent1);

            var spacing = 300; // + pastspacing;
            var spacingVert = 320; // + pastspacing;

            var Oddpush;

            if (j % 2 == 0) {
                Oddpush = spacing / 2;
                extraOddspace = 0;
            } else {
                Oddpush = 0;
                extraOddspace = spacing;
            }

            circleParent1.move(i * spacing + Oddpush - (30), j * spacingVert, parent).scale(.3);
            // var duplicate = circleParent1.copy().rotate(30).move(600,0);
            CircCenterCounter = CircCenterCounter + 1;
            console.log("CircCenterCounter " + CircCenterCounter)
                //  if (CircCenterCounter>2){

            //  r.line(circleMatrix[CircCenterCounter-2].vars.x,circleMatrix[CircCenterCounter-2].vars.y,circleMatrix[CircCenterCounter-1].vars.x,circleMatrix[CircCenterCounter-1].vars.y).stroke(0)
            // } 
        }
        console.log(acrossAmt)
        if (acrossAmt > 5) {
            movingUp = false
        }
        if (movingUp == true) {

            acrossAmt = acrossAmt + 2;
        }
        if (movingUp == false) {
            acrossAmt = acrossAmt - 2;
        }


    }

    for (i in circleMatrix) {


        var rand1 = Math.floor(Rune.random(2, circleMatrix.length));
        var rand2 = Math.floor(Rune.random(2, circleMatrix.length));
        if (circleMatrix[CircCenterCounter - rand1].vars.x > 90 && circleMatrix[CircCenterCounter - rand1].vars.x < 600) {
            // r.line(circleMatrix[CircCenterCounter - rand1].vars.x, circleMatrix[CircCenterCounter - rand1].vars.y, circleMatrix[CircCenterCounter - rand2].vars.x, circleMatrix[CircCenterCounter - rand2].vars.y).stroke(colors[i % colors.length]).strokeWidth(3);
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
            RowofSquares(50 * i, 50 * j, Rune.random(3 * (squareWidthoptions.length)), 50, rectBandGroup);

        }

    }
}


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

function LinesAroundACircle(parent) {
    var decrement = .8;
    var smallestCircle = 90;
    var radiusIncrement = 40;

    for (var i = 0; i < 8; i++) {
        var firstDash = Rune.random(200);
        var thirdDash = Rune.random(200);
        var secondDash = Rune.random(200);
        r.circle(0, 0, smallestCircle + (i * radiusIncrement), parent).stroke(colors[Math.round(Rune.random(colors.length))]).fill(false).strokeWidth(Rune.random(3, 16)).strokeCap("round").strokeDash(firstDash + "," + secondDash + "," + thirdDash + ",100")
        decrement = decrement - .3
    }

    // r.ellipse(250, 250, 10, 10, parent).fill(255).rotate(30)
    // r.ellipse(190, 190, 24, 24, parent).fill(255).rotate(45)

    // var parent = r.group(0,0).rotate(45)

}

function Sparkles() {
    var radius = 00;
    var radiusOuter = 1900;
    var numRects = 195;
    var angle = 360 / numRects;
    var group = r.group(r.width / 2, r.height / 2);

    for (var i = 0; i < numRects; i++) {
        var firstDash = Rune.random(50, 200);
        var thirdDash = Rune.random(100, 200);
        var secondDash = Rune.random(200);
        var x = Math.cos(Rune.radians(i * angle)) * radius;
        var y = Math.sin(Rune.radians(i * angle)) * radius;
        var x2 = Math.cos(Rune.radians(i * angle)) * radiusOuter;
        var y2 = Math.sin(Rune.radians(i * angle)) * radiusOuter;
        r.line(x, y, x2, y2, group).rotate(i * angle, 0, 0, true)
            .stroke(colors[Math.round(Rune.random(colors.length))]).fill(false).strokeWidth(Rune.random(3, 16)).strokeCap("round").strokeDash("10," + Rune.random(400, 700) + firstDash + "," + secondDash + "," + thirdDash + ",100");
        // r.rect(x, y, 50, 10, group)
        // .rotate(i * angle, 0, 0, true);
    }
}


function CenterLineBall(parent) {
    var circumfrance = 200;
    var starting = (circumfrance / 2) * -1;

    var Allp = [];

    for (var j = 0; j < 12; j++) {
        // Allp[j] = r.polygon(Rune.random(-starting,starting*2), Rune.random(-starting,starting*2), parent)
        Allp[j] = r.polygon(0, 0, parent)

        .stroke(colors[Math.round(Rune.random(colors.length))]).fill(false)
            .strokeWidth(Rune.random(0, 3))
            .strokeCap("round")
            .strokeJoin("round");

        for (var i = 0; i < 12; i++) {
            Allp[j].lineTo(Rune.random(-circumfrance, circumfrance), Rune.random(-circumfrance, circumfrance))
                // Allp[j].lineTo(Math.random() * circumfrance/2, Math.random() * circumfrance/2)


        }


    }
    for (var j = 0; j < 12; j++) {
        // Allp[j] = r.polygon(Rune.random(-starting,starting*2), Rune.random(-starting,starting*2), parent)
        Allp[j] = r.polygon(0, 0, parent)

        .stroke(colors[Math.round(Rune.random(colors.length))]).fill(false)
            .strokeWidth(Rune.random(0, 3))
            .strokeCap("round")
            .strokeJoin("round");

        for (var k = 0; k < 12; k++) {
            Allp[j].lineTo(Rune.random(-circumfrance, circumfrance), Rune.random(-circumfrance, circumfrance)).scale(2)
                // Allp[j].lineTo(Math.random() * circumfrance/2, Math.random() * circumfrance/2)


        }
    }


}

function rowsOfCircles(parent) {
    var movingUp = true;
    acrossAmt = 2;
    //down
    for (var j = 0; j < (r.height / 60); j++) {
        //across

        for (var i = 0; i < acrossAmt; i++) {

            var circleParent1 = r.group(0, 0, parent);
            circleMatrix.push(circleParent1)
            var numCircles = circles(0, 0, 100, circleParent1);

            var spacing = 100; // + pastspacing;
            var spacingVert = 120; // + pastspacing;

            var Oddpush;

            if (j % 2 == 0) {
                Oddpush = spacing / 2;
                extraOddspace = 0;
            } else {
                Oddpush = 0;
                extraOddspace = spacing;
            }

            circleParent1.move(i * spacing + Oddpush - (numCircles * 30) + (r.width / 2 - (extraOddspace + (acrossAmt / 2) * spacing / 2)), j * spacingVert, parent).scale(.5);
            // var duplicate = circleParent1.copy().rotate(30).move(600,0);
            CircCenterCounter = CircCenterCounter + 1;
            console.log("CircCenterCounter " + CircCenterCounter)
                //  if (CircCenterCounter>2){

            //  r.line(circleMatrix[CircCenterCounter-2].vars.x,circleMatrix[CircCenterCounter-2].vars.y,circleMatrix[CircCenterCounter-1].vars.x,circleMatrix[CircCenterCounter-1].vars.y).stroke(0)
            // } 
        }
        console.log(acrossAmt)
        if (acrossAmt > 5) {
            movingUp = false
        }
        if (movingUp == true) {

            acrossAmt = acrossAmt + 2;
        }
        if (movingUp == false) {
            acrossAmt = acrossAmt - 2;
        }


    }

    for (i in circleMatrix) {


        var rand1 = Math.floor(Rune.random(2, circleMatrix.length));
        var rand2 = Math.floor(Rune.random(2, circleMatrix.length));
        if (circleMatrix[CircCenterCounter - rand1].vars.x > 90 && circleMatrix[CircCenterCounter - rand1].vars.x < 600) {
            // r.line(circleMatrix[CircCenterCounter - rand1].vars.x, circleMatrix[CircCenterCounter - rand1].vars.y, circleMatrix[CircCenterCounter - rand2].vars.x, circleMatrix[CircCenterCounter - rand2].vars.y).stroke(colors[i % colors.length]).strokeWidth(3);
        }
    }
}
