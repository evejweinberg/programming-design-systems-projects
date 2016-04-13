  var imgW = 300;
  var imgH = 300;
  var sizeMax = 40;
  var sizeMin = 4;
  var sizeChange = 4;
  var size = 5;
  var r = new Rune({
      container: "#canvas",
      width: imgW,
      height: imgH,
      debug: true
  });

  //////◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆//////
  var jpg = new Rune.Pixels("assets/logoRef2.jpg");
  var Startingsize = 5;
  var divisible = 2;
  var AllRects = [];
  var AllRectsEvenCol = [];
  var AllRectsOddCol = [];
  var AllColors = [];
  var scaleUp = 1;




r.on('click', function(mouse) {


      size = size + sizeChange
          console.log(size)
      if (size >= sizeMax || size <= sizeMin) {
          changeSizeDir();

      }

  AllRects = [];
      for (var x = 0; x < imgW; x += size) {
          for (var y = 0; y < imgH; y += size) {

              // we have to map the x,y values to the width and height
              // of the image.
              var imgX = Math.floor(x);
              var imgY = Math.floor(y);

              var backColor = jpg.get(imgX, imgY);
              AllColors.push(backColor)
              var frontColor = backColor.copy().darken(-0.2);

              var rect1 = r.rect(x, y, size, size)
                  .fill(backColor)
                  .stroke(false);

             
              //push all rects into One main array
              AllRects.push(rect1)
            }
          }


// r.draw();
 

});




  $(document).click(function() {
    
//       scaleUp = scaleUp + .5
//       // divisible = divisible * 2
//       size = size + sizeChange
//           console.log(size)
//       if (size > sizeMax || size < sizeMin) {
//           changeSizeDir();

//       }
 
// // r.stage = [];
//         // jpg.load(function(err) {
//       DrawGrid();
//   // });

//   r.draw();




      //look at all rectangles
      // for (i in AllRects) {
      //     AllRectsOddCol[i].move(-1000, 1000, true)
      //         // AllRects.fill(AllColors[i])
      //         // AllRects[i].move(1,0,true)
      //         // AllRects[i].scale(2)
      //         // AllRects[i].vars.width = size

      //     if (i % 2 == 0) {
      //         AllRectsEvenCol[i].scale(2);
      //         // AllRects[i].move(0, 0, true)
      //         // AllRects[i].fill(AllColors[i])


      //     } else {


      //     }

      //     // else {
      //     // // AllRects.remove(i)
      //     //  delete AllRects[i]
      //     //  // AllRects.splice(i)
      //     // }
      // }


      // console.log(AllRects.length)


  });





  function changeSizeDir() {
      sizeChange = -sizeChange
  }





  jpg.load(function(err) {
      DrawGrid();
   
  });

r.play();






  function DrawGrid() {
    // r.stage=[]
      // var innerrect = Startingsize * .2

      for (var x = 0; x < imgW; x += size) {
          for (var y = 0; y < imgH; y += size) {

              // we have to map the x,y values to the width and height
              // of the image.
              var imgX = Math.floor(x);
              var imgY = Math.floor(y);

              var backColor = jpg.get(imgX, imgY);
              AllColors.push(backColor)
              var frontColor = backColor.copy().darken(-0.2);

              var rect1 = r.rect(x, y, size, size)
                  .fill(backColor)
                  .stroke(false);

              if (y % 2 == 0) {
                  //push rects in even Columns into an array
                  AllRectsEvenCol.push(rect1)
              } else {
                  //push rects in Odd Columns into an array
                  AllRectsOddCol.push(rect1)
              }
              //push all rects into One main array
              AllRects.push(rect1)

              // if (innerrect < 0) {
              //     innerrect = 0;
              // }
              // var rect2 = r.circle(x + (innerrect / 2), y + (innerrect / 2), innerrect)
              //     .fill(frontColor)
              //     .stroke(false)

          }
      }
  }






  document.onmousemove = function(e) { mousePos(e); };

  function mousePos(e) {
     
      // var x = event.clientX;
      // var y = event.clientY;
      size = size + sizeChange
          console.log(size)
      if (size >= sizeMax || size <= sizeMin) {
          changeSizeDir();

      }

  AllRects = [];
      for (var x = 0; x < imgW; x += size) {
          for (var y = 0; y < imgH; y += size) {

              // we have to map the x,y values to the width and height
              // of the image.
              var imgX = Math.floor((x / imgW) * jpg.width);
              var imgY = Math.floor((y / imgH) * jpg.height);

              var backColor = jpg.get(imgX, imgY);
              AllColors.push(backColor)
              var frontColor = backColor.copy().darken(-0.2);

              var rect1 = r.rect(x, y, size, size)
                  .fill(backColor)
                  .stroke(false);

             
              //push all rects into One main array
              AllRects.push(rect1)
            }
          }

 // r.stage = [];
// r.draw();
 
    

  }

  // $(window).resize(function() {

  // });