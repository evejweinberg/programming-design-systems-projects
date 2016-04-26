var path = '../images/Faces_3.png'

var r = new Rune({
    container: "#canvas",
    width: 1024,
    height: 1024
});

var allstrokes = 4
var strokecap = "round"

var colors = [
    new Rune.Color('hsv', 343, 35, 89), //pink 0
    new Rune.Color('hsv', 305, 77, 82), //red  1
    new Rune.Color('hsv', 309, 55, 85), //blue  2 
    new Rune.Color('hsv', 310, 51, 67), // purple  3
    new Rune.Color('hsv', 347, 59, 94), //yellow  4
    new Rune.Color('hsv', 340, 21, 90), //lght blue  5
    new Rune.Color('hsv', 300, 50, 23) //black   6
];

var colorsB = [
    new Rune.Color('hsv', 343, 35, 89), //pink 0
    new Rune.Color('hsv', 15, 77, 82), //red  1
    new Rune.Color('hsv', 15, 57, 102), //light orange
    new Rune.Color('hsv', 209, 55, 85), //blue  2 
    new Rune.Color('hsv', 250, 51, 67), // purple  3
    new Rune.Color('hsv', 47, 59, 94), //yellow  4
    new Rune.Color('hsv', 190, 21, 97), //lght blue  5
    new Rune.Color('hsv', 195, 61, 97), //med blue
    new Rune.Color('hsv', 0, 0, 23), //black   6
    new Rune.Color('hsv', 10, 10, 28), //black2   6
];

// var objs = []
var traceColors = _.map(colorsB, function(col) {
    var obj = col.rgb();
    obj.a = 255;
    // console.log(obj)
    // objs.push(obj)
    return obj;
});
// console.log('traceColors' + objs)


ImageTracer.loadImage(
    path,
    function(canvas) {

        // Getting ImageData from canvas with the helper function getImgdata().
        var imgd = ImageTracer.getImgdata(canvas);

        // Synchronous tracing to SVG string
        var svgstr = ImageTracer.imagedataToSVG(imgd, { pal: traceColors, pathomit: 152, lcpr: 0, scale: 1, blurradius: 40 });

        // Appending SVG
        // ImageTracer.appendSVGString(svgstr, 'svgcontainer');

        var paths = svgToRune(String(svgstr));

        for (var i = 0; i < paths.length; i++) {

            // create polygons from the path
            var polygons = paths[i].toPolygons({ spacing: 40 });
            var poly = polygons[0];
            // console.log(poly.vars.fill.values.rgb[0])
            // console.log('trace', traceColors[0].r)
                // RunContains(poly)

            if (poly.vars.fill.values.rgb[0] == traceColors[0].r) {
                // console.log('yes pink')
                RunContains("dots", poly, 1)
            } else  if (poly.vars.fill.values.rgb[0] == traceColors[8].r) {
                // console.log('YES four')
                RunContains("lines", poly, 3)
            }

           





            // poly.vars.fill = colorsB[Math.floor(Rune.random(colorsB.length))] 
            poly.vars.stroke = false
                // console.log(poly.vars.fill)

            poly.vars.vectors = simplify(polygons[0].vars.vectors, 10, false);

            // remove the path from the stage
            paths[i].removeParent();
        }


        // console.log(svgToRune(String(svgstr)))

        // svgstr.length is 263794

        // var commands = svgstr.split(/(?=[LMCQ])/);
        // console.log(commands)

        // var pointArrays = commands.map(function(d) {
        //     var pointsArray = d.slice(1, d.length).split(',');
        //     var pairsArray = [];
        //     for (var i = 0; i < pointsArray.length; i += 2) {
        //         pairsArray.push([+pointsArray[i], +pointsArray[i + 1]]);
        //     }
        //     return pairsArray;
        // });
        // console.log(pointArrays)
        // var newdata = svgstr.node();
        // console.log(newdata)

        // loop over all paths and create polygons from them



        r.draw();

    }
);



function RunContains(pattern, container, colIndex) {

        var size = 15;
    if (pattern == "dots") {

        for (var x = 2; x < r.width; x += size + 0.5) {
            for (var y = 2; y < r.height; y += size + 0.5) {
                if (container.contains(x, y)) {
                    r.circle(x, y, 3).fill(colorsB[colIndex]).stroke(false)

                }
            }
        }
    }

    else if (pattern == "lines"){
      

                var rand = Math.round(Math.random()) * 2 - 1
                console.log(rand)
        for (var x = 2; x < r.width; x += size + 0.5) {
            for (var y = 2; y < r.height; y += size + 0.5) {
                if (container.contains(x, y)) {
                    r.line(x, y, x+size*rand, y+ size*rand).fill(colorsB[colIndex]).stroke(colorsB[colIndex]).strokeWidth(allstrokes).strokeCap(strokecap)

                }
            }
        }

    }

}



function svgToRune(svg) {
    // console.log(svg)
    // make jquery element from the svg element
    var jsvg = $(svg);

    var paths = [];

    // loop through each path in the svg
    jsvg.find('path').each(function() {

        // convert path to jquery element and get the fill
        // and stroke from the element
        var path = $(this);
        var rgbFill = path.attr('fill').replace('rgb(', '').replace('rgba(', '').replace(')', '').split(',');
        var rgbStroke = path.attr('stroke').replace('rgb(', '').replace('rgba(', '').replace(')', '').split(',');
        // console.log(rgbFill[0])
        // create new rune.js path
        var rpath = r.path(0, 0)
            .fill(parseInt(rgbFill[0]), parseInt(rgbFill[1]), parseInt(rgbFill[2]))
            .stroke(parseInt(rgbStroke[0]), parseInt(rgbStroke[1]), parseInt(rgbStroke[2]))

        // loop through all path data and call corresponding Rune.js functions.
        var d = path.attr('d');
        var cmds = parsePath(d);
        // console.log(cmds)
        //simplify(cmds, 132, false)
        //console.log(simplify(cmds, 900, false))
        for (var i = 0; i < cmds.length; i++) {
            var cmd = cmds[i];
            if (cmd[0] == 'M') rpath.moveTo(cmd[1], cmd[2]);
            else if (cmd[0] == 'L') rpath.lineTo(cmd[1], cmd[2]);
            else if (cmd[0] == 'Q') rpath.curveTo(cmd[1], cmd[2], cmd[3], cmd[4]);
            else if (cmd[0] == 'Z') rpath.closePath();
        }

        paths.push(rpath)
            // console.log(cmds)*/
    });

    return paths;
}
