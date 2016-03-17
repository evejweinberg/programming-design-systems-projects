var rw = $(window).width();
var rh = $(window).height();
var r = new Rune({
    container: "#canvas",
    width: $(window).width(),
    height: $(window).height(),
    debug: false
});

//////◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆//////
var jpg = new Rune.Pixels("poster.jpg");
var oneMagRad = 20;
var magLine;
var magStickLength = 30;
var oneMagWidth = 70;
var AllMags = [];
var bgCol = 255;
var colorsHex = ["#4495D4", "#DE5833", "#6D59A3", "#5B9E4D", "#F1A031"]
var colors = [new Rune.Color("#4495D4"), new Rune.Color("#DE5833"), new Rune.Color("#6D59A3"), new Rune.Color("#5B9E4D"), new Rune.Color("#F1A031")]
    // var colors = [rgb(222,88,51)rgb(222,88,51),]
console.log(rw / oneMagWidth)
    ///////◼///◼///◼///◼///◼///◼///◼///◼///◼///◼///◼////◼////

var BowTieX = Math.floor(Math.random()*(rw/oneMagWidth)-0)
var BowTieY = Math.floor(Math.random()*(rh/oneMagWidth)-0)
console.log(BowTieX+","+BowTieY)
GridofSearches(BowTieX,BowTieY);

function GridofSearches(BowTieX,BowTieY){
    if (i == BowTieX && j == BowTieY){
        console.log('hit')
    }
      if (i !== BowTieX && j !== BowTieY){
        for (var j = 0; j < rh/oneMagWidth; j++) {
    for (var i = 0; i < rw / oneMagWidth; i++) {



        var randIndex = Math.floor(Math.random() * 5 - 0);
        DrawOneMag(i * oneMagWidth, oneMagWidth * j, randIndex,randIndex*30);
    }
}
}
}

function DrawOneMag(xpos, ypos, colorIndex,rotationAmt) {
     

    var oneMag = r.group(0,0);
   r.line(0, 0, magStickLength, magStickLength, oneMag).strokeWidth(10).strokeCap('round').stroke(colors[colorIndex]);

    r.circle(0, 0, oneMagRad, oneMag).fill(bgCol).stroke(colors[colorIndex]).strokeWidth(5);
    oneMag
   // .rotate(rotationAmt)
    .move(xpos, ypos)

    AllMags.push(oneMag)
}

r.play();


r.on('draw', function(){
    // var x = event.clientX;
    // console.log(x)
    // AllMags =[]
    // magLine.vars.x2 = 10
//     var randIndex = Math.floor(Math.random() * 5 - 0);
//     $("#ddg-logo").attr('fill', colorsHex[randIndex]);
//     for (var k=0;k<AllMags.length;k++)
// {    
//     console.log(AllMags[k].children[0].vars.x2)
//     // AllMags[k].children[0].vars.x2=randIndex
//     // AllMags[k].move(10,10)
// }

//to make this happen. you have to change r.draw()  below to r.play();
});



//this is to interact with the svg html element
// jQuery('img.svg').each(function() {

//     // console.log(err);
//     var $img = jQuery(this);
//     var imgID = $img.attr('id');
//     var imgClass = $img.attr('class');
//     var imgURL = $img.attr('src');

//     jQuery.get(imgURL, function(data) {
//         // Get the SVG tag, ignore the rest
//         var $svg = jQuery(data).find('svg');

//         // Add replaced image's ID to the new SVG
//         if (typeof imgID !== 'undefined') {
//             $svg = $svg.attr('id', imgID);
//         }
//         // Add replaced image's classes to the new SVG
//         if (typeof imgClass !== 'undefined') {
//             $svg = $svg.attr('class', imgClass + ' replaced-svg');
//         }

//         // Remove any invalid XML tags as per http://validator.w3.org
//         $svg = $svg.removeAttr('xmlns:a');

//         // Replace image with new SVG
//         $img.replaceWith($svg);

//     }, 'xml');

// });
// document.onmousemove = function (e) {mousePos(e);};


function mousePos (e) {
    var x = event.clientX;
     var y = event.clientY;
    // console.log(x+","+y)
    var newX = Math.cos(Rune.radians(x))*magStickLength;
    var newY = Math.sin(Rune.radians(y))*magStickLength
    for (k in AllMags)
{    
    // console.log(AllMags[k].children[0].vars.x2)
    AllMags[k].children[0].vars.x2=newX
      AllMags[k].children[0].vars.y2=newY
   // AllMags[k].children[0].vars.stroke.values = colors[3]
      var posX = AllMags[k].vars.x;
      var posY = AllMags[k].vars.y;
      // console.log(k+","+AllMags[k].vars.x,AllMags[k].vars.y)
      // AllMags[k]
      // .move(0,0)
      // .rotate(x).move(posX,posY)
}

    }
$(document).click(function() {
    // AllMags =[]
    // magLine.vars.x2 = 10
    var randIndex = Math.floor(Math.random() * 5 - 0);
    var randIndex2 = Math.floor(Math.random() * 5 - 0);

    var AnyDegree = Rune.random(360)
     var x = event.clientX;
     var y = event.clientY;
    console.log(x+","+y)
    var newX = 5+Math.cos(Rune.radians(AnyDegree))*magStickLength;

    var newY = 5+Math.sin(Rune.radians(AnyDegree))*magStickLength;
    console.log(newX+","+newY)
    // console.log(randIndex)
    // console.log(colorsHex[randIndex])
    $("#ddg-logo").attr('fill', colorsHex[randIndex]);
    for (k in AllMags)
{    
    // console.log(AllMags[k].children[0].vars.x2)
    AllMags[k].children[0].vars.x2=newX
      AllMags[k].children[0].vars.y2=newY
      AllMags[k].children[0].vars.stroke = colors[randIndex2]
      AllMags[k].children[1].vars.stroke = colors[randIndex2]
      // console.log(AllMags[k].children[0].vars.stroke = colors[1])
}});





// jpg.load(function(err) {

//   var size = 50;

//   for(var x = 0; x < r.width; x += size)
//   {
//     for(var y = 0; y < r.height; y += size)
//     {
//       // we have to map the x,y values to the width and height
//       // of the image.
//       var imgX = Math.floor((x / r.width) * jpg.width);
//       var imgY = Math.floor((y / r.height) * jpg.height);

//       var backColor = jpg.get(imgX, imgY);
//       var frontColor = backColor.copy().darken(0.3);

//       r.rect(x, y, size, size)
//         .fill(backColor)
//         .stroke(false);

//       r.rect(x + 10, y + 10, size - 20, size - 20)
//         .fill(frontColor)
//         .stroke(false)
//         .rotate(45, x + (size/2), y + (size/2));
//     }
//   }

//   r.draw();

// });
// 
$(window).resize(function() {
    var newrw = $(window).width();
    if (newrw > rw) {
      console.log('got bigger')
        rw = newrw;
        console.log('rw is: '+rw)
        AllMags = [];

    }

});
