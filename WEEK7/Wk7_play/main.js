

var r = new Rune({
    container: "#canvas",
    width: 900,
    height: 1200,
    debug: true
});

//////◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆//////


///////◼///◼///◼///◼///◼///◼///◼///◼///◼///◼///◼////◼////

var myRect;



var numPoints = 12;
var pointDeg = 360/numPoints;
var polygon = r.polygon(200,200)
for (var i=0;i<numPoints;i++){
    var x = Math.cos(Rune.radians(i*pointDeg))*200;
    var y = Math.sin(Rune.radians(i*pointDeg))*200;
    r.circle(300+x,300+y,12).fill(false)
    polygon.lineTo(x,y).fill(100,200,4)
}






var poly1 = r.polygon(200,200)
.lineTo(100,0)
.lineTo(100,100)
.lineTo(0,100)


var poly2 = r.polygon(400,500)
.lineTo(100,0)
.lineTo(100,100)
.lineTo(0,100)


for (vari=0;i<50;i++){
    var randx = Rune.random(2000);
    var randy = Rune.random(3000)
    r.rect(randx, randy,12,12)
}

// create code outsode of draw loop
//when this event happens
r.on('eventname', function(){
//do not add a background
});





// this can be a button now!!
myRect.on('click',function(){

})



r.on('mousemove',function(mouse){
    poly2.move(mouse.x,mouse.y);
    poly1.rotate(3)
})

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

