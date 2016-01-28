//ignore this
var r = new Rune({
    container: "#canvas",
    width: 800,
    height: 800,
    debug: true
});

var scaleUp = 2;
var TristartsX = 0; //start top left triangle
var TristartsY = 0; //start top left triangle
var invertedStartX = TristartsX; //temporary set to start
var triheight = 30*scaleUp;
var Vpadding = 40 * scaleUp;
var Hpadding = 20*scaleUp;
var triwidth = 30*scaleUp;
var NumOfFirstRow = 12;
var kTotal =5;
var triangleGroup = r.group(0,0)

for (var k = 0; k < kTotal; k++) { //4 vertical rows
  
    for (var j = 0; j < NumOfFirstRow - 2 * k; j++) { //
        console.log('k is ' + k + ' | j is ' + j)
        console.log('tristartX  ' + TristartsX)
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
        r.triangle(TristartsX + (Hpadding * j), TristartsY + (Vpadding * k), tri2x + (Hpadding * j), tri2y + (Vpadding * k), tri3x + (Hpadding * j), tri3y + (Vpadding * k), triangleGroup).stroke(0).fill(false).strokeWidth(3) // use triangle() once

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
TristartsX = (Hpadding*k)+(Hpadding)+(k*(triwidth/2));
    // TristartsX = TristartsX - ((triwidth) * (4-k))+Hpadding; 
    TristartsY = TristartsY + triheight; 
    }

    r.draw();
