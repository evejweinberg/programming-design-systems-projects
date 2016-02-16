//ignore this
var dot1, dot2, dot3, dot4, dot5, dot6;
var r = new Rune({
    container: "#canvas",
    width: 1200,
    height: 1200,
    debug: true
});
var lineCol = 140;

var circleGroup = r.group(200, 200)
var stepsAroundCircle = 15;
var colorDegree = 360 / stepsAroundCircle;
var colorVariationSteps = 10;
var circleradius = 10;

// for (var j=0;j<4;j++)
// {
// stepsAroundCircle=stepsAroundCircle+stepsAroundCircle*j;
// colorDegree = 360 / stepsAroundCircle;
// console.log(stepsAroundCircle)
//     for (var i = 0; i < stepsAroundCircle; i++) {
//     var x = Math.cos(Rune.radians(i * colorDegree)) *100;
//     var y = Math.sin(Rune.radians(i * colorDegree)) *100;
//     r.circle(x, y, circleradius,circleGroup)
//     .stroke(false)
//         .fill('hsv', i * colorDegree, 100, 100);
// }
// }
var mainchartgroup1 = r.group(500, 200);
var mainchartgroup2 = r.group(200, 200);
var mainchartgroup3 = r.group(200, 500);
Circle1(mainchartgroup1);
Circle1(mainchartgroup2);
Circle1(mainchartgroup3);


/////DOTS OF BUCK/////////////

function Circle1(parent, num) {




    var buckchartCircRad = 8;
    var mainCircleRad = 100;

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
        'h': "290",
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


    if (parent == mainchartgroup1 || parent == mainchartgroup2) {

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
}
















r.draw();
