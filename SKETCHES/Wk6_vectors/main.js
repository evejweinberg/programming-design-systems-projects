//type a string here
//take out spaces in the string
//add commas
//

var r = new Rune({
    container: "#canvas",
    width: $(window).width(),
    height: $(window).height(),
    debug: false
});



function DrawLines(){

}

//// STAGE GRAPH is what you set to the stage
////▱▣ ▣ ▣ ▣ ▣  ▣ ▣ ▣  ▣ ▣ ▣ ▣ ◍ /// ◠ ◠ // ◠
///■//vectors///◃◃◃◃◃◃///◍ ◍ ◍ ◍//
/////https://runemadsen.github.io/rune.js/documentation.html#multiplyvector
/// ◵ ◵  ◵ ◵ ◖  ◪ ◪ ◟  ◙ /////// ◘ /// ◘ ///////
/// //https://en.wikipedia.org/wiki/Geometric_Shapes


///////////////////a simple example of a vector///////////////////
var pos = new Rune.Vector((r.width/2),(r.height/2));
r.rect(pos.x,pos.y, 10,10);
var newpos = pos.multiply(0.5)
r.rect(newpos.x, newpos.y,30,30)
/////////////////////////////////////////////////////////////////

var n = r.polygon(300,400)
    .lineTo(0,0)
    .lineTo(0,-100)
    .lineTo(75,0)
    .lineTo(75,-100)
    // .fill(false)
    //add to the vectors
    .scale(3)

    n.fill(false)

var n2 = r.path(100,500)
.moveTo(0,0)
    .lineTo(200,0)
    .curveTo(300,0,300,200,200,200)
    .closePath();
    console.log(n2)

    n2.fill(false)

//convert n2 to a polygon
////runs through all lines in the curve and converts it to straight lines
var myPolygon = n2.toPolygons(
{spacing:40}
    //smaller spacing is more precise
);

myPolygon[0].move(200,200, true)
//true makes it relative to its location
r.stage.add(myPolygon[0])

console.log('mypoly' + myPolygon)
/////////////////////////////////////////////////////////
////////////////BUT EASIER///////////////////////////////

    

var halfway = n.vectorAt(0.5);
r.circle(halfway.x+300,halfway.y+400,5,5)
.fill(255,0,0)
// vectorAt(scalar)
// 

for (var i = 0; i <100; i++){
    var halfway2 = n.vectorAt(Rune.random(0,0.75));
r.circle(halfway2.x+300,halfway2.y+400,5)
.fill(5,255,0)

}




///////////////////////////////////////////////
///////////////////////////////////////////////


for (var i =1; i <n.vars.vectors.length; i++){
    console.log(n.vars.vectors.length)
    //console log the change of the line
    var currentVector = n.vars.vectors[i];
    //this vector and the last vector....and so on
    var prevVector = n.vars.vectors[i-1];
    var direction = currentVector.sub(prevVector);
    console.log(direction)
    for (var j =1; j <20; j++){
        //choose a random direction
        // direction.multiply(Rune.random(1));
        var newDirection = direction.multiply(Rune.random(1))
        var newPos = prevVector.add(newDirection)
        r.circle(300+newPos.x,400+newPos.y,10,10)
    }

}
var whatever2 = r.polygon(300,400)
    .lineTo(0,0)
    .lineTo(0,-100)
    .lineTo(75,0)
    .lineTo(75,-100)
    //add to the vectors
    .scale(3)





//turn the stage into SVGs
r.draw();
