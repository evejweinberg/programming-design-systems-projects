//get edges

var capture;
var buffer;
var result;
var pix;
var w = 1024,
    h = 1024;
var slider;
var sliderBlur;
var imagearray = ['../images/Faces_0.png', '../images/Faces_1.png', '../images/Faces_2.png', '../images/Faces_3.png']
var animateblur = 20;
bluramt = 1
var trailPointsLength = 100;
var trailPoints = [];
// function drawTrail(nextPoint) {
//   trailPoints.push(nextPoint);
//   if(trailPoints.length > trailPointsLength) {
//     trailPoints.shift();
//   }
//   beginShape();
//   trailPoints.forEach(function (point) {
//     vertex(point.x, point.y);
//   })
//   endShape();
// }



//use color detection to get colors
//
//
    // convert grayscale jsfeat image to p5 rgba image
    // usage: dst = jsfeatToP5(src, dst)
// function jsfeatToP5(src, dst) {
//     if (!dst || dst.width != src.cols || dst.height != src.rows) {
//         dst = createImage(src.cols, src.rows);
//     }
//     var n = src.data.length;
//     dst.loadPixels();
//     var srcData = src.data;
//     var dstData = dst.pixels;
//     for (var i = 0, j = 0; i < n; i++) {
//         var cur = srcData[i];
//         dstData[j++] = cur;
//         dstData[j++] = cur;
//         dstData[j++] = cur;
//         dstData[j++] = 255;
//     }
//     dst.updatePixels();
//     return dst;
// }

function setup() {
    createCanvas(w, h);
    fill(255,0,0);

    slider = createSlider(10, 5, 100);
    slider.position(10, 20);
    slider.style('width', '100px');

    sliderBlur = createSlider(10, 5, 100);
    
    sliderBlur.position(10, 40);
    sliderBlur.style('width', '100px');

    img = loadImage(path)
    // img = loadImage(imagearray[Math.floor(Rune.random(imagearray.length))]);


    buffer = new jsfeat.matrix_t(w, h, jsfeat.U8C1_t);
}

function draw() {
background('rgba(0,255,0, 0.25)');

    var i = 0;
    image(img, 0, 0, w, h);
    // // var pix = img.get(x, y);
    img.loadPixels();
    var pixels = img.pixels;
    //this array is 4194304 long, which is 1024x1024 x 4

      if(img.pixels.length > 0) { 
    var blurSize = sliderBlur.value()
    var val = slider.value();
    var lowThreshold = val;
    var highThreshold = 50;


    
    // for(var y = 0; y < h; y++) {
    //   for(var x = 0; x < w; x++) {
    //     var col = pixels[i];
    //     if(col > 150) {
    //         console.log('above')
    //       pixels[i++] = 0; // set red
    //       pixels[i++] = 0; // set green
    //       pixels[i++] = 0; // set blue
    //       pixels[i++] = 0; // set alpha
    //     } else {
    //         console.log('below')
    //       pixels[i++] = 0; // set red
    //       pixels[i++] = 0; // set green
    //       pixels[i++] = 0; // set blue
    //       pixels[i++] = 255; // set alpha
    //     }
       
    //   }
    // }

    // img.updatePixels();
    // fill(255, 204, 0);
    // image(img, 0, 0, w, h);

  

    // animateblur-bluramt
    // if (animateblur>21 || animateblur<2)
    // {      bluramt = -bluramt}


    //SWITCH THIS LINE TO IMG INSTEAD OF CAPTURE
    // jsfeat.imgproc.grayscale(capture.pixels, w, h, buffer);
    jsfeat.imgproc.grayscale(img.pixels, w, h, buffer);
    jsfeat.imgproc.gaussian_blur(buffer, buffer, blurSize, 0);
    jsfeat.imgproc.canny(buffer, buffer, lowThreshold, highThreshold);
    result = jsfeatToP5(buffer, result);
    
    //blendMode(LIGHTEST);
    

    // fill('red');

    // noLoop();
    

    image(result, 0, 0, w, h);
    filter(INVERT);
    text("low threshold", 10, 10);
text("blur", 10, 40);
}
 // blendMode(LIGHTEST);



    // if(pixel color is black)
    // take it away
    // if pixel is white, store is color value in a variable
    
      
    // }

}
