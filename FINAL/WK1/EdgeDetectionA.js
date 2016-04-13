var capture;
var buffer;
var result;
var pix;
var w = 405,
    h = 455;
// convert grayscale jsfeat image to p5 rgba image
// usage: dst = jsfeatToP5(src, dst)
function jsfeatToP5(src, dst) {
  if(!dst || dst.width != src.cols || dst.height != src.rows) {
    dst = createImage(src.cols, src.rows);
  }
  var n = src.data.length;
  dst.loadPixels();
  var srcData = src.data;
  var dstData = dst.pixels;
  for(var i = 0, j = 0; i < n; i++) {
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
    createCanvas(405, 455);

    img = loadImage("../images/elon.jpg");
    
    
    //IT USED TO SAY THIS
    // capture = createCapture(VIDEO);
    // createCanvas(w, h);
    // capture.size(w, h);
    // capture.hide();

    buffer = new jsfeat.matrix_t(w, h, jsfeat.U8C1_t);
}

function draw() {
    image(img, 0, 0, w, h);
    // var pix = img.get(x, y);
    img.loadPixels();
    //USED TO SAY THIS
    // capture.loadPixels();
    
    // if(img.pixels.length > 0) { 
    
      var blurSize = 6;
      var lowThreshold = 20;
      var highThreshold = 50;
  
      //SWITCH THIS LINE TO IMG INSTEAD OF CAPTURE
      // jsfeat.imgproc.grayscale(capture.pixels, w, h, buffer);
      jsfeat.imgproc.grayscale(img.pixels, w, h, buffer);
      jsfeat.imgproc.gaussian_blur(buffer, buffer, blurSize, 0);
      jsfeat.imgproc.canny(buffer, buffer, lowThreshold, highThreshold);
      result = jsfeatToP5(buffer, result);
      image(result, 0, 0, w, h);
    //This last line said 'image' already, didnt change it   
    // }
 
} 
