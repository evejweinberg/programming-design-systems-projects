var r = new Rune({
    container: "#canvas",
    width: 600,
    height: 800
});

var decrement = .8;
var planet = r.group(0,0).rotate(-45).move(0,0)
for (var g = 2; g < 28; g++) {
    // for (var h = 0; h < 20; h++) {
        var lineLength = Math.abs(260*Math.sin(.1*g)+(50-g))
        r.rect(-180+g*12,20-(lineLength/2),4,lineLength,planet).fill(255)
    // }
}

r.ellipse(0,0,300,300,planet).fill(false).stroke(0).strokeWidth(40);
r.ellipse(0,0,270,270,planet).fill(false).stroke(255).strokeWidth(20);
r.ellipse(0,0,400,400).stroke(255).strokeDash("10").fill(false)
r.ellipse(0,0,450,450).stroke(255).strokeDash("10").fill(false)
r.ellipse(0,0,540,540).stroke(255).strokeDash("10").fill(false)
r.ellipse(0,0,700,700).stroke(255).strokeDash("10").fill(false)


r.ellipse(0,0,770,770).stroke(255).strokeDash("250,550").fill(false).strokeWidth(12).strokeCap("round").rotate(45)

for (var i=0;i<12;i++){
      var firstDash = Rune.random(60);
    var secondDash = Rune.random(60);
r.ellipse(0,0,260+(i*9),260+(i*9)).stroke(255).fill(false).strokeWidth(2.3 + decrement).strokeCap("round").strokeDash(firstDash + "," + secondDash + ",10,10")
 decrement = decrement - .3
}

r.ellipse(250,250,10,10,planet).fill(255).rotate(30)
r.ellipse(190,190,24,24,planet).fill(255).rotate(45)

// var planet = r.group(0,0).rotate(45)


r.draw();





