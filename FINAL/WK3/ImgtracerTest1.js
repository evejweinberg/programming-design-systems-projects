var uploadedFile;

$("#myButton").click(function() {
    $('#canvas').remove();

    var reader = new FileReader();
    reader.onload = function(e) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext("2d");
        canvas.width = 1024;
        canvas.height = 1024;
        // canvas.id = 'yo'
        var img = new Image();
        img.src = e.target.result;
       $('canvas').attr('id', 'yo');
                   $("#error-msg").text('LOADING')


        var btn = document.createElement("p"); // Create a <button> element
        var t = document.createTextNode("Loading"); // Create a text node
        btn.appendChild(t); // Append the text to <button>
        (function() {
            if (img.complete) {

                var val = parseInt(($("#myInput").val()));
                var spacing = parseInt(($("#newSpacing").val()));
                var colorNum = parseInt(($("#colorNum").val()));


                // grab the vars


                ctx.drawImage(img, 0, 0);
                callFullSene(ctx.getImageData(0, 0, 1024, 1024), val, spacing, colorNum);
            } else {
                setTimeout(arguments.callee, 50);
            }
        })();


    };
    reader.readAsDataURL(uploadedFile);


});


//callFullSene(400, 30, 11);
var myDropzone = new Dropzone("div#myDropzone", { url: "/" });
var btn = document.createElement("p"); // Create a <button> element
var t = document.createTextNode("Click Here to add file"); // Create a text node
btn.appendChild(t); // Append the text to <button>
document.getElementById('myDropzone').appendChild(btn);
myDropzone.on("addedfile", function(file, xhr) {
    uploadedFile = file;
});

///////////PUT EVERYTHING IN HERE///////////////
//////////////PUT EVERYTHING IN HERE///////////////
function callFullSene(imgData, val, spacing, colorNum) {
    console.log('function was called')
        ///////////PUT EVERYTHING IN HERE///////////////
        ///////////PUT EVERYTHING IN HERE///////////////







    $('<div />', { id: 'canvas' }).appendTo('body').ready(function() {
        console.log('canvas loaded')



        console.log(val)
        console.log(spacing)
        console.log(colorNum)

        if (!val || !spacing || !colorNum) {
            console.log('one parameter is missing')
            $("#error-msg").text('One Parameter is Missing')
                // $("#error-mesg").text('one parameter is missing')
        } else if (val && spacing && colorNum) {
            console.log('they all exist')
            $("#error-msg").text('NO ERRORS!!')
        }


        ////////////////////////////////////////
        /////////////////////////////////////////

        // var path = '../images/Faces_2b.png'
        // console.log('bouta look for canvas');
        var r = new Rune({
            container: "#canvas",
            width: 1024,
            height: 1024
        });

        var allstrokes = 4
        var strokecap = "round"

        // var colors = [
        //     new Rune.Color('hsv', 343, 35, 89), //pink 0
        //     new Rune.Color('hsv', 305, 77, 82), //red  1
        //     new Rune.Color('hsv', 309, 55, 85), //blue  2 
        //     new Rune.Color('hsv', 310, 51, 67), // purple  3
        //     new Rune.Color('hsv', 347, 59, 94), //yellow  4
        //     new Rune.Color('hsv', 340, 21, 90), //lght blue  5
        //     new Rune.Color('hsv', 300, 50, 23) //black   6
        // ];

        if (colorNum == 11) {

            var colorsB = [
                new Rune.Color('hsv', 343, 35, 89), //pink 0
                new Rune.Color('hsv', 343, 12, 100), //light pink 0
                new Rune.Color('hsv', 15, 77, 82), //red  1
                new Rune.Color('hsv', 15, 57, 102), //light orange
                new Rune.Color('hsv', 209, 55, 85), //blue  2 
                new Rune.Color('hsv', 250, 51, 67), // purple  3
                // new Rune.Color('hsv', 250, 41, 77), // purple  3
                new Rune.Color('hsv', 47, 59, 94), //yellow  4
                new Rune.Color('hsv', 190, 21, 97), //lght blue  5
                new Rune.Color('hsv', 195, 61, 97), //med blue
                new Rune.Color('hsv', 0, 0, 23), //black   6
                new Rune.Color('hsv', 10, 10, 28) //black2   6
            ];

        } else if (colorNum == 5) {
            var colorsB = [
                new Rune.Color('hsv', 343, 35, 89), //pink 0
                new Rune.Color('hsv', 343, 12, 100), //light pink 0
                new Rune.Color('hsv', 15, 77, 82), //red  1
                new Rune.Color('hsv', 15, 57, 102), //light orange
                new Rune.Color('hsv', 209, 55, 85), //blue  2 
            ]

        } else if (colorNum == 4) {
            var colorsB = [
                // new Rune.Color('hsv', 343, 35, 89), //pink 0
                new Rune.Color('hsv', 343, 12, 100), //light pink 0
                new Rune.Color('hsv', 15, 77, 82), //red  1
                new Rune.Color('hsv', 47, 59, 94), //yellow  4

                // new Rune.Color('hsv', 15, 57, 102), //light orange
                new Rune.Color('hsv', 209, 55, 85), //blue  2 
            ]

        } else if (colorNum == 3) {
            var colorsB = [
                // new Rune.Color('hsv', 343, 35, 89), //pink 0
                // new Rune.Color('hsv', 343, 12, 100), //light pink 0
                new Rune.Color('hsv', 15, 77, 82), //red  1
                new Rune.Color('hsv', 47, 59, 94), //yellow  4

                // new Rune.Color('hsv', 15, 57, 102), //light orange
                new Rune.Color('hsv', 209, 55, 85), //blue  2 
            ]

        }


        var traceColors = _.map(colorsB, function(col) {
            var obj = col.rgb();
            obj.a = 255;
            return obj;
        });


        // Synchronous tracing to SVG string
        var svgstr = ImageTracer.imagedataToSVG(imgData, { pal: traceColors, pathomit: 52, lcpr: 0, scale: 1, blurradius: 40 });

        // Appending SVG
        // ImageTracer.appendSVGString(svgstr, 'svgcontainer');

        var paths = svgToRune(String(svgstr));

        for (var i = 0; i < paths.length; i++) {

            // create polygons from the path
            var polygons = paths[i].toPolygons({ spacing: spacing });
            var poly = polygons[0];


            //chang this to a number value



            if (document.getElementById("lines").checked == true) {
                console.log('lines on')
                if (poly.vars.fill.values.rgb[0] == traceColors[colorsB.length - 1].r) {
                    // console.log('YES four')
                    RunContains("lines", poly, Math.floor(Rune.random(2, colorNum - 1)))
                }
            }
            if (document.getElementById("dots").checked == true) {
                if (poly.vars.fill.values.rgb[0] == traceColors[0].r) {

                    RunContains("dots", poly, 1)
                }
            }
            if (document.getElementById("circles").checked == true) {
                if (poly.vars.fill.values.rgb[0] == traceColors[colorsB.length - 2].r) {
                    // console.log('YES four')
                    RunContains("circles", poly, Math.floor(Rune.random(2, colorNum - 1)))
                }
            }







            // poly.vars.fill = colorsB[Math.floor(Rune.random(colorsB.length))] 
            poly.vars.stroke = false
                // console.log(poly.vars.fill)

            poly.vars.vectors = simplify(polygons[0].vars.vectors, val, false);

            // remove the path from the stage
            paths[i].removeParent();
        }


        r.draw();



        function RunContains(pattern, container, colIndex) {

            var size = 15;
            var sizeMin = 8;
            if (pattern == "dots") {

                for (var x = 2; x < r.width; x += size + 0.5) {
                    for (var y = 2; y < r.height; y += size + 0.5) {
                        if (container.contains(x, y)) {
                            r.circle(x, y, 3).fill(colorsB[colIndex]).stroke(false)

                        }
                    }
                }
            } else if (pattern == "lines") {



                for (var x = 2; x < r.width; x += size + 0.5) {
                    for (var y = 2; y < r.height; y += size + 0.5) {
                        var rand = Math.round(Math.random()) * 2 - 1
                            // console.log( 'rand' + rand)
                        if (container.contains(x, y)) {
                            if (rand == 1) {
                                r.line(x, y, x + sizeMin, y + sizeMin).fill(colorsB[colIndex]).stroke(colorsB[colIndex]).strokeWidth(allstrokes).strokeCap(strokecap)
                            } else {
                                r.line(x + sizeMin, y, x, y + sizeMin).fill(colorsB[colIndex]).stroke(colorsB[colIndex]).strokeWidth(allstrokes).strokeCap(strokecap)

                            }
                        }
                    }
                }

            } //lines over
            else if (pattern == "circles") {

                for (var x = 2; x < r.width; x += size + 5) {
                    for (var y = 2; y < r.height; y += size + 5) {
                        if (container.contains(x, y)) {
                            r.circle(x, y, sizeMin).stroke(colorsB[colIndex]).fill(false).strokeWidth(allstrokes)

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

                for (var i = 0; i < cmds.length; i++) {
                    var cmd = cmds[i];
                    if (cmd[0] == 'M') rpath.moveTo(cmd[1], cmd[2]);
                    else if (cmd[0] == 'L') rpath.lineTo(cmd[1], cmd[2]);
                    else if (cmd[0] == 'Q') rpath.curveTo(cmd[1], cmd[2], cmd[3], cmd[4]);
                    else if (cmd[0] == 'Z') rpath.closePath();
                }

                paths.push(rpath)

            });

            return paths;
        }




    })

}


////////////
