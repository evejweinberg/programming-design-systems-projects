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


var linepoints = []
var linedirections = []

// use the return function////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////

// function randonFromArray(arr) {
//     return arr[Math.floor(Rune.random(0, arr.length))]
// }

// var color2 = randonFromArray([
//     new Rune.Color(25, 20, 130), new Rune.Color(30, 125, 100), new Rune.Color(70, 60, 105)

// ])
// var rectArrayColor = r.rect(0, 300, num, num);
// rectArrayColor.fill(color2)











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
// noise.noiseSeed(70);
//args = zero to 8, 0 to 1
noise.noiseDetail(2, 0.1)

var noiseStep = 0;
var varianceCompare = 400
for (var x = 0; x < r.width; x += 5) {
    var ranB = Rune.random(varianceCompare);
    //perlin noise gives youbtwn 0 and 1,so you need to multiply it
    //tell it which number on the curve you want

    // r.circle(x, y + ranB, 5).fill(colors[0]);
    //spacing(5), incrementer (40), multiplier, and noise detail
    // var circ = r.circle(x, y + noise.get(noiseStep) * varianceCompare, 5).fill(colors[1])
    noiseStep += .05
    linepoints.push(new Rune.Vector(x, y + noise.get(noiseStep) * varianceCompare))
}


for (var i = 0; i < linepoints.length - 1; i++) {
    r.line(linepoints[i].x, linepoints[i].y, linepoints[i + 1].x, linepoints[i + 1].y).stroke(10)
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

// for (var i = 0; i < numpts; i++) {
//     //btwn 200 and 240
//     var radius = 200 + noiseB.get(noiseStepB) * 90;
//     var x = Math.cos(Rune.radians(i * pontDeg)) * radius;
//     var y = Math.sin(Rune.radians(i * pontDeg)) * radius;
//     // circle.lineTo(x, y)
//     if (i > numpts / 2) {
//         noiseStepB += .05
//     } else {
//         noiseStepB -= .05
//     }
//     // linepoints.push(new Rune.Vector(x,y))
// }





// var noise = new Rune.Noise().noiseDetail(4, 0.75);
// noise.noiseSeed(3);
// var noiseStep = 0;




// var x = 0,
//     y = 0;
//change distances between points in X
// while (x < r.width * .9) {
// var deg = Rune.radians(Rune.random(-100,-80))
// x += Rune.random(3, 150);
// y = 700 + noise.get(noiseStep)*100
// r.circle(x,y,10)
// noiseStep+=.05
// linepoints.push(new Rune.Vector(x,y))
//     // linedirections.push(new Rune.Vector(Math.cos(deg.x),Math.sin(deg.y)))
// }




//draw points
//http://printingcode.runemadsen.com/examples/randomization/pintori_3/index.html
// for (var i = 0; i <linepoints.length-1; i++){

// var ranHeight = Rune.random(150,350)
// var bottomLeft = linepoints[i];
// var leftDir = linedirections[i];
// var rightDir = linedirections[i+1];
// var bottomRight = linepoints[i+1];
// var topLeft = leftDir.multiply(ranHeight).add(bottomLeft)
// var topRight = rightDir.multiply(ranHeight).add(bottomRight)
//   var bottomRightB = bottomRight.sub(new Rune.Vector(0, ranHeight));
//   var bottomLeftB = bottomLeft.sub(new Rune.Vector(0, ranHeight));
// r.line(bottomLeft.x, bottomLeft.y, bottomRight.x,bottomRight.y)
// r.triangle(bottomLeft.x, bottomLeft.y, bottomRight.x,bottomRight.y,bottomRightB.x,bottomRightB.y).fill(colors[0]);
//use topLeft and topRight variables now
// }







r.draw();
