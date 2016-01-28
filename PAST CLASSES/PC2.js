var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  // debug: true
});

//background
r.rect(0, 0, r.width, r.height).fill('hsv', 180, 7.7, 96.9).stroke(false);

var x = r.width/2,
    y = r.height/2;

//darkred 0, 100, 74.9
//black 0, 100, 100
//yellow 58, 100, 100
//lightblue 180 7.7 96.9
//blue 241 100 93.7

for(var i = 0; i < r.height/3; i+=10){
  r.line(x, y, 0, i);
  // var colHue = Rune.random(0, 60);
  var one = r.path(x, y)
      .fill('hsv', 0, 100, 74.9)
      .stroke(false)
      .lineTo(0, 0)
      .lineTo(0-x, i-y)
      .lineTo(0-x, i+20-y)
      .closePath();
  // r.line(x, y, 0, r.height/3).stroke(0).strokeWidth(5);
}
for(var i = r.height*2/3; i < r.height; i+=5){
  r.line(x, y, r.width, i).stroke(0).strokeWidth(1);
  //180 7.7 96.9
  var one = r.path(x, y)
      .stroke(false)
      .fill('hsv', 58, 100, 100)
      .lineTo(0, 0)
      .lineTo(x, i-y)
      .lineTo(x, i+20-y)
      .closePath();
}

for(var i = 0; i < r.height/3; i+=10){
  // r.line(x, y, i, 0);
  // var colHue = Rune.random(120, 180);
  var one = r.path(x, y)
      .fill('hsv', 0, 100, 74.9)
      .stroke(false)
      .lineTo(0, 0)
      .lineTo(i-x, -y)
      .lineTo(i+20-x, -y)
      .closePath();
}
for(var i = r.width*2/3; i <= r.width; i+=10){
  r.line(x, y, i, r.height);
  // var colHue = Rune.random(180, 240);
  var one = r.path(x, y)
      .fill('hsv', 241, 100, 93.7)
      .stroke(false)
      .lineTo(0, 0)
      .lineTo(i-x, y)
      .lineTo(i+20-x, y)
      .closePath();
}

for(var i = r.width/2; i < r.width; i+=10){
  r.line(x, y, 0, i).stroke(0).strokeWidth(0.5);
  var colHue = Rune.random(240, 300);
  var one = r.path(x, y)
      .fill('hsv', 58, 100, 100)
      .stroke(false)
      .lineTo(0, 0)
      .lineTo(0-x, i-y)
      .lineTo(0-x, i+20-y)
      .closePath();
}

for(var i = r.width*3/4; i <= r.width; i+=10){
  // r.line(x, y, i, 0);
  // var colHue = Rune.random(300, 360);
  var one = r.path(x, y)
      .fill('hsv', 241, 100, 93.7)
      .stroke(false)
      .lineTo(0, 0)
      .lineTo(i-x, -y)
      .lineTo(i+20-x, -y)
      .closePath();
}

for(var i = 0; i < r.width/2; i+=10){
  r.line(x, y, i, r.height).stroke('hsv', 180, 7.7, 96.9).strokeWidth(1);
  // var colHue = Rune.random(340, 360);
  var one = r.path(x, y)
      .fill('hsv', 58, 100, 100)
      .stroke(false)
      .lineTo(0, 0)
      .lineTo(i-x, y)
      .lineTo(i+20-x, y)
      .closePath();
}
r.rect(0, 0, r.width, r.height).fill(false).stroke(0).strokeWidth(15);
r.draw();

function save() {
    var svg = document.querySelector('svg');
    svg.setAttribute("version", "1.1");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    
    //SVG element should be the only child of the parent container
    var html = svg.parentNode.innerHTML;
    
    var imgsrc = 'data:image/svg+xml;base64,'+ btoa(html);
    
    //trigger download
    var a = document.createElement('a');
    a.download = "image.svg";
    a.href = imgsrc;
    document.body.appendChild(a);
    a.click();
    
}