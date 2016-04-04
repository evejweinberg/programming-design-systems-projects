//
//                                                                          ___   ___  ___                      ___   ___                      
//   //  //   ) )  // | |     /|    / / //    ) ) //   ) ) /|    //| |       / /        / /    // | |  /__  ___/ / /    //   ) ) /|    / /   
// //// //___/ /  //__| |    //|   / / //    / / //   / / //|   // | |      / /        / /    //__| |    / /    / /    //   / / //|   / /    
/// // / ___ (   / ___  |   // |  / / //    / / //   / / // |  //  | |     / /        / /    / ___  |   / /    / /    //   / / // |  / /     
// // //   | |  //    | |  //  | / / //    / / //   / / //  | //   | |    / /        / /    //    | |  / /    / /    //   / / //  | / /      
// / //    | | //     | | //   |/ / //____/ / ((___/ / //   |//    | | __/ /___     / /___ //     | | / /  __/ /___ ((___/ / //   |/ /         

var r = new Rune({
    container: "#canvas",
    width: 900,
    height: 1200,
    debug: false
});



var num = Math.floor(Rune.random(10, 200));
var numTwo = Math.floor(Rune.random(3));
var colors = [
    new Rune.Color(25, 20, 130), new Rune.Color(30, 125, 100), new Rune.Color(70, 60, 105)
]

// r.rect(0, 0, num, num).fill('hsv', num, 100, 100)


// //random options algorythm
// var rectRandOpt = r.rect(300, 0, num, num);
// if (numTwo < 1) {
//     rectRandOpt.fill(255, 0, 0)
// } else if (numTwo < 2) {
//     rectRandOpt.fill(0, 255, 0)
// } else {
//     rectRandOpt.fill(0, 0, 255)
// }


// use the return function////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////

function randonFromArray(arr) {
    return arr[Math.floor(Rune.random(0, arr.length))]
}

var color2 = randonFromArray([
    new Rune.Color(25, 20, 130), new Rune.Color(30, 125, 100), new Rune.Color(70, 60, 105)

])
var rectArrayColor = r.rect(0, 300, num, num);
rectArrayColor.fill(color2)




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function pickRandom(arr) {
//     return arr[Math.floor(Rune.random(0, arr.length))]
// }


// var name = pickRandom([
// "Rune", "Steve","Eve","Shir"
//     ])





/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


function pickRandomWeighted(arr) {
    //return the value of that number
    return arr[Math.floor(Rune.random(0, arr.length))].value;
}


var nameWeighted = pickRandomWeighted([
    { value: "Rune", weight: 5 },
    { value: "Eve", weight: 1 },
    { value: "Shir", weight: 3 },
])
console.log(nameWeighted)



/////////////////////////////////////////////////////////////////////////////////////
/////http://printingcode.runemadsen.com/examples/randomization/weighted/index.html
///////////////////////////////

function PickRandomB(opts) {
    //get sum of all weights
    var sum = _.reduce(opts, function(memo, opt) {
        return memo + opt.weight;
    }, 0);
    //call a function for each item in the array and return all of the return statements accumulated, memo starts at zero, then zero plus the weight...
    ////pick a random number
    var ran = Rune.random(sum);
    /////loop through options
    for (var i = 0; i < opts.length; i++) {
        var opt = opts[i];

        if (opt.weight >= ran) {
            return opt.value;
        }

        ran -= opt.weight;
    }
    /////see if weight is greater than random number
    ///subtract weight from random number
    ///return
}

var nameB = PickRandomB([
    { value: "Rune", weight: 12 },
    { value: "Eve", weight: 1 },
    { value: "Shir", weight: 3 },
    { value: "Ella", weight: 5 }
])

console.log(nameB)



////////////////////////////////////////////////////////////////////////////////////////////////////
///.dP"Y8 888888 888888 8888b.      88""Yb    db    88b 88 8888b.   dP"Yb  8b    d8 ////////////////
// `Ybo." 88__   88__    8I  Yb     88__dP   dPYb   88Yb88  8I  Yb dP   Yb 88b  d88 ////////////////
// o.`Y8b 88""   88""    8I  dY     88"Yb   dP__Yb  88 Y88  8I  dY Yb   dP 88YbdP88 ////////////////
// 8bodP' 888888 888888 8888Y"      88  Yb dP""""Yb 88  Y8 8888Y"   YbodP  88 YY 88 ////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var mySeed = Rune.random(0, 500);
// Math.seedrandom(12);
// Math.seedrandom(mySeed); //use this until you like one and then make it static
Math.seedrandom('hello');
console.log(mySeed) //so you can print it until you like and it and know what it is
console.log(Rune.random(20))
console.log(Rune.random(20))
console.log(Rune.random(20))




////////////////////////////////////////////////////////////////////////////////////
//              ____                                                                       ______                          ____        
// |`````````, |            |`````````, |        | |..          |        |..          |  .~      ~.  |             ..'''' |            
// |'''''''''  |______      |'''|'''''  |        | |  ``..      |        |  ``..      | |          | |          .''       |______      
// |           |            |    `.     |        | |      ``..  |        |      ``..  | |          | |       ..'          |            
// |           |___________ |      `.   |_______ | |          ``|        |          ``|  `.______.'  | ....''             |___________ 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

var y = 200;
var noise = new Rune.Noise();
noise.noiseSeed(70);
//args = zero to 8, 0 to 1
noise.noiseDetail(2, 0.1)

var noiseStep = 0;
var varianceCompare = 400
for (var x = 0; x < r.width; x += 5) {
    //a big ''nose.get' number will skip ahead in the curve too much

    var ranB = Rune.random(varianceCompare);
    //perlin noise gives youbtwn 0 and 1,so you need to multiply it
    //tell it which number on the curve you want

    r.circle(x, y + ranB, 5).fill(colors[0]);
    //spacing(5), incrementer (40), multiplier, and noise detail
    r.circle(x, y + noise.get(noiseStep) * varianceCompare, 5).fill(colors[1])
    noiseStep += .05
}




///////////////////////////////////////////////////////////////////////////////////
//make something organic with perlin noise ///////
/////////////////////////////////////////////////////////////////////////////////////


var circle = r.polygon(r.width / 2, r.height / 2).fill(false).strokeWidth(2).stroke(50)
var numpts = 120;
var pontDeg = 360 / numpts;
var noiseB = new Rune.Noise();
var noiseStepB = 0;
// noiseB.noiseDetail(1,0.5)

for (var i = 0; i < numpts; i++) {
    //btwn 200 and 240
    var radius = 200 + noiseB.get(noiseStepB) * 90;
    var x = Math.cos(Rune.radians(i * pontDeg)) * radius;
    var y = Math.sin(Rune.radians(i * pontDeg)) * radius;
    circle.lineTo(x, y)
    if (i > numpts / 2) {
        noiseStepB += .05
    } else {
        noiseStepB -= .05
    }
}




/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// var iceberg = r.polygon(r.width / 2, 100).fill(120).strokeWidth(2).stroke(50)
// for (var degree = 0; degree <= 180; degree += 3) {
//     //btwn 200 and 240
//     var radius = 200 + noiseB.get(noiseStepB) * 90;
//     var x = Math.cos(Rune.radians(degree* pontDeg)) * radius;
//     var y = Math.sin(Rune.radians(degree* pontDeg)) * radius;
//     //150 is the steepness of the curve
//     y+= noise.get(noiseStep)*150
//     iceberg.lineTo(x, y)
//     noiseStep+=0.04

// }
// 


// draw background
// r.rect(0, 0, r.width, r.height).fill(30);

var noise = new Rune.Noise().noiseDetail(4, 0.75);
noise.noiseSeed(3);
var noiseStep = 0;

var iceberg = r.polygon(r.width / 2, 100);

for (var degree = 0; degree <= 180; degree += 3) {

    var x = Math.cos(Rune.radians(degree)) * 200;
    var y = Math.sin(Rune.radians(degree)) * 200;

    if (degree > 10 && degree < 170) {
        y += noise.get(noiseStep) * 150;
    }

    iceberg.lineTo(x, y);

    noiseStep += 0.04;
}


//////
///
var linepoints = []
var linedirections = []
var x = 0,
    y = 0;
    //change distances between points in X
while (x < r.width * .9) {
    var deg = Rune.radians(Rune.random(-100,-80))
    x += Rune.random(30, 150);
    y = 700 + noise.get(noiseStep)*100
    r.circle(x,y,10)
    noiseStep+=.05
    linepoints.push(new Rune.Vector(x,y))
    linedirections.push(new Rune.Vector(Math.cos(deg.x),Math.sin(deg.y)))
}

console.log(linedirections)



//draw points
//http://printingcode.runemadsen.com/examples/randomization/pintori_3/index.html
for (var i = 0; i <linepoints.length-1; i++){

    var ranHeight = Rune.random(150,350)
    var bottomLeft = linepoints[i];
    var leftDir = linedirections[i];
    var rightDir = linedirections[i+1];
    var bottomRight = linepoints[i+1];
    var topLeft = leftDir.multiply(ranHeight).add(bottomLeft)
    var topRight = rightDir.multiply(ranHeight).add(bottomRight)
      var bottomRightB = bottomRight.sub(new Rune.Vector(0, ranHeight));
      var bottomLeftB = bottomLeft.sub(new Rune.Vector(0, ranHeight));
    r.line(bottomLeft.x, bottomLeft.y, bottomRight.x,bottomRight.y)
    r.triangle(bottomLeft.x, bottomLeft.y, bottomRight.x,bottomRight.y,bottomRightB.x,bottomRightB.y).fill(colors[0]);
//use topLeft and topRight variables now
}







r.draw();
