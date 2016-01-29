//ignore this
var r = new Rune({
    container: "#canvas",
    width: 800,
    height: 800,
    debug: true
});



var scaleUp = 1;
var TristartsX = 0; //start top left triangle
var TristartsY = 0; //start top left triangle
var invertedStartX = TristartsX; //temporary set to start
var triheight = 40 * scaleUp;
var Vpadding = 10 * scaleUp;
var Hpadding = 0 * scaleUp;
var triwidth = 20 * scaleUp;
var NumOfFirstRow = 15; //must be odd, want to fix that

var kTotal = 9;




var scoopCenterx = r.width / 2;
var scoopRad = NumOfFirstRow / 2 * (triwidth + Hpadding) * .99;
var coneCentery = r.height / 2 - (scoopRad * .3);
var sprinkles = true;

//● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● 
r.ellipse(scoopCenterx, coneCentery, scoopRad, scoopRad)
    .fill(0)
    .stroke(0);


var sprinklesGroup = r.group(scoopCenterx - 50, coneCentery - (scoopRad))
    // ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ ▇ 
if (sprinkles == true) {
    var spRot = 45,
        spStroke = false,
        spFill = 255,
        spWidth = 2.5,
        spHeight = 12, xMult =0, yMult=0;
}
for (var i = 0; i < 6; i++) { //rows
    if (sprinkles == false) {
        console.log('sprinkes false')
        spRot = 0, spStroke = false, spFill = 255, spWidth = r.width, spHeight = 60, xMult = -300, yMult = 32;
    }
    for (var j = 0; j < 9; j++) { //sprinkles per row
        console.log(i + '  ' + j)
        r.rect(25 * j+xMult, 30 * i+yMult, spWidth, spHeight, sprinklesGroup).fill(spFill).stroke(spStroke).rotate(spRot);

    }
    if (i == 4) {

        sprinkles = false;
    }


}
// r.rect(0, 0, r.width, 50 + r.height / 2)
//     .fill(false)
//     .stroke(255)
//     .strokeWidth(120)





var triangleGroup = r.group(r.width / 2 - ((NumOfFirstRow / 4.3) * (triwidth + Hpadding)), coneCentery + (Vpadding * 3.5))
for (var k = 1; k < kTotal; k++) { //4 vertical rows

    for (var j = 0; j < NumOfFirstRow - 2 * k; j++) { //
        // console.log('k is ' + k + ' | j is ' + j)
        // console.log('tristartX  ' + TristartsX)
        var tri2x = TristartsX + triwidth;
        var tri2y = TristartsY;
        var tri3x = TristartsX + triwidth / 2;
        var tri3y = TristartsY + triheight;

        //iff ODD, invert triangle
        if (j % 2 == 1) {
            invertedStartX = TristartsX;
            tri2x = tri2x;
            tri3x = tri3x;
            TristartsX = tri3x + triwidth;
            TristartsY = TristartsY + triheight;
        }

        //▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶
        r.triangle(TristartsX + (Hpadding * j), TristartsY + (Vpadding * k), tri2x + (Hpadding * j), tri2y + (Vpadding * k), tri3x + (Hpadding * j), tri3y + (Vpadding * k), triangleGroup).stroke(0).fill(false).strokeWidth(4) // use triangle() once

        //un-invert it
        if (j % 2 == 1) { //
            TristartsX = invertedStartX;
            tri2x = tri2x - Hpadding;
            tri3x = tri3x - Hpadding;
            TristartsY = TristartsY - triheight;
            TristartsX = TristartsX + triwidth;
        }

    } // j ends

    //move from end triangle of each line to first triangle of next line
    if (k == 0) {
        TristartsX = (Hpadding * k) + (Hpadding) + (k * (triwidth / 2)) + (Hpadding / 1.5);
    } else {
        TristartsX = (Hpadding * k) + (Hpadding) + (k * (triwidth / 2));
    }

    // TristartsX = TristartsX - ((triwidth) * (4-k))+Hpadding; 
    TristartsY = TristartsY + triheight;
}

r.draw();
