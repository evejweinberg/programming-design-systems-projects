//https://runemadsen.github.io/rune.js/documentation.html#runegrid
// _____________________________________________________________________________________________________
//       __     ____       __   _____          __     _     _     __   ______   _____    _   _      __  
//     /    )   /    )     /    /    )       /    )   |    /    /    )   /      /    '   /  /|    /    )
// ---/--------/___ /-----/----/----/--------\--------|---/-----\-------/------/__------/| /-|----\-----
//   /  --,   /    |     /    /    /          \       |  /       \     /      /        / |/  |     \    
// _(____/___/_____|__ _/_ __/____/_______(____/______|_/____(____/___/______/____ ___/__/___|_(____/___
//                                                     /                                                
//   

var r = new Rune({
    container: "#canvas",
    width: 900,
    height: 1200,
    debug: false
});

//////◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆//////
var halfOpac = 1;
var drawDiag = false
var colorIncremment = 7;
var Title = []
var phrase = "The Electric Acid Koolaid Test ";
var res = phrase.split("");
// console.log(res)
var fontsize = 140;
var lettersinRow = 5
var typesize = 300
var h = 0;
var letters = ["A", "B", "C", "D"];
var margin = 0;
var lots = []
var m = 0;
var size = 4;
var hstart = 0;
var f = new Rune.Font("assets/LemonMilk.Ttf");
var fAbel = new Rune.Font("assets/Abel.otf");


///////◼///◼///◼///◼///◼///◼///◼///◼///◼///◼///◼////◼////

f.load(function(err) {

    var grid = r.grid({
        x: margin * 2,
        y: margin * 2,
        width: r.width - margin,
        height: r.height - margin,
        gutter: margin,
        //gutterWidth
        columns: 12,
        rows: 16
    });
    var rectWidth = grid.vars.moduleWidth / 6
    var rectHeight = rectWidth; //grid.vars.moduleHeight/6;


for (var i = 0; i < grid.modules.length; i++) {

        var color = new Rune.Color('hsv', hstart, 40, 100);
        var color2 = new Rune.Color('hsv', hstart + 20, 70, 100);
        var color3 = new Rune.Color('hsv', Rune.random(360), 70, 100);
        var randomCol = Math.ceil(Rune.random(grid.vars.columns));
        var randomRow = Math.ceil(Rune.random(grid.vars.rows));
        var xreg = grid.vars.moduleWidth - grid.vars.moduleWidth
        var yreg = grid.vars.moduleHeight - grid.vars.moduleHeight
        var x = Rune.random(30, grid.vars.moduleWidth - 30);
        var y = Rune.random(30, grid.vars.moduleHeight - 30);
        var x2 = Rune.random(30, grid.vars.moduleWidth - 30);
        var y2 = Rune.random(30, grid.vars.moduleHeight - 30);


        DoFunStuff(xreg, yreg, x, y, x2, y2, color, color2, grid.modules[i], color3);
        hstart = hstart + 7;
    }




    //////MASK THE BACKGROUND UP WITH LETTERS AND WHITE BOX
    // for (var i = 0; i < res.length; i++) {

    //     if (i % lettersinRow == 0) {
    //         m = m + 1
    //     }

    //     var myMask = r.path(100 + fontsize * (i % lettersinRow), 100 + fontsize * m)

    //     //rectangle mask
    //     .lineTo(fontsize, 0)
    //         .lineTo(fontsize, -fontsize)
    //         .lineTo(0, -fontsize)
    //         .closePath()

    //     .fillRule("evenodd")
    //         .fill(255,.5)
    //         .stroke(false)


    //     var letterPath = f.toPath(res[i], 0, 0, fontsize)
    //     myMask.vars.anchors = myMask.vars.anchors.concat(letterPath.vars.anchors)
    // }
    // // and 4 rectanlges around it
    // r.rect(0, 0, 100, r.height).fill(255,.5).stroke(false)
    // r.rect(100 + fontsize * 5, 0, 100, r.height).fill(255,.5).stroke(false)
    // r.rect(0, 100 + fontsize * 6, r.width, 400).fill(255,.5).stroke(false)
    // r.rect(0, 0, r.width, 100).fill(255,.5).stroke(false)



    var grid2 = r.grid({
        x: margin * 2,
        y: margin * 2,
        width: r.width - margin,
        height: r.height - margin,
        gutter: margin,
        //gutterWidth
        columns: 12,
        rows: 16
    });

    for (var i = 0; i < grid2.modules.length; i++) {


        var color = new Rune.Color('hsv', hstart, 40, 100);
        var color2 = new Rune.Color('hsv', hstart + 20, 70, 100);
        var color3 = new Rune.Color('hsv', Rune.random(360), 70, 100);
        LineswithNoise();
        var randomCol = Math.ceil(Rune.random(grid2.vars.columns));
        var randomRow = Math.ceil(Rune.random(grid2.vars.rows));
        var xreg = grid2.vars.moduleWidth - grid2.vars.moduleWidth
        var yreg = grid2.vars.moduleHeight - grid2.vars.moduleHeight
        var x = Rune.random(30, grid2.vars.moduleWidth - 30);
        var y = Rune.random(30, grid2.vars.moduleHeight - 30);
        var x2 = Rune.random(30, grid2.vars.moduleWidth - 30);
        var y2 = Rune.random(30, grid2.vars.moduleHeight - 30);
        // console.log(grid2.modules[i])
        if (grid2.modules[i].vars.x % 2) {
            drawDiag = true
        }

        // DoFunStuffLines(xreg, yreg, x, y, x2, y2, color, color2, grid2.modules[i], color3);
        hstart = hstart + colorIncremment;
    }

 



    ///////
    ///f.load(function(err) {

    var grid3 = r.grid({
        x: margin * 2,
        y: margin * 2,
        width: r.width - margin,
        height: r.height - margin,
        gutter: margin,
        //gutterWidth
        columns: 12,
        rows: 16
    });
    var rectWidth = grid3.vars.moduleWidth / 6
    var rectHeight = rectWidth; //grid.vars.moduleHeight/6;


for (var i = 0; i < grid.modules.length; i++) {

        var color = new Rune.Color('hsv', hstart, 40, 100);
        var color2 = new Rune.Color('hsv', hstart + 20, 70, 100);
        var color3 = new Rune.Color('hsv', Rune.random(360), 70, 100);
        var randomCol = Math.ceil(Rune.random(grid3.vars.columns));
        var randomRow = Math.ceil(Rune.random(grid3.vars.rows));
        var xreg = grid.vars.moduleWidth - grid3.vars.moduleWidth
        var yreg = grid.vars.moduleHeight - grid3.vars.moduleHeight
        var x = Rune.random(30, grid3.vars.moduleWidth - 30);
        var y = Rune.random(30, grid3.vars.moduleHeight - 30);
        var x2 = Rune.random(30, grid3.vars.moduleWidth - 30);
        var y2 = Rune.random(30, grid3.vars.moduleHeight - 30);


        DoFunStuff(xreg, yreg, x, y, x2, y2, color, color2, grid3.modules[i], color3);
        hstart = hstart + 7;
    }


        //////MASK THE BACKGROUND UP WITH LETTERS AND WHITE BOX
    for (var i = 0; i < res.length; i++) {

        if (i % lettersinRow == 0) {
            m = m + 1
        }

        var myMask = r.path(100 + fontsize * (i % lettersinRow), 100 + fontsize * m)

        //rectangle mask
        .lineTo(fontsize, 0)
            .lineTo(fontsize, -fontsize)
            .lineTo(0, -fontsize)
            .closePath()

        .fillRule("evenodd")
            .fill(255,halfOpac)
            .stroke(false)


        var letterPath = f.toPath(res[i], 0, 0, fontsize)
        myMask.vars.anchors = myMask.vars.anchors.concat(letterPath.vars.anchors)
    }
    // and 4 rectanlges around it
    r.rect(0, 0, 100, r.height).fill(255,halfOpac).stroke(false)
    r.rect(100 + fontsize * 5, 0, 100, r.height).fill(255,halfOpac).stroke(false)
    r.rect(0, 100 + fontsize * 6, r.width, 400).fill(255,halfOpac).stroke(false)
    r.rect(0, 0, r.width, 100).fill(255,halfOpac).stroke(false)




   LotsofNoisyCircles(0,-r.height/2);

   LotsofNoisyCircles(0,r.height/2);
   LotsofNoisyCircles(-r.width/2-40,0);
   LotsofNoisyCircles(r.width/2+40,0);




























function LotsofNoisyCircles(x,y)
{var noisecircleParent = r.group(x,y)
for (var i =1; i<90; i++)
{
var color = new Rune.Color('hsv', hstart, 40, 100);
    NoiseCircle(30+(7*i),color,noisecircleParent)
   hstart = hstart + colorIncremment;
}}
///noise circle
function NoiseCircle(radius,color,parent){
var noise = new Rune.Noise().noiseDetail(0.2);
var numPoints = 90;
var pointDegree = 360 / numPoints;
var noiseStep = 0;

var noiseCircle = r.polygon(r.width/2, r.height/2)
  .stroke(color)
  .fill(false)
  .addParent(parent)
  .strokeWidth(2);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 30) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 2;
}
}



////////////////


    ////add letter stroke lines or white fill
    var Polyparent = r.group(100, -880)

    for (var i = 0; i < res.length; i++) {

        if (i % lettersinRow == 0) {
            m = m + 1

        }
        var noise = new Rune.Noise();
        var noiseStep = 0;
        var color = new Rune.Color('hsv', hstart, 40, 100);
        var path = f.toPath(res[i], fontsize * (i % lettersinRow) + noise.get(noiseStep), fontsize * m, fontsize, true).fill(false).stroke(255).strokeWidth(4).strokeJoin("round")
            // console.log(path.vars.anchors[1])
        Title.push(path);
        var polys = path.toPolygons({ spacing: 5 }, Polyparent);
        hstart = hstart + colorIncremment;
        noiseStep += 3.25;
    }



    fAbel.load(function(err) {
        console.log("loaded name")
        var path = fAbel.toPath("Tom Wolfe", 450, 500, 500)
            .fill(255, 0, 0)


    });



    r.draw();


    function LineswithNoise() {
        var xStep = 5;
        var noise = new Rune.Noise();
        var noiseStep = 0;
        noise.noiseSeed(Rune.random(70));

        var noisePath = r.path(0, (i * 30))
            .stroke(color)
            .fill(false)
            .strokeWidth(Rune.random(.2, 2));

        for (var x = 0; x < r.width + 20; x += xStep) {
            var y = noise.get(noiseStep) * 100;
            noisePath.lineTo(x, y);

            noiseStep += 0.05;
        }

    }


    function DoFunStuff(xreg, yreg, x, y, x2, y2, color, color2, group, color3) {
        //add fun stuff here
        r.rect(xreg, yreg, grid.vars.moduleWidth, grid.vars.moduleHeight, group).fill(color).stroke(255);

        r.rect(xreg + grid.vars.moduleWidth * .45, yreg + grid.vars.moduleHeight * .45, grid.vars.moduleWidth * .9, grid.vars.moduleHeight * .9, group).fill(color2).stroke(255);
        r.rect(xreg + grid.vars.moduleWidth * .3, yreg + grid.vars.moduleHeight * .3, grid.vars.moduleWidth * .6, grid.vars.moduleHeight * .6, group).fill(color).stroke(255);


        // var b = r.circle(x2, y2, 10, group).fill(color2).stroke(false);
        // r.line(b.vars.x,b.vars.y,a.vars.x,a.vars.y,group)
        r.line(xreg, yreg, x, y, group).stroke(255)
        r.line(xreg, yreg + grid.vars.moduleHeight, x, y + rectHeight, group).stroke(255)
        r.line(xreg + grid.vars.moduleWidth, yreg + grid.vars.moduleHeight, x, y, group).stroke(255)
        r.line(xreg + grid.vars.moduleWidth, yreg, x + rectWidth, y, group).stroke(255)
        var a = r.rect(x, y, rectWidth, rectHeight, group).fill(color2).stroke(false);

        var b = r.rect(x + rectWidth / 4, y + rectHeight / 4, rectWidth / 2, rectHeight / 2, group).fill(color3).stroke(false);
        // console.log(a)
    }

    function DoFunStuffLines(xreg, yreg, x, y, x2, y2, color, color2, group, color3) {

        if (drawDiag == true) {}
        r.circle(0, 0, grid.vars.moduleHeight, group).stroke(color).fill(false)

    }










});
