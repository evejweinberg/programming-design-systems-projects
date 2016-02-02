var r = new Rune({
    container: "#canvas",
    width: 200,
    height: 800,
    debug: true
});

var Sprinklerotation = Math.random() * (12 - 1) + 1;
var thickness = Math.random() * (12 - 1) + 1;
var sprinkles = r.group(0, 0)
var sprinklesTotal = 20;

for (var i = 0; i < sprinklesTotal; i++) {
    r.rect(4, 10, i * 8, i * 8, sprinkles)
        .fill(0)
        .strokeWidth(thickness)
        .rotate(Sprinklerotation);
}


r.draw();
