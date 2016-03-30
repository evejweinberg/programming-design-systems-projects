var rw = $(window).width();
var rh = $(window).height();
var r = new Rune({
    container: "#canvas",
    width: $(window).width(),
    height: $(window).height(),
    debug: true
});

//////◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆//////
var jpg = new Rune.Pixels("poster.jpg");
var oneMagRad = 20;
var topoffset = 25;
var magLine;
var magStickLength = 30;
var oneMagWidth = 90;
var AllMags = [];
var logoScalar = .85;
logoSize = 1;
var bgCol = 255;
// var colorsHex = ["#4495D4", "#DE5833", "#6D59A3", "#5B9E4D", "#F1A031"]
// var colors = [new Rune.Color("#4495D4"), new Rune.Color("#DE5833"), new Rune.Color("#6D59A3"), new Rune.Color("#5B9E4D"), new Rune.Color("#F1A031")]
    // var colors = [rgb(222,88,51)rgb(222,88,51),]
// console.log(rw / oneMagWidth)
// var lineEndOptions = [new Rune.Vector(magStickLength, magStickLength), new Rune.Vector(-magStickLength, magStickLength), new Rune.Vector(-magStickLength, -magStickLength), new Rune.Vector(magStickLength, -magStickLength)]
    ///////◼///◼///◼///◼///◼///◼///◼///◼///◼///◼///◼////◼////



//◠ ◠ // ◠


// r.play();







// function mousePos(e) {
//     var x = event.clientX;
//     var y = event.clientY;
//     // console.log(x+","+y)
//     var newX = Math.cos(Rune.radians(x)) * magStickLength;
//     var newY = Math.sin(Rune.radians(y)) * magStickLength
//     for (k in AllMags) {
//         // console.log(AllMags[k].children[0].vars.x2)
//         AllMags[k].children[0].vars.x2 = newX
//         AllMags[k].children[0].vars.y2 = newY
//             // AllMags[k].children[0].vars.stroke.values = colors[3]
//         var posX = AllMags[k].vars.x;
//         var posY = AllMags[k].vars.y;
//         // console.log(k+","+AllMags[k].vars.x,AllMags[k].vars.y)
//         // AllMags[k]
//         // .move(0,0)
//         // .rotate(x).move(posX,posY)
//     }

// }



// $(document).click(function() {
//     // AllMags =[]
//     // magLine.vars.x2 = 10
//   r.stage.children = [];
//     var randIndex = Math.floor(Math.random() * 5 - 0);
//     var randIndex2 = Math.floor(Math.random() * 5 - 0);
//     var lineEndVar = Math.floor(Math.random() * 4 - 0)
//     var lineEndVar2 = Math.floor(Math.random() * 4 - 0)
//         // var AnyDegree = Rune.random(360)
//     var x = event.clientX;
//     var y = event.clientY;
//     if (logoSize > 1.45 || logoSize < .5){
//       switchScalart();
//     }

//     logoSize *= logoScalar;
//   $("#logo-div").css({ transform: 'scale('+logoSize+')' , left: "40%"})
//     $("#ddg-logo").attr('fill', colorsHex[randIndex]).css({left:"40%"});
//     $("#bow-tie").attr('fill', colorsHex[randIndex]);

//     var BowTieX = Math.floor(Math.random() * (rw / oneMagWidth) - 0)
//     var BowTieY = Math.floor(Math.random() * (rh / oneMagWidth) - 0)
//     GridofSearches(BowTieX, BowTieY);

//     for (k in AllMags) {

//         if (k % 2 == 0) {
//             var randIndex2 = Math.floor(Math.random() * 5 - 0);

//             AllMags[k].children[0].vars.x2 = lineEndOptions[lineEndVar].x
//             AllMags[k].children[0].vars.y2 = lineEndOptions[lineEndVar].y
//             AllMags[k].children[0].vars.stroke = colors[randIndex2]
//             AllMags[k].children[1].vars.stroke = colors[randIndex2]


//         } else {
//             var randIndex = Math.floor(Math.random() * 5 - 0);

//             AllMags[k].children[0].vars.x2 = lineEndOptions[lineEndVar2].x
//             AllMags[k].children[0].vars.y2 = lineEndOptions[lineEndVar2].y
//             AllMags[k].children[0].vars.stroke = colors[randIndex]
//             AllMags[k].children[1].vars.stroke = colors[randIndex]

//         }
//     }
// });





jpg.load(function(err) {

var rand = Rune.random(50)
  var size = rand;

for (var i =0; i<2; i++){
  for(var x = 0; x < r.width; x += size)
  {
    for(var y = 0; y < r.height; y += size)
    {
      // we have to map the x,y values to the width and height
      // of the image.
      var imgX = Math.floor((x / r.width) * jpg.width);
      var imgY = Math.floor((y / r.height) * jpg.height);

      var backColor = jpg.get(imgX, imgY);
      var frontColor = backColor.copy().darken(0.3);

      r.rect(x, y, size, size)
        .fill(backColor)
        .stroke(false);

      r.rect(x + 10, y + 10, size - 20, size - 20)
        .fill(frontColor)
        .stroke(false)
        .rotate(45, x + (size/2), y + (size/2));

if (x<100){
        size = Rune.random(40)
      } else {
         size = Rune.random(50,300)
      }
    }
  }
}

  r.draw();

});
// 
$(window).resize(function() {
    r.stage.children = [];
   
    $("#canvas").css({ "width": "100%" });
     $("#canvas").css({ "height": "100%" });
    var newrw = $(window).width();

   

});



r.on('draw', function() {
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



