var r = new Rune({
    container: "#canvas",
    width: $(window).width(),
    height: $(window).height(),
    debug: false
});




function _fillHatchLines(p, step, angle, drawLine,parent) {


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
    var g = r.group(p.vars.x, p.vars.y,parent);

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

Rune.Polygon.prototype.fillHatchLines = function(step, angle, drawLine,parent) {
    _fillHatchLines(this, step, angle, drawLine,parent);
    return this;
};

Rune.Polygon.prototype.autoFillHatchLines = function(exactAngle,parent) {


  
    var step = 109;
   

    this.fillHatchLines(step, exactAngle, function(a, b, g) {
        var anycolor = colorsSkin[Math.floor(Rune.random(colorsSkin.length))]
        r.line(a.x, a.y, b.x, b.y, g,parent).strokeWidth(5)
            .stroke(anycolor)
            .strokeCap("round")
            // .stroke(0, 0, 0, Rune.random(alphaMin, alphaMin + alphaVariation));
    },parent);
    return this;
};






// function HalftoneDots(startX, startY, circumferance) {

//     var size = 42;
//     var spacing = 10;
//     var decrementsize = .3

//     //points of main ellipse
//     var cpoints = {
//         "c": [startX, startY],
//         "r": circumferance
//     };

//     for (var i = 0; i < r.width; i++) {
//         for (var j = 0; j < r.height; j++) {
//             var pt1 = [i * spacing, j * spacing];

//             var halftoneDot = [pt1[0], pt1[1]];
//             if (dist(pt1[0], pt1[1], cpoints.c[0], cpoints.c[1]) < cpoints.r / 2) {

//                 drawHalftone(pt1, size)

//             }

//         }
//     }




// function drawHalftone(point1, size) {
//     var anycolor = colors[Math.round(Rune.random(colors.length))]

//     r.ellipse(point1[0], point1[1], 5, 5)
//         .fill(anycolor).stroke(false);
// }



function vecSub(a, b) {
    return [b[0] - a[0], b[1] - a[1]];
}


// function pointInCircle(p, c, r) {

//     //var dist = vecSub(c, p);
//     if (magnitude(dist) <= r) {
//         return true;
//     } else {
//         return false;
//     }
// }

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





function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}