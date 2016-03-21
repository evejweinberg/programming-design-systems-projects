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
  // var Startingsize = 5;
  var AllRects = [];
  var AllColors = [];
  var scaleUp = 1;



  function changeSizeDir() {
      sizeChange = -sizeChange
  }




  jpg.load(function(err) {
      DrawGrid();

  });

  r.play();





  function DrawGrid() {

      // var innerrect = size * .2

      for (var x = 0; x < imgW; x += size) {
          for (var y = 0; y < imgH; y += size) {

              // we have to map the x,y values to the width and height
              // of the image.
              var imgX = Math.floor(x);
              var imgY = Math.floor(y);

              var backColor = jpg.get(imgX, imgY);
              AllColors.push(backColor)
                  // var frontColor = backColor.copy().darken(-0.2);

              var rect1 = r.rect(x, y, size, size)
                  .fill(backColor)
                  .stroke(false);


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
      // r.stage = [];
      // var x = event.clientX;
      // var y = event.clientY;
      size = size + sizeChange
      if (size >= sizeMax || size <= sizeMin) {
          changeSizeDir();

      }

      AllRects = [];
      AllColors = [];
      DrawGrid();
      // r.stage = []; //i tried this here and at the start of this function

  }