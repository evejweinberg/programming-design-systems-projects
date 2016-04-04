//
//                                                                          ___   ___  ___                      ___   ___                      
//   //  //   ) )  // | |     /|    / / //    ) ) //   ) ) /|    //| |       / /        / /    // | |  /__  ___/ / /    //   ) ) /|    / /   
// //// //___/ /  //__| |    //|   / / //    / / //   / / //|   // | |      / /        / /    //__| |    / /    / /    //   / / //|   / /    
/// // / ___ (   / ___  |   // |  / / //    / / //   / / // |  //  | |     / /        / /    / ___  |   / /    / /    //   / / // |  / /     
// // //   | |  //    | |  //  | / / //    / / //   / / //  | //   | |    / /        / /    //    | |  / /    / /    //   / / //  | / /      
// / //    | | //     | | //   |/ / //____/ / ((___/ / //   |//    | | __/ /___     / /___ //     | | / /  __/ /___ ((___/ / //   |/ /         




var colorsBlue = [
    new Rune.Color(84, 206, 249),
    new Rune.Color(0, 157, 222),
    new Rune.Color(0, 109, 180),
    new Rune.Color(0, 68, 77)
]

var colorsRed = [
    new Rune.Color(255, 20, 25),
    new Rune.Color(251, 131, 89),
    new Rune.Color(251, 77, 44),
    new Rune.Color(255, 48, 70),
    new Rune.Color(203, 36, 0)
]

var colorsGreen = [
    new Rune.Color(35, 162, 133),
    new Rune.Color(135, 141, 35),
    new Rune.Color(23, 100, 44)
]

var colorsSkin = [
    new Rune.Color(234, 209, 164),
    new Rune.Color(181, 149, 98),
    new Rune.Color(254, 215, 226),
    new Rune.Color(214, 169, 144)
]

var colors = [
    new Rune.Color(25, 20, 130), new Rune.Color(30, 125, 100), new Rune.Color(70, 60, 105)
]

var randRed = colorsRed[Math.floor(Rune.random(colorsRed.length))]
var randSkin = colorsSkin[Math.floor(Rune.random(colorsSkin.length))]
var strokeWidths = [3, 6, 10, 15, 20, 30]
var randStrokeWidth = strokeWidths[Math.floor(Rune.random(strokeWidths.length))]

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
if (Rune.random(1) > .5) {
    var whatever = true
} else {
    var whatever = false
}
// console.log()
var all, moveFace, MouthArea, EyesGroup,grid, eyeHeight;
var faceLonger = Rune.random(1, 2)
var faceWidth = 400;
var faceRadius = faceWidth / 2;
var faceHeight = faceRadius * faceLonger;
var faceCenter = new Rune.Vector(faceWidth / 2, faceHeight / 2)

var faceOneThird = faceWidth / 3
var faceTwoThird = faceWidth * .66
var faceCenterTwoThirds = new Rune.Vector(faceWidth * .66, faceHeight * .66)
var faceMiddle = faceWidth / 2
var lipHeight = faceHeight * .8
var lipWidth = Rune.random(20, faceRadius)
var MouthPlacement = new Rune.Vector(faceCenter.x, faceCenter.y + (Rune.random(faceHeight * .5, faceHeight * .8)))

var noseTop = faceCenter.y - (Rune.random(100, 40));
var noseBottom = faceHeight * .7;


var EyeDist = Rune.random(50, faceWidth * .3)
var pupilSize = 5
var eyeGlareSize = 5
var irisSize = 17
var EyeLeftCenter = faceCenter.x - EyeDist;
var EyeRightCenter = faceCenter.x + EyeDist;

var shaky = 50;

var hairHeight = Rune.random(20, 75);
var frontHairColIndex = Math.floor(Rune.random(colorsRed.length))
var skinColIndex = Math.floor(Rune.random(colorsSkin.length))



var faceContour = [];
var noseCoordinates = []











for (var i = 0; i < 10; i++) {
for (var j = 0; j < 10; j++) {
    var all, moveFace, MouthArea, EyesGroup,grid, eyeHeight;
var faceLonger = Rune.random(1, 2)
var faceWidth = 400;
var faceRadius = faceWidth / 2;
var faceHeight = faceRadius * faceLonger;
var faceCenter = new Rune.Vector(faceWidth / 2, faceHeight / 2)

var faceOneThird = faceWidth / 3
var faceTwoThird = faceWidth * .66
var faceCenterTwoThirds = new Rune.Vector(faceWidth * .66, faceHeight * .66)
var faceMiddle = faceWidth / 2
var lipHeight = faceHeight * .8
var lipWidth = Rune.random(20, faceRadius)
var MouthPlacement = new Rune.Vector(faceCenter.x, faceCenter.y + (Rune.random(faceHeight * .5, faceHeight * .8)))

var noseTop = faceCenter.y - (Rune.random(100, 40));
var noseBottom = faceHeight * .7;


var EyeDist = Rune.random(50, faceWidth * .3)
var pupilSize = 5
var eyeGlareSize = 5
var irisSize = 17
var EyeLeftCenter = faceCenter.x - EyeDist;
var EyeRightCenter = faceCenter.x + EyeDist;

var shaky = 50;

var hairHeight = Rune.random(20, 75);
var frontHairColIndex = Math.floor(Rune.random(colorsRed.length))
var skinColIndex = Math.floor(Rune.random(colorsSkin.length))



var faceContour = [];
var noseCoordinates = []

    OneFace(i*760,j*1200);
}
}
///////////////////////////////////////////////////////////////////////
// 8888b.  88""Yb    db    Yb        dP     888888    db     dP""b8 888888 
//  8I  Yb 88__dP   dPYb    Yb  db  dP      88__     dPYb   dP   `" 88__   
//  8I  dY 88"Yb   dP__Yb    YbdPYbdP       88""    dP__Yb  Yb      88""   
// 8888Y"  88  Yb dP""""Yb    YP  YP        88     dP""""Yb  YboodP 888888 
// ///////////////////////////////////////////////////////////////////////
function OneFace(x,y) {

    //////PARENTS/////////////
    /////////PARENTS/////////////
    
    all = r.group(x, y)

    moveFace = r.group(0, 0, all)
    MouthArea = r.group(MouthPlacement.x - lipWidth, MouthPlacement.y, all)
    EyesGroup = r.group(Rune.random(0, 40), 0, all)
    grid = r.grid({
    x: faceCenter.x - faceRadius + moveFace.vars.x,
    y: faceCenter.y - (faceHeight / 2) + (moveFace.vars.y / 2),
    width: faceWidth,
    moduleWidth: faceWidth / 8,
    moduleHeight: faceHeight / 8,
    gutter: 0,
    columns: 10,
    rows: 12

});
    eyeHeight = grid.modules[34].vars.y;

grid.addParent(all)
        // all.scale(2.2)
    // all.move(0, 600)
        // all.scale(2,1)
        //////PARENTS/////////////
        /////////PARENTS/////////////
    HairBack(faceCenter.x, faceCenter.y - (faceHeight * 1.7), moveFace);
    Face(moveFace);
    UnderEyePatch(faceCenter.x + (EyeDist * .6), eyeHeight + irisSize, moveFace)

    EyeBags(moveFace, faceCenter.x - irisSize, -faceWidth * .2, -faceWidth * .4, 100);
    EyeBags(moveFace, faceCenter.x + irisSize, faceWidth * .2, faceWidth * .4, 100);

    Nose(faceCenter.x, 0, EyesGroup);
    drawEye(EyesGroup, EyeLeftCenter);
    drawEye(EyesGroup, EyeRightCenter);
    eyeBrow(EyesGroup);
    UnderEye(EyesGroup, true);
    UnderEye(EyesGroup, false);

    chinShadow(0, 0, MouthArea)
    mouthSide(0, -lipHeight / 2, MouthArea);
    Lips(0, 0, MouthArea);
    var moveHairUp = Map(faceLonger, 100, 200, 300, 400)
    HairFront(faceCenter.x, faceCenter.y - faceHeight, moveFace, true);
    HairFront(faceCenter.x, faceCenter.y - faceHeight, moveFace, false);
}


// console.log(moveHairUp)
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//                                                ___   ___                             
//     //   / / //   / / /|    / / //   ) ) /__  ___/ / /    //   ) ) /|    / / //   ) ) 
//    //___    //   / / //|   / / //          / /    / /    //   / / //|   / / ((        
//   / ___    //   / / // |  / / //          / /    / /    //   / / // |  / /    \\      
//  //       //   / / //  | / / //          / /    / /    //   / / //  | / /       ) )   
// //       ((___/ / //   |/ / ((____/ /   / /  __/ /___ ((___/ / //   |/ / ((___ / /    
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
///
///
function Nose(x, y, parent) {
    var noseLength = Rune.random(faceHeight * .5, faceHeight)
        // var shiftNoseCenter = faceCenter.x * (Rune.random(left, right))
        // console.log('shiftNose'+ shiftNoseCenter)

    var noseStraight = r.line(x, y, x, noseLength, parent)
        .stroke(colorsRed[Math.floor(Rune.random(colorsRed.length))])
        .strokeWidth(strokeWidths[Math.floor(Rune.random(strokeWidths.length))] * 2)
        // var noseStraight = r.line(faceCenter.x, noseTop, shiftNoseCenter, noseBottom, parent)
        //     .stroke(colorsRed[Math.floor(Rune.random(colorsRed.length))])
        //     .strokeWidth(strokeWidths[Math.floor(Rune.random(strokeWidths.length))])

    // var nose2nd = r.line(noseStraight.vars.x2, noseStraight.vars.y2, noseStraight.vars.x2 - (100), noseStraight.vars.y2, parent)
    // .stroke(colorsRed[Math.floor(Rune.random(colorsRed.length))]).strokeWidth(strokeWidths[Math.floor(Rune.random(strokeWidths.length))]);
    var noseCircle = r.circle(x, y + noseLength + irisSize, irisSize, parent).stroke(false).fill(colorsRed[Math.floor(Rune.random(colorsRed.length))])

    // var nostril = r.path(x,y,parent).fill(05).stroke(false)
    // .curveTo(-100,-100,100,100,100,100)
    // .curveTo(-100,-100,100,100,0,0)


}

function EyeBags(parent, startX, pullX1, curveEndX, curveEndY) {
    var noseCurve = r.path(startX, noseTop, parent)
        .stroke(colorsGreen[Math.floor(Rune.random(colorsGreen.length))])
        .strokeWidth(strokeWidths[Math.floor(Rune.random(strokeWidths.length))])
        // .curveTo(10,100,-faceWidth*.2, 200,-faceWidth*.4, 100)
        .curveTo(10, 100, pullX1, 200, curveEndX, curveEndY)
        // .fill(colorsSkin[Math.floor(Rune.random(colorsSkin.length))])
        .strokeCap("round")
        .fill(false)


}




function UnderEyePatch(x, y, parent) {


    // .autoFillHatchLines(20, parent);


    if (whatever) {
        var patch = r.polygon(x, y)
            // .fill(255)
            // .stroke(false)
            .lineTo(100, 10)
            .lineTo(60, 80)
            .lineTo(-10, 40)
            .lineTo(0, 0)
        // console.log("patch")
        patch.autoFillHatchLines(20, all).fill(false).stroke(false);

        // patch.autoFillHatchLines(20, parent).fill(false).stroke(false);

    } else {
        var patch = r.polygon(x, y, parent)
            .fill(255)
            .stroke(false)
            .lineTo(100, 10)
            .lineTo(60, 80)
            .lineTo(-10, 40)
            .lineTo(0, 0)
    }
}








function drawEye(parent, centerX) {
    //put eyes on the grid
    var eyeColor = r.circle(centerX, eyeHeight, irisSize, parent).stroke(false).fill(colorsGreen[0])
    var Pupil = r.circle(centerX, eyeHeight, pupilSize, parent).stroke(false).fill(60)
    var leftGlare = r.circle(centerX + (irisSize / 2), eyeHeight - (irisSize * .3), eyeGlareSize, parent).stroke(false).fill(220)


}


function eyeBrow(parent) {
    var browWidth = Rune.random(90, 150)
    var browHeight = Rune.random(10, 90)
    var pullbrowup = Rune.random(0, -70)
    var browLeft = r.path(EyeLeftCenter - (browWidth / 2), eyeHeight - browHeight, parent).strokeWidth(25).fill(false).stroke(colorsRed[Math.floor(Rune.random(colorsRed.length))])
        .curveTo(100, -70, 120, -150, browWidth, 0);
    //point to 200,0
    //
    //
    var browRight = r.path(EyeRightCenter + (browWidth / 2), eyeHeight - browHeight, parent).strokeWidth(25).fill(false).stroke(colorsRed[Math.floor(Rune.random(colorsRed.length))])
        .curveTo(50, pullbrowup, -browWidth, 0);
    //point to 200,0
}


function UnderEye(parent, upper) {
    var browWidth = Rune.random(40, 110)
    if (upper == true) {


        var browHeight = -20
        var pullbrowup = Rune.random(0, 40)
    } else {

        var browHeight = 20
        var pullbrowup = Rune.random(-40, 0)
    }
    var browLeft = r.path(EyeLeftCenter - (browWidth / 2), eyeHeight - browHeight, parent).strokeWidth(7).fill(false).stroke(colorsRed[Math.floor(Rune.random(colorsRed.length))])
        .curveTo(browWidth / 2, pullbrowup, browWidth, 0);
    //point to 200,0

    var browRight = r.path(EyeRightCenter + (browWidth / 2), eyeHeight - browHeight, parent).strokeWidth(7).fill(false).stroke(colorsRed[Math.floor(Rune.random(colorsRed.length))])
        .curveTo(browWidth / 2, pullbrowup, -browWidth, 0);
    //point to 200,0
}








//                 .aadddbbbbaa,       ,adddbbbbaaa.
//              .ad"           "\bbmdd/"           "ba.
//           .,d"                 `"'                 "b,.
//        .,ad"                                         "ba,.
//     .,amd"  __..,,,aaaaaadddddddMbbbbbbbaaaaaaa,,,..__  "bma,.
// ,am8888ca8"""""''                                ``""""8ac88888ma,
// """""]8a.                                               .a8["""""
//       "8ba.                                           .ad8"'
//         `"8bma,.                                .,amd88"'
//             `"""88bmm==Normand===Veilleux==mmd88"""'
//                     `""""""""""""""""""""""'


function mouthSide(x, y, parent) {
    // faceOneThird
    var browWidth = Rune.random(40, 110)
    var browHeight = -20
    var pullbrowup = Rune.random(0, 70)
    var mouseSideL = r.path(x, y, parent).strokeWidth(7).fill(false).stroke(colorsBlue[Math.floor(Rune.random(colorsBlue.length))])
        .curveTo((Rune.random(-200, -100)), Rune.random(0, 100), 0, Rune.random(lipHeight, lipHeight));

    var mouseSideR = r.path(x + (lipWidth * 2), y, parent).strokeWidth(7).fill(false).stroke(colorsBlue[Math.floor(Rune.random(colorsBlue.length))])
        .curveTo((Rune.random(200, 100)), Rune.random(0, 100), 0, Rune.random(lipHeight, lipHeight));


}

function chinShadow(x, y, parent) {
    r.path(x, y, parent)
        .fill(50, .3)
        .stroke(false)
        .lineTo(lipWidth * 1.8, 0)
        .lineTo(60, 80)
        .lineTo(10, 40)
}


function Lips(x, y, parent) {
    var clefLength = Rune.random(60, 120)
    var lipHeight = Rune.random(60, 220)


    r.path(x, y, parent)
        .stroke(false)
        .fill(colorsBlue[Math.floor(Rune.random(colorsBlue.length))])
        .curveTo(10, 0, lipWidth / 2, -lipHeight * .7, lipWidth, 0)

    r.path(x + lipWidth, y, parent)
        .stroke(false)
        .fill(colorsBlue[Math.floor(Rune.random(colorsBlue.length))])
        .curveTo(10, 0, lipWidth / 2, -lipHeight * .7, lipWidth, 0)

    //bottom  
    r.path(x, y, parent)
        .stroke(false)
        .fill(colorsGreen[Math.floor(Rune.random(colorsGreen.length))])
        .curveTo(lipWidth, lipHeight * .6, lipWidth * 2, 0)

}




// Neck(moveFace)
function Neck(parent) {



    r.rect(faceCenter.x - 10, faceCenter.y + faceHeight, 20, 60, parent).strokeWidth(sb).stroke(colorsRed[Math.floor(Rune.random(colorsRed.length))]).fill(colorsSkin[skinColIndex])
}




function HairBack(x, y, parent) {

    var hairWidthblock = Rune.random(faceWidth / 1.3, faceWidth)
    var hairHeightblock = Rune.random(faceHeight * 2.9, faceHeight * 3.9)
        // r.circle(x,y,20,parent)
    var backhair = r.path(x, y, parent)
        .curveTo(hairWidthblock, 0, hairWidthblock, 0, hairWidthblock, hairHeightblock)
        .curveTo(hairWidthblock, hairHeightblock * .6, hairWidthblock, hairHeightblock * .6, hairWidthblock, hairHeightblock)
        .curveTo(hairWidthblock * .2, hairHeightblock, hairWidthblock, hairHeightblock * .6, 0, hairHeightblock * .8)
        .curveTo(-hairWidthblock * .9, hairHeightblock * .9, 0, hairHeightblock * .9, -hairWidthblock * .8, hairHeightblock)
        .curveTo(-hairWidthblock, hairHeightblock, -hairWidthblock, hairHeightblock * .8, -hairWidthblock, hairHeightblock * .6)
        .curveTo(-hairWidthblock, 0, -hairWidthblock, 0, 0, 0)

    .fill(colorsRed[Math.floor(Rune.random(colorsRed.length))])
        .stroke(false)

    //stroke
    r.path(x, y, parent)
        .curveTo(hairWidthblock, 0, hairWidthblock, 0, hairWidthblock, hairHeightblock)
        .curveTo(hairWidthblock, hairHeightblock * .6, hairWidthblock, hairHeightblock * .6, hairWidthblock, hairHeightblock)
        .fill(false)
        .strokeWidth(20)
        .stroke(colorsGreen[Math.floor(Rune.random(colorsGreen.length))])




}








function HairFront(x, y, parent, reflect) {
    if (reflect) {
        var hairWidthblock = Rune.random(-90, -150)
        var hairWidthPull = hairWidthblock
        var hairHeightblock = Rune.random(80, 160)
        var pushX = Map(hairWidthblock, -90, -150, 10, -170)
    } else {
        // var hairToneIndex = Math.floor(Rune.random(3))
        // var pushX = 0
        hairWidthblock = Rune.random(90, 150)
        hairWidthPull = hairWidthblock
        hairHeightblock = Rune.random(80, 200)
        pushX = Map(hairWidthblock, 90, 150, -10, 200)
    }

    // console.log(hairWidthblock+"||"+pushX)

    r.path(x + pushX, y, parent)
        .curveTo(0, hairHeightblock, 0, hairHeightblock, -hairWidthblock, hairHeightblock)
        .curveTo(-hairWidthPull * 2, hairHeightblock, -hairWidthPull * 2, hairHeightblock, -hairWidthblock * 2, hairHeightblock * 2)
        .curveTo(-hairWidthPull * 2, hairHeightblock * 2.5, -hairWidthPull * 2, hairHeightblock * 4, -hairWidthblock * 2.5, hairHeightblock * 4)
        .curveTo(-hairWidthPull * 3, hairHeightblock * 4, -hairWidthPull * 3, hairHeightblock * 3, -hairWidthblock * 3, hairHeightblock * 2)
        .curveTo(-hairWidthPull * 3, hairHeightblock * 2, -hairWidthblock * 3, hairHeightblock)
        .curveTo(-hairWidthPull * 3, -hairHeightblock, -hairWidthPull * 2, -hairHeightblock, -hairWidthblock, -hairHeightblock)
        .curveTo(0, -hairHeightblock, 0, -hairHeightblock, 0, 0)
        .fill(colorsRed[frontHairColIndex])
        .stroke(false)
    if (reflect == false) {
        r.path(x + pushX, y, parent)
            .curveTo(0, hairHeightblock, 0, hairHeightblock, -hairWidthblock, hairHeightblock)
            .curveTo(-hairWidthPull * 2, hairHeightblock, -hairWidthPull * 2, 100, -hairWidthblock * 2, hairHeightblock * 2)
            .fill(false)
            .stroke(colorsGreen[Math.floor(Rune.random(colorsGreen.length))])
            .strokeWidth(20)
    }

}




///////////////////////////////////////////////////////////////////////////////////
//make an organic circle with perlin noise ///////
/////////////////////////////////////////////////////////////////////////////////////

function Face(parent) {
    var sb = strokeWidths[Math.floor(Rune.random(strokeWidths.length))]
    var neckWidth = Rune.random(70, 200)
    r.rect(faceCenter.x - (neckWidth / 2), faceCenter.y + faceHeight, neckWidth, 240, parent).stroke(false).fill(colorsSkin[skinColIndex])
    r.polygon(faceCenter.x - (neckWidth / 2), faceCenter.y + faceHeight, parent)
        .lineTo((Rune.random(40, neckWidth)), 0)
        .lineTo(0, 240)
        .lineTo(0, 0)
        .stroke(false)
        .fill(120, .3)
    r.line(faceCenter.x - (neckWidth / 2), faceCenter.y + faceHeight, faceCenter.x - (neckWidth / 2), faceCenter.y + faceHeight + 240, parent).strokeWidth(sb + 15).stroke(colorsBlue[Math.floor(Rune.random(colorsBlue.length))])

    var circle = r.polygon(faceCenter.x, faceCenter.y, parent).strokeWidth(sb).stroke(colorsRed[Math.floor(Rune.random(colorsRed.length))]).fill(colorsSkin[skinColIndex])
    var circleLines = r.polygon(faceCenter.x, faceCenter.y, parent).strokeWidth(3)
    var chin = r.path(faceCenter.x, faceCenter.y, parent).fill(false).strokeWidth(sb + 15).stroke(colorsBlue[Math.floor(Rune.random(colorsBlue.length))])
    var faceShadow = r.path(faceCenter.x, faceCenter.y, parent).fill(false).fill(50, .2).stroke(false)

    var numpts = 120;
    var pontDeg = 360 / numpts;
    var noiseB = new Rune.Noise();
    var noiseStepB = 0;




    var increment = 1
    for (var i = 0; i < numpts; i++) {
        //btwn 200 and 240
        var radius = faceRadius + noiseB.get(noiseStepB) * shaky;

        // if (i > 10) {
        //     increment = 10

        // }

        var x = Math.cos(Rune.radians(i * pontDeg)) * radius;
        var y = Math.sin(Rune.radians((i + increment) * pontDeg)) * radius * faceLonger;


        circle.lineTo(x, y)

        // if (i < numpts / 2) {

        // }
        if (whatever) {
            if ((i > numpts * .3 && i < numpts * .5)) {
                circleLines.lineTo(x + 15, y)

            }
            circleLines.autoFillHatchLines(20, parent).fill(false).stroke(false);

        }

        if (i == 0) {
            chin.moveTo(x, y)
        }
        if (i < numpts / 2) {

            chin.lineTo(x, y)
        }
        //   if ((i > numpts *.1 && i < numpts*.2)) {
        //     faceShadow.lineTo(x, y)
        // }

        if ((i > numpts * .2 && i < numpts * .7)) {


            faceShadow.lineTo(x, y)
        }


        if (i > numpts / 2) {
            noiseStepB += .05
        } else {
            noiseStepB -= .05
        }
        faceContour.push(new Rune.Vector(x, y))
            // console.log(circleDots[i] + "||" + i)
    }

}


function Map(n, start1, stop1, start2, stop2) {
    // return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
    return Math.abs(start1 - stop2) * (n / (Math.abs(start2 - stop2)))
};








r.draw();
