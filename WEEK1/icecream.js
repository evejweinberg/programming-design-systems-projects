//ignore this
var r = new Rune({
    container: "#canvas",
    width: 800,
    height: 800,
    debug: true
});

////////////////////////
///my ice cream cone///
///////////////////////

var coneCenterx = 365;
var coneCentery = 257;
var scoopRad = 180;
var coneTopWidth = 100;
  //● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● 
r.ellipse(coneCenterx, coneCentery, scoopRad, scoopRad)
    .fill(0)
    .stroke(0);

//▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶
r.triangle(coneCenterx - coneTopWidth, coneCentery + 27, coneCenterx + coneTopWidth, coneCentery + 27, coneCenterx, coneCentery + 400)
    .fill(255).stroke(255)

var myGroup = r.group(200, 200).rotate(0);
var triangleGroup = r.group(200, 40);

function Cone(rotation, negative, pushRight, pushDown, tilt) {



    var a = 183; //height of the curves peak
    var b = 10.5; //position of center
    var c = 3.75; //width of curve
    for (var j = 0; j < 20; j++) {
        var y = a / Math.pow(Math.E, (Math.pow(j - b, 2)) / (2 * c * c));

        // ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ //
        r.rect(pushRight + j * 14, pushDown + negative * y + (j * tilt), 5, Math.round(y), myGroup)
            .fill(0)
            .rotate(rotation);
    }

}


Cone(-40, -1, -140, 420, -10);
Cone(40, -1, 100, 0, 10);

r.draw();


//other stuff I tried
//▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼//
// for (var t =0;t<12;t++)
// {
// console.log('hi');
//  r.triangle(10*-t, 10*-t, 400*-t, 10*-t, 200*-t, 300, triangleGroup)

// .fill(255)
//   .stroke(0)}
// var swoopy = r.rect(300,300,20,60).fill(0)

// .strokeWidth(40);
// .copy()
