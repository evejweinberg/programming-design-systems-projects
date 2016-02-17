var black = 0;
var white = 255;
var raindrops = [];
// var number = 0;
var movingX = 0,
    movingY = 0,
    deg = Rune.random(0, 50);
var numberOfpts = 3;
var pointDegree = 360 / numberOfpts; //how much to rotate every time
var raindropCols = Rune.random(2, 6)
var RndmRowNum = Rune.random(9, 9);
var noise = new Rune.Noise();
var noiseStep = 0;
var rw = $(window).width();
var rh = $(window).height();
var bgCols = []
var randomvalue;
var bgRandom;
var r = new Rune({
    container: "#canvas",
    width: rw,
    height: rh - 200,
    debug: true
});


Everything();

///////////buttons///////////////
/////////////////////////////////
$('#refresh').click(function() {
    // location.reload();
    // $("#canvas").html('');
    $("#canvas").empty();
    Everything();
    $("svg").css({ "background-color": bgRandom });
    $("button").css({ "background-color": bgRandom });
    // $("svg").css({ "background-color": "hsl(320, .5,.7)" });
});
////////////////
$('#save').click(function() {
    crowbar();

    // var c = document.getElementById("canvas");
    // var link = document.getElementById('canvas');
    // link.setAttribute('download', 'Waves.png');
    // link.setAttribute('href', c.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    // link.click();
});

window.addEventListener('resize', function(event) {
    //   rw = $(window).width();
    // rh = $(window).height();
    // r.width = rw;
    // r.height=rh-200;
    // $("svg").css({ "width": "100%" });
    // $("svg").css({ "height": "100%" });
    // $("#canvas").css({ "width": "100%" });
    console.log('resized')
});
//////////////////buttons over//////////////
//////////////////////////////////////////

function Everything() {
    var black = 0;
    var white = 255;
    var raindrops = [];
    // var number = 0;
    var movingX = 0,
        movingY = 0,
        deg = Rune.random(0, 50);
    var numberOfpts = 3;
    var pointDegree = 360 / numberOfpts; //how much to rotate every time
    var raindropCols = Rune.random(2, 6)
    var RndmRowNum = Rune.random(9, 9);

    var noise = new Rune.Noise();
    var noiseStep = 0;

    rw = $(window).width();
    rh = $(window).height();




    r = new Rune({
        container: "#canvas",
        width: rw,
        height: rh - 200,
        debug: true
    });
    //shades of blue
    var bgCols = ["#1ab3c9", "#2acef8", "#0c707e", "#1fbfcc", "#133c69", "#068d98", "#1ac9c9"]

    randomvalue = Math.floor(Rune.random(0, bgCols.length));
    bgRandom = bgCols[randomvalue];

    var noisePath = r.path(0, 300)
        .stroke(255)
        .fill(false)
        .strokeWidth(2);



    //call the raindrop function here, push to an array //////
    var startX = -500;
    var startY = -400;
    var lineLength = 800;
    var lineWidth = 500;
    var oddAdder;
    for (var i = 0; i < raindropCols; i++) {
        for (var j = 0; j < RndmRowNum; j++) {
            var moveLeft = Rune.random(300, 500);
            var moveDown = Rune.random(40, 90);
            if (i % 2 == 0) {
                oddAdder = moveLeft / 3;
            } else {
                oddAdder = 0;
            }
            raindrops[i] = new Raindrop(startX + oddAdder + (moveLeft * j), startY + (moveDown * i), startX + oddAdder + (moveLeft * j) - lineWidth, startY + (moveDown * i) + lineLength, i - .2, Rune.random(20, 100), Rune.random(20, 100), Rune.random(1, 5));


        }
        // r.ellipse(r.width/2,startY-200+lineLength,rw*2,300).fill(false).stroke(white);
    }


    /////////////main frame////////////



    for (var i = 0; i < 6; i++) {
        var xStep = 15;


        if (i > 3) {
            var lineheight = r.height - 220;

        } else {
            var lineheight = r.height - 620;
        }

        noise.noiseSeed(Rune.random(100));

        var noisePath = r.path(0, lineheight + (i * 30))
            .stroke(255)
            .fill(false)
            .strokeWidth(Rune.random(.2, 3));

        var noiseStep = 0;

        for (var x = 0; x < r.width + 20; x += xStep) {
            var y = noise.get(noiseStep) * 100;
            noisePath.lineTo(x, y)
                // .strokeDash("10,10,300" + Rune.random(300,30))
            ;

            noiseStep += 0.05;
        }
    }
    ///////////////////////////////////





    //////////////////
    function Raindrop(lineStartx, lineSarty, lineEndx, LineEndy, lineStroke, dash1, dash2, randomRingAmt) {

        var raindropGroup = r.group(0, 0);
        var splashWidth = 60;
        var ringTime = false;

        var radius = 40;
        var points = 40;

        if (ringTime == true) {
            lineStroke = lineStroke - 2;
        } else {
            lineStroke = lineStroke;
        }

        var spacing = 360 / points;

        for (var i = 0; i < randomRingAmt; i++) {

            var shape = r.polygon(lineEndx, LineEndy, raindropGroup);

            for (var j = 0; j < points; j++) {
                ringTime = true;
                var randomRadius = radius + Rune.random(2);
                var x = Math.cos(Rune.radians(j * spacing)) * i * randomRadius;
                //make Y a bit skinnier to create perspective
                var y = .28 * Math.sin(Rune.radians(j * spacing)) * i * randomRadius;

                shape.lineTo(x, y).strokeDash("10,90," + dash1 / 2 + "," + dash2 / 2);
            }
        }

        var ringTime = false;

        //make a dotted line
        var diagnalLine = r.line(lineStartx, lineSarty, lineEndx, LineEndy, raindropGroup).strokeDash(dash1 + "," + dash2);
        //curveTo(control,control,control,control,x,y)
        var splash = r.path(lineEndx, LineEndy, raindropGroup)
            .curveTo(-splashWidth / 2, -100, -splashWidth, -30);

        //var puddle = r.polygon(lineEndx, LineEndy, raindropGroup);
        //puddle.lineTo
        //r.polygon(r.width / 2, 125 + (i * 200));

        for (var i = 0; i < raindropGroup.children.length; i++) {
            raindropGroup.children[i].strokeWidth(lineStroke).stroke(white).strokeCap("round").fill(false);
        }

    }




    r.draw();

}
