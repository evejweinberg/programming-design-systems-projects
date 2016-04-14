var capture;
var buffer;
var result;
var pix;
var w = 1024,
    h = 1024;
var slider;
var sliderBlur;
var imagearray = ['../images/Faces_0.png', '../images/Faces_1.png']
var animateblur = 20;
bluramt = 1
var trailPointsLength = 100;
var trailPoints = [];
function drawTrail(nextPoint) {
  trailPoints.push(nextPoint);
  if(trailPoints.length > trailPointsLength) {
    trailPoints.shift();
  }
  beginShape();
  trailPoints.forEach(function (point) {
    vertex(point.x, point.y);
  })
  endShape();
}



//use color detection to get colors
//
//
    // convert grayscale jsfeat image to p5 rgba image
    // usage: dst = jsfeatToP5(src, dst)
function jsfeatToP5(src, dst) {
    if (!dst || dst.width != src.cols || dst.height != src.rows) {
        dst = createImage(src.cols, src.rows);
    }
    var n = src.data.length;
    dst.loadPixels();
    var srcData = src.data;
    var dstData = dst.pixels;
    for (var i = 0, j = 0; i < n; i++) {
        var cur = srcData[i];
        dstData[j++] = cur;
        dstData[j++] = cur;
        dstData[j++] = cur;
        dstData[j++] = 255;
    }
    dst.updatePixels();
    return dst;
}

function setup() {
    createCanvas(w, h);
    sliderBlur = createSlider(10, 5, 50);
    sliderBlur.position(10, 30);
    sliderBlur.style('width', '80px');

    slider = createSlider(10, 5, 50);
    slider.position(10, 10);
    slider.style('width', '80px');
    img = loadImage(imagearray[Math.floor(Rune.random(imagearray.length))]);


    buffer = new jsfeat.matrix_t(w, h, jsfeat.U8C1_t);
}

function draw() {
  var i = 0;
    image(img, 0, 0, w, h);
    // var pix = img.get(x, y);
    img.loadPixels();
    var pixels = img.pixels;
    //USED TO SAY THIS
    // capture.loadPixels();
     // var thresholdAmount = select('#thresholdAmount').value();
    // thresholdAmount /= 100.; // this is the slider range
    // thresholdAmount *= 255; // this is the maximum value
    var thresholdAmount =150; // this is the slider range
    var total = 0;
    for(var y = 0; y < h; y++) {
      for(var x = 0; x < w; x++) {
        var redValue = pixels[i];
        var outputValue = 0;
        if (redValue > thresholdAmount) {
          outputValue = 255;
          total++;
        }
        pixels[i++] = outputValue; // set red
        pixels[i++] = outputValue; // set green
        pixels[i++] = outputValue; // set blue
        i++; // skip alpha
      }
    }

    // if(img.pixels.length > 0) { 
var bluramt = sliderBlur.value()
    var val = slider.value();
    var blurSize = bluramt;
    var lowThreshold = val;
    var highThreshold = 50;

    // animateblur-bluramt
    // if (animateblur>21 || animateblur<2)
    // {      bluramt = -bluramt}


    //SWITCH THIS LINE TO IMG INSTEAD OF CAPTURE
    // jsfeat.imgproc.grayscale(capture.pixels, w, h, buffer);
    jsfeat.imgproc.grayscale(img.pixels, w, h, buffer);
    jsfeat.imgproc.gaussian_blur(buffer, buffer, blurSize, 0);
    jsfeat.imgproc.canny(buffer, buffer, lowThreshold, highThreshold);
    result = jsfeatToP5(buffer, result);
     img.updatePixels();
fill(255, 204, 0);
    image(img, 0, 0, w, h);
    blendMode(LIGHTEST);
fill('red');
    image(result, 0, 0, w, h);
 // blendMode(LIGHTEST);



    // if(pixel color is black)
    // take it away
    // if pixel is white, store is color value in a variable
    
      
    // }

}
