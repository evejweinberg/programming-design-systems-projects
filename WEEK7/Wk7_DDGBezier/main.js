

var r = new Rune({
    container: "#canvas",
    width: 900,
    height: 1200,
    debug: true
});

//////◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆//////


///////◼///◼///◼///◼///◼///◼///◼///◼///◼///◼///◼////◼////

var myRect;
var pt1 = new Rune.Vector(72,0);
var pt2 = new Rune.Vector(51,-93);
var pt3 = new Rune.Vector(81,-130);
var pt4 = new Rune.Vector(57,-136);

var pt7 = new Rune.Vector(100,-135);
var pt8 = new Rune.Vector(127,-84);
var pt9 = new Rune.Vector(163,-90);
var pt10 = new Rune.Vector(134,-73);
var pt11 = new Rune.Vector(110.5,-70);
var pt12 = new Rune.Vector(122,-59);
var pt13 = new Rune.Vector(155.6,-62);
var pt14 = new Rune.Vector(132,-51.5);
var pt15 = new Rune.Vector(100.5,-59.5);
var pt16 = new Rune.Vector(107,-23);
var pt17 = new Rune.Vector(123,-32);
var pt18 = new Rune.Vector(124.5,-5.9);
var pt19 = new Rune.Vector(115.5,-7.5);
var pt20 = new Rune.Vector(119,1);



var numPoints = 12;
var pointDeg = 360/numPoints;
var polygon = r.polygon(200,200)
for (var i=0;i<numPoints;i++){
    var x = Math.cos(Rune.radians(i*pointDeg))*200;
    var y = Math.sin(Rune.radians(i*pointDeg))*200;
    r.circle(300+x,300+y,12).fill(false)
    polygon.lineTo(x,y).fill(100,200,4)
}
var logo = r.group(500,500).scale(4,4)

var DuckHead = r.path(0,0,logo).fill(255,0,0).stroke(0).strokeWidth(3)
.moveTo(pt1.x,pt1.y)
.curveTo(pt1.x-.5,pt1.y-24,pt2.x+.5,pt2.y+20,pt2.x,pt2.y)
// .curveTo(pt3.x,pt3.y,200,300,pt12.x,pt12.y)
.curveTo(pt2.x-2,pt2.y-30,pt3.x-30,pt3.y+7,pt3.x,pt3.y)
.curveTo(70,-126,pt4.x,pt4.y)
.curveTo(60,-140,65,-142)
.curveTo(65,-142,70,-143,57,-145)
.curveTo(57,-145,70,-164,pt7.x,pt7.y)
.curveTo(pt7.x,pt7.y,pt7.x+50,pt7.y-20,pt8.x,pt8.y)
.curveTo(pt8.x,pt8.y,pt8.x,pt8.y,pt9.x,pt9.y)
.curveTo(pt9.x,pt9.y,pt9.x,pt9.y,pt10.x,pt10.y)
.curveTo(pt10.x+20,pt10.y,pt10.x,pt10.y,pt11.x,pt11.y)
.curveTo(pt11.x+30,pt11.y,pt11.x,pt11.y,pt12.x,pt12.y)
.curveTo(pt12.x+5,pt12.y,pt12.x,pt12.y,pt13.x,pt13.y)
.curveTo(pt13.x,pt13.y,pt13.x,pt13.y,pt14.x,pt14.y)
.curveTo(pt14.x,pt14.y,pt14.x,pt14.y,pt15.x,pt15.y)
.curveTo(pt15.x,pt15.y,pt15.x,pt15.y,pt16.x,pt16.y)
.curveTo(pt17.x+2,pt17.y+1,pt17.x-1,pt17.y+1,pt17.x,pt17.y)
.curveTo(pt18.x-.5,pt18.y-.4,pt18.x+.5,pt18.y+.4,pt18.x,pt18.y)
.curveTo(pt19.x+1,pt19.y+1,pt19.x+3,pt19.y-1.5,pt19.x,pt19.y)
.curveTo(pt20.x-4,pt20.y-2,pt20.x,pt20.y)

logo.scale(3).move(40,600)
var pos = DuckHead.vars.anchors[1].vec1
console.log(pos)
// .subpaths(DuckHead)




// var poly1 = r.polygon(200,200)
// .lineTo(100,0)
// .lineTo(100,100)
// .lineTo(0,100)


// var poly2 = r.polygon(400,500)
// .lineTo(100,0)
// .lineTo(100,100)
// .lineTo(0,100)


// for (vari=0;i<50;i++){
//     var randx = Rune.random(2000);
//     var randy = Rune.random(3000)
//     r.rect(randx, randy,12,12)
// }

// create code outsode of draw loop
//when this event happens
r.on('eventname', function(){
//do not add a background
});





//this can be a button now!!
// myRect.on('click',function(){

// })



// r.on('mousemove',function(mouse){
//     poly2.move(mouse.x,mouse.y);
//     poly1.rotate(3)
// })

//to play 60 frames per second
// r.on('draw', function(){
// // myRect.move(1,0,true);
//     // poly2.rotate(6)

//     // if(poly1.contains(poly2.vars.x,poly2.vars.y)){
//     //     poly2.fill(255,0,0)
//     // }

//  //put everything in here
// //to make this happen. you have to change r.draw()  below to r.play();
// });


r.draw();

