// This example requires you to add TweenLite.js and Easepack.js to your HTML file.

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600
});

// start the circle at the top of the screen
var circ = r.circle(r.width/2, -50, 50)
  .stroke(false)
  .fill(30);

 function finished(){
 	console.log('finished')
 	TweenLite.to(circ.vars, 2, { delay:0, y:100, ease: Elastic.easeOut.config(5,1)});

 	TweenLite.to(circ.vars, 2, { delay:2, y:500, radius: 300, ease: Back.easeOut.config(1.7)});


 }

// animate it to the middle of the screen, take 2 seconds
// default easing
var myTween = TweenLite.to(circ.vars, 2, { delay:1, y:r.height/2 , onComplete: finished});

// now we can call pause and play on myTween

r.play();