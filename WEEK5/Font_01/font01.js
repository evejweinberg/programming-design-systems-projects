var r = new Rune({ 
    container: "#canvas", 
    width: $(window).width(), height: $(window).height(), debug: false });



var typesize = 300
var h = 0;
var letters = ["A","B","C","D"];

var f = new Rune.Font("assets/LemonMilk.Ttf");

f.load(function(err) {

for (var i=0;i<4;i++){
letter(i,i*typesize+30,letters[i]);
letter(i+400,i*typesize+30,letters[i]);
}


    r.draw();


});

function B(x,y,string){
    var AP = [];
    var path = f.toPath(string, 150, 200, typesize)
        .fill(false)
        .stroke(false)

    r.stage.add(path);

    // Just for fun, convert the path to polygons.
    var polys = path.toPolygons({ spacing: 25 });
    // console.log(polys)
    // console.log(polys.length)


    // loop through the points and change them a little bit
    for (var i = 0; i < polys.length; i++) {

        var poly = polys[i];
        poly.fill(false).move(x, y, true);

        for (var j = 0; j < poly.vars.vectors.length; j++) {
            var vec = poly.vars.vectors[j];
            var point = r.circle(poly.vars.x + vec.x, poly.vars.y + vec.y, 3, 3).stroke(false).fill('hsv', h, 100, 100);
            AP.push(point)
            h = h + 10
        }
    }

    for (var i = 0; i < 30; i++) {
        var rand1 = Math.round(Rune.random(AP.length - 1));
        var rand2 = Math.round(Rune.random(AP.length - 1));
        r.line(AP[rand1].vars.x-10, AP[rand1].vars.y-10, AP[rand2].vars.x+10, AP[rand2].vars.y+10)
    }
}


   function letter(x,y,string){
    var AP = [];
    var path = f.toPath(string, 150, 200, typesize)
         .fill(false)
        .stroke(false)

    r.stage.add(path);

    // Just for fun, convert the path to polygons.
    var polys = path.toPolygons({ spacing: 25 });
    // console.log(polys)
    // console.log(polys.length)


    // loop through the points and change them a little bit
    for (var i = 0; i < polys.length; i++) {

        var poly = polys[i];
        poly.fill(false).move(x, y, true);

        for (var j = 0; j < poly.vars.vectors.length; j++) {
            var vec = poly.vars.vectors[j];
            var point = r.circle(poly.vars.x + vec.x, poly.vars.y + vec.y, 3, 3).stroke(false).fill('hsv', h, 100, 100);
            AP.push(point)
            h = h + 10
        }
    }

    for (var i = 0; i < 30; i++) {
        var rand1 = Math.round(Rune.random(AP.length - 1));
        var rand2 = Math.round(Rune.random(AP.length - 1));
        r.line(AP[rand1].vars.x-10, AP[rand1].vars.y-10, AP[rand2].vars.x+10, AP[rand2].vars.y+10).stroke('hsv', h, 100, 100)
   h = h + 10
    }
}
