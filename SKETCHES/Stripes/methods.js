var r = new Rune({ container: "#canvas", 
    width: $(window).width(), 
    height: $(window).height(), debug: false });
// console.log(r)

// var r = new Rune({
//     container: "#canvas",
//     width: $(window).width(),
//     height: $(window).height(),
//     debug: true
// });





var colors = [
    new Rune.Color('hsv', 52, 100, 100), //pink 0
    new Rune.Color('hsv', 320, 100, 100), //red  1
    new Rune.Color('hsv', 187, 100, 100), //blue  2 
    new Rune.Color('hsv', 229, 100, 100), // purple  3
    new Rune.Color('hsv', 152, 100, 100), //green 4
    new Rune.Color('hsv', 358, 100, 100), //lght blue  5
    new Rune.Color('hsv', 197, 100, 100), //blue  2 
];

// var noise = new Rune.Noise().noiseDetail(0);
// var noiseStep = 0;
var anycolor = colors[Math.round(Rune.random(colors.length))]
var top, bottom, left, right;

var scalar = 1;
// var kern = 20 * scalar;
var letterH = 150 * scalar;
var letterW = 100 * scalar;
// var 20 = (letterW * .16);
var letterWmid = (letterW / 2);
var letterHmid = (letterH / 2);
// var slantH = letterH / 9;
var bgCol = 255
var bgLetterCol = bgCol
// var avgStrokeWidth = 3;




function rightBar(startX, startY) {
    
    var rightBar = r.polygon(startX , startY ).lineTo(letterW - 20, 0).lineTo(letterW, 0).lineTo(letterW, letterH).lineTo(letterW - 20, letterH);
    var brightnesses = [0.5, 1, 0.15, 1.3, 0.4, 1.0, 0.6, 0.35, 0.25, 0.15];
    rightBar.fill(150).autoFillHatchLines(brightnesses[2], 45).stroke(false);
}



function semi(startX, startY, spin, scale) {

    var radius = letterWmid*scale;
  

    var points = 20;
    var semiCirc = r.polygon(startX + letterWmid, startY + letterWmid );
    var spacing = 180 / points;
    var spin = spin

    for (var j = 0; j < points + 1; j++) {
        // var addNoise = (noise.get(noiseStep) * 30)
        // var addNoise = 0

        var x = Math.cos(Rune.radians(spin - j * spacing)) * radius;
        var y = Math.sin(Rune.radians(spin - j * spacing)) * radius;
        semiCirc.lineTo(x, y).fill(false).stroke(false);
        // noiseStep += 0.1;
    }
    // semiCirc.closePath()
    //convert to a polygon
    var semipoly = semiCirc.toPolygon({ spacing: 25 })
    var anycolor = colors[Math.round(Rune.random(colors.length))]

    semipoly.fill(bgLetterCol).autoFillHatchLines(1, Rune.random(360)).stroke(false);
}


function _fillHatchLines(p, step, angle, drawLine) {


    // create rotated polygon vertices
    var vs = p.vars.vectors.map(function(v) {
        return v.rotate(angle);
    });

    // create a copy for applying rotation 
    var pr = p.copy();
    pr.removeParent();
    pr.vars.vectors = vs;

    // get bounds of rotated polygon
    var bounds = pr.bounds();

    // create group for fill lines
    var g = r.group(p.vars.x, p.vars.y);

    // scan pixels vertically
    for (var line = bounds.y; line < bounds.y + bounds.height; line += step) {
        var ixs = [];
        // enumerate edges
        for (var i = 0; i < vs.length; i++) {
            var from = vs[i];
            var to = vs[(i + 1) % vs.length];
            if (from.y < line && to.y > line) {
                var swp = from;
                var from = to;
                var to = swp;
            }
            if (from.y > line && to.y < line) {
                var x = from.x + (from.y - line) * (to.x - from.x) / (from.y - to.y);
                var ix = new Rune.Vector(x, line);
                ix = ix.rotate(-angle);

                ixs.push(ix);
            }
        }

        if (ixs.length >= 2) {
            drawLine(ixs[0], ixs[1], g);
        }
    }
}

Rune.Polygon.prototype.fillHatchLines = function(step, angle, drawLine) {
    _fillHatchLines(this, step, angle, drawLine);
    return this;
};

Rune.Polygon.prototype.autoFillHatchLines = function(brightness, exactAngle) {


    var gamma = 4.05;
    var step = 9;
    var strokeWidth = Rune.random(2, 5)
    var alphaMin = 1 * 0.5;
    var alphaVariation = 1 * 0.2 + 0.05;

    this.fillHatchLines(step, exactAngle, function(a, b, g) {
        var anycolor = colors[Math.round(Rune.random(colors.length))]
        r.line(a.x, a.y, b.x, b.y, g).strokeWidth(strokeWidth)
            .stroke(anycolor)
            .strokeCap("round")
            // .stroke(0, 0, 0, Rune.random(alphaMin, alphaMin + alphaVariation));
    });
    return this;
};






function HalftoneDots(startX, startY, circumferance) {

    var size = 42;
    var spacing = 10;
    var decrementsize = .3

    //points of main ellipse
    var cpoints = {
        "c": [startX, startY],
        "r": circumferance
    };

    for (var i = 0; i < r.width; i++) {
        for (var j = 0; j < r.height; j++) {
            var pt1 = [i * spacing, j * spacing];

            var halftoneDot = [pt1[0], pt1[1]];
            if (dist(pt1[0], pt1[1], cpoints.c[0], cpoints.c[1]) < cpoints.r / 2) {

                drawHalftone(pt1, size)

            }

        }
    }




    function drawHalftone(point1, size) {
        var anycolor = colors[Math.round(Rune.random(colors.length))]

        r.ellipse(point1[0], point1[1], 5, 5)
            .fill(anycolor).stroke(false);
    }



    function vecSub(a, b) {
        return [b[0] - a[0], b[1] - a[1]];
    }


    function pointInCircle(p, c, r) {

        //var dist = vecSub(c, p);
        if (magnitude(dist) <= r) {
            return true;
        } else {
            return false;
        }
    }

    function magnitude(vec) {
        return Math.sqrt(Math.pow(vec[0], 2) + Math.pow(vec[1], 2));
    }


    function dist(x1, y1, z1, x2, y2, z2) {
        if (arguments.length === 4) {
            // In the case of 2d: z1 means x2 and x2 means y2
            return Math.sqrt((z1 - x1) * (z1 - x1) + (x2 - y1) * (x2 - y1));
        } else if (arguments.length === 6) {
            return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1));
        }
    };

}



function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

semi(0,0, 0, 1);
semi(100,100, 180,1);


rightBar(0,0)


r.draw();
