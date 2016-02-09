var r = new Rune({
    container: "#canvas",
    width: 800,
    height: 500
});

var size = 12;
var spacing = 10;
var decrementsize = .3

//points of ellipse
var cpoints = {
    "c": [100, 100],
    "r": 160
};

//ref RED circle
// r.ellipse(cpoints.c[0], cpoints.c[1], cpoints.r, cpoints.r).fill(255, 0, 0);

function drawHalftone(point1, size) {
    console.log(size);
    r.ellipse(point1[0], point1[1], size, size)
        .fill(0);
}







for (var i = 0; i < 100; i++) {
    for (var j = 0; j < 100; j++) {
        var pt1 = [i * spacing, j * spacing];
        // console.log(pt1)

        var halftoneDot = [pt1[0], pt1[1]];
        if (size <= 0) {
            size = 1;
        }

        if (dist(pt1[0], pt1[1], cpoints.c[0], cpoints.c[1]) < cpoints.r/2){
            console.log('yes', pt1)
            drawHalftone(pt1, size)

        }
        // if (pointInCircle(halftoneDot, cpoints.c, cpoints.r)) {
        //     drawHalftone(pt1, size)
        //     // console.log(size)


        // }
        size = size - decrementsize;
    }
}


r.draw();


function vecSub(a, b) {
    // console.log(typeof [b[0] - a[0], b[1] - a[1]][0]);
    return [b[0] - a[0], b[1] - a[1]];
}

// test if a point is in a circle
//  */
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
    return Math.sqrt( (z1-x1)*(z1-x1) + (x2-y1)*(x2-y1) );
  } else if (arguments.length === 6) {
    return Math.sqrt( (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) + (z2-z1)*(z2-z1) );
  }
};
